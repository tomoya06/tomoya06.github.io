---
title: Java程序入口 - Main.main()函数
date: 2019-03-26 10:38:24
tags:
- Java
---

> 参考博客：[Java基础 | 程序入口main()方法
](https://blog.csdn.net/u013045987/article/details/51264083)

## 程序入口

* 入口：public static void main(String args[]）{}

* `public`：该java类由java虚拟机（JVM）调用，所以java类应把该方法暴露，故用public；

* `static`：既然由JVM调用该方法，肯定不能new 一个对象再由对象调用该方法，应直接由JVM调用故用static；

* `void`：给JVM返回东西是无意义的 ，故用void；

* `args`：括号里的参数是由JVM传给该方法的，具体可为（1）、从cmd控制台传入（2）、从开发环境IDE（Eclipse）的runconfiguration配置参数传入。

## 程序运行顺序

````
public class Demo{
    private String name;
    private int age;
    public Demo(){
        name = "微学苑";
        age = 3;
    }
    public static void main(String[] args){
        Demo obj = new Demo();
        System.out.println(obj.name + "的年龄是" + obj.age);
    }
}
````

1. 先运行到第 9 行，这是程序的入口。
2. 然后运行到第 10 行，这里要 new 一个Demo，就要调用 Demo 的构造方法。
3. 就运行到第 5 行，注意：可能很多人觉得接下来就应该运行第 6 行了，这是不对的！初始化一个类，必须先初始化它的属性。
4. 因此运行到第 2 行，然后是第 3 行。
5. 属性初始化完过后，才回到构造方法，执行里面的代码，也就是第 6 行、第 7 行。
6. 然后是第8行，表示 new 一个Demo实例完成。
7. 然后回到 main 方法中执行第 11 行。
8. 然后是第 12 行，main方法执行完毕