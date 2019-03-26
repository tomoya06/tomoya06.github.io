---
title: 面向对象
date: 2019-02-19 16:09:29
tags:
- 前端
- OOP
- Java
---

> 从菜鸟教程Java面向对象一章总结的面向对象要素

<!-- more -->

## 对象和类

面向对象的基础。

* 对象是类的一个实例
* 类是一个模板

### 继承

子类继承父类的行为和特征

Java支持多重继承，但不支持多继承。

* super：`super` 关键字与 `this` 类似，`this` 用来表示当前类的实例，`super` 用来表示父类。
* 调用父类的构造方法：`super(args)`，注意：
  * 和`this(args)`一样，都必须放在构造方法的第一行。
  * 不能在构造方法以外的任何方法内调用构造方法。
  * 在一个构造方法内只能调用一个构造方法。

### 重写 重载

* 重写(overriding)是子类对父类允许访问的方法的实现过程进行重新编写, 返回值和形参都不能改变。即外壳不变，核心重写
* 重载(overload)是在一个类里面，方法名字相同，而参数不同。返回类型可以相同也可以不同

| 比较   | 重写           | 重载     |
| ------ | -------------- | -------- |
| 范围   | 子类与父类之间 | 一个类内 |
| 方法名 | 相同           | 相同     |
| 参数   | 相同           | 不同     |
| 返回值 | 相同           | 不同     |

### 多态

多态是同一个行为具有多个不同表现形式或形态的能力。

> 在Java中，多态就是同一个接口，使用不同的实例而执行不同操作

* 多态存在的必要条件：
  * 继承
  * 重写
  * 父类引用指向子类对象
* 实现方式
  * 继承并重写
  * 实现接口
  * 继承抽象类

### instanceof

````
class People{ }
class Teacher extends People{ }
class President extends Teacher{ }

President mr_bean = new President();

// mr_bean instanceof President == true
// mr_bean instanceof Teacher == true
// mr_bean instanceof People == true
// mr_bean instanceof Object == true
````


## 抽象类

如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。

* 抽象类不能实例化对象
* 必须被继承才能被使用
* 可以为部分方法提供实现，避免了在子类中重复实现这些方法

## Java接口(interface)

接口在JAVA编程语言中是一个抽象类型，是抽象方法的集合

* 接口中只能定义抽象方法，这些方法默认为 public abstract 的，因而在声明方法时可以省略这些修饰符
* 接口中没有构造方法，不能被实例化
* 一个接口不实现另一个接口，但可以继承多个其他接口。接口的多继承特点弥补了类的单继承
* 接口必须通过类来实现(implements)它的抽象方法，然后再实例化类

## 泛型

````
// 定义泛型类
class Point<T1, T2>{
    T1 x;
    T2 y;
    public T1 getX() {
        return x;
    }
    public void setX(T1 x) {
        this.x = x;
    }
    public T2 getY() {
        return y;
    }
    public void setY(T2 y) {
        this.y = y;
    }
   
    // 定义泛型方法
    public <T1, T2> void printPoint(T1 x, T2 y){
        T1 m = x;
        T2 n = y;
        System.out.println("This point is：" + m + ", " + n);
    }
}
````

## 封装

封装(Encapsulation)是指一种将抽象性函式接口的实现细节部份包装、隐藏起来的方法。封装可以被认为是一个保护屏障，防止该类的代码和数据被外部类定义的代码随机访问。

* 实现
  1. 修改属性可见性
  2. 对隐藏属性提供读写方法
