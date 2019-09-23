---
title: 操作系统 - 进程管理
date: 2019-09-20 16:10:49
categories:
- 计算机科学
- 操作系统
---

> 再次预习一下操作系统
> 本文参考汤子瀛出版的计算机操作系统

<!-- more -->

## 基本概念

* 程序顺序执行 vs 并发执行
  * 顺序性/封闭性/可再现性
  * 间断性/失去封闭性/不可再现性
* 进程定义：进程是进程实体的运行过程，是系统进行资源分配和调度的一个独立单位
  * 进程实体 = 进程控制块(Process Control Block/PCB) + 程序段 + 数据段
* 进程状态
  * 基本状态：就绪-执行-挂起
  * 更多：创建 / 终止 / 阻塞
  * 注意：
    * 只有就绪态和运行态可以相互转换，其它的都是单向转换。就绪状态的进程通过调度算法从而获得 CPU 时间，转为运行状态；而运行状态的进程，在分配给它的 CPU 时间片用完之后就会转为就绪状态，等待下一次调度。
    * 阻塞状态是缺少需要的资源从而由运行状态转换而来，但是该资源不包括 CPU 时间，缺少 CPU 时间会从运行态转换为就绪态。

![image](https://user-images.githubusercontent.com/35499042/65404497-51ce6c80-de0b-11e9-91dc-e59546433b87.png)

## 进程同步

* 基本概念：
  * 同步：多个进程因为合作产生的直接制约关系，使得进程有一定的先后执行关系。
  * 互斥：多个进程在同一时刻只有一个进程能进入临界区。
  * 临界资源：多道程序系统中存在许多进程，它们共享各种资源，然而有很多资源一次只能供一个进程使用。一次仅允许一个进程使用的资源称为临界资源。
  * 临界区：在每个进程中访问临界资源的那段代码称为临界区

### 同步机制

#### 信号量机制

* 概念：把整型信号量定义为一个用于表示资源数目的整型量S，除初始化外，仅能通过两个标准的原子操作wait(S)/P操作和signal(S)/V操作来访问。

````
wait(S): 
  while S <= 0 do no-op;
  S = S - 1;

signal(S):
  S = S + 1;
````

#### 管程机制

* 问题：每个要访问临界资源的进程都必须自备PV操作。这就使大量的同步操作分散在各个进程中，导致代码污染，不易管理。
* 概念：代表共享资源的数据结构，以及由对该共享数据结构实施操作的一组过程所组成的资源管理程序，共同构成了一个操作系统的资源管理模块，我们称之为管程。

### 经典的进程同步问题

> 本节代码来自[CYC的CS-Notes](https://cyc2018.github.io/CS-Notes/#/notes/计算机操作系统%20-%20进程管理)

* 声明

````
// down : 如果信号量大于 0 ，执行 -1 操作；如果信号量等于 0，进程睡眠，等待信号量大于 0；
// up ：对信号量执行 +1 操作，唤醒睡眠的进程让其完成 down 操作。
typedef int semaphore;
semaphore mutex = 1;
void P1() {
    down(&mutex);
    // 临界区
    up(&mutex);
}

void P2() {
    down(&mutex);
    // 临界区
    up(&mutex);
}
````

* 生产者消费者问题

````
/*
** 信号量机制
*/
#define N 100
typedef int semaphore;
semaphore mutex = 1;
semaphore empty = N;
semaphore full = 0;

void producer() {
    while(TRUE) {
        int item = produce_item();
        down(&empty);
        down(&mutex);
        insert_item(item);
        up(&mutex);
        up(&full);
    }
}

void consumer() {
    while(TRUE) {
        down(&full);
        down(&mutex);
        int item = remove_item();
        consume_item(item);
        up(&mutex);
        up(&empty);
    }
}

/*
** 管程机制
*/
// 管程定义
monitor ProducerConsumer
    condition full, empty;
    integer count := 0;
    condition c;

    procedure insert(item: integer);
    begin
        if count = N then wait(full);
        insert_item(item);
        count := count + 1;
        if count = 1 then signal(empty);
    end;

    function remove: integer;
    begin
        if count = 0 then wait(empty);
        remove = remove_item;
        count := count - 1;
        if count = N -1 then signal(full);
    end;
end monitor;

// 生产者客户端
procedure producer
begin
    while true do
    begin
        item = produce_item;
        ProducerConsumer.insert(item);
    end
end;

// 消费者客户端
procedure consumer
begin
    while true do
    begin
        item = ProducerConsumer.remove;
        consume_item(item);
    end
end;

````

* 哲学家吃饭(进餐)问题

五个哲学家围着一张圆桌，每个哲学家面前放着食物。哲学家的生活有两种交替活动：吃饭以及思考。当一个哲学家吃饭时，需要先拿起自己左右两边的两根筷子，并且一次只能拿起一根筷子。

````
#define N 5
#define LEFT (i + N - 1) % N // 左邻居
#define RIGHT (i + 1) % N    // 右邻居
#define THINKING 0
#define HUNGRY   1
#define EATING   2
typedef int semaphore;
int state[N];                // 跟踪每个哲学家的状态
semaphore mutex = 1;         // 临界区的互斥
semaphore s[N];              // 每个哲学家一个信号量

void philosopher(int i) {
    while(TRUE) {
        think();
        take_two(i);
        eat();
        put_two(i);
    }
}

void take_two(int i) {
    down(&mutex);
    state[i] = HUNGRY;
    test(i);
    up(&mutex);
    down(&s[i]);
}

void put_two(i) {
    down(&mutex);
    state[i] = THINKING;
    test(LEFT);
    test(RIGHT);
    up(&mutex);
}

void test(i) {         // 尝试拿起两把筷子
    if(state[i] == HUNGRY && state[LEFT] != EATING && state[RIGHT] !=EATING) {
        state[i] = EATING;
        up(&s[i]);
    }
}
````

* 读者-写者问题

允许多个进程同时对数据进行读操作，但是不允许读和写以及写和写操作同时发生。

一个整型变量 count 记录在对数据进行读操作的进程数量，一个互斥量 count_mutex 用于对 count 加锁，一个互斥量 data_mutex 用于对读写的数据加锁。

````
typedef int semaphore;
semaphore count_mutex = 1;
semaphore data_mutex = 1;
int count = 0;

void reader() {
    while(TRUE) {
        down(&count_mutex);
        count++;
        if(count == 1) down(&data_mutex); // 第一个读者需要对数据进行加锁，防止写进程访问
        up(&count_mutex);
        read();
        down(&count_mutex);
        count--;
        if(count == 0) up(&data_mutex);
        up(&count_mutex);
    }
}

void writer() {
    while(TRUE) {
        down(&data_mutex);
        write();
        up(&data_mutex);
    }
}
````

## 进程通信

### 通信机制

* 共享存储器系统
* 消息传递系统
* 管道通信
  * 只支持半双工通信（单向交替传输）；只能在父子进程或者兄弟进程中使用。
* 命名管道FIFO
  * 去除了管道只能在父子进程中使用的限制