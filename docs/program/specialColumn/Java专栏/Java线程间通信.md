---
title: Java线程间通信
author: Zack Zheng
date: 2022/02/16 09:51
categories:
 - Java专栏
tags:
 - Java
 - 后端
---


#### 线程间通信

+ 可以使用Object.wait、Object.notify、Object.notifyAll方法实现线程之间通信       
	(object必须是同一个对象，且必须有内部锁)

	说明：

​               1、若想在线程A中成功调用obj.wait、obj.notify、obj.notifyAll方法，线程A必须要持有obj的内部锁 

​               2、obj.wait: 释放obj的内部锁，当前线程进入`WAITING`或`TIMED_WAITING`状态

​               3、obj.notifyAll: 唤醒所有因为obj.wait进入`WAITING`或`TIMED_WAITING`状态的线程

​               4、obj.notify： 随机唤醒1个因为obj.wait进入`WAITING`或`TIMED_WAITING`状态的线程

##### 示例代码:

###### 生产者Producer：

```java
package thread;

/*
 * 生产者
 */
public class Producer implements Runnable{
    private Drop drop;

    public Producer(Drop drop) {
        this.drop = drop;
    }

    @Override
    public void run() {
       String foods[] = {"beef", "bread", "apple", "cookie"};
       for(int i=0;i<foods.length;i++) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {}
        drop.add(foods[i]);
       }
       drop.add(null);
    }
  
}
```

###### 消费者Consumer

```java
package thread;

/*
 * 消费者
 */
public class Consumer implements Runnable{
    private Drop drop;
    public Consumer(Drop drop) {
        this.drop = drop;
    }

    @Override
    public void run() {
        String food = null;

        while((food = drop.get()) != null) {
            System.out.format("消费者接收到生产者生产的食物: %s%n", food);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {}
        }
    }
  
}
```

###### 消费物Drop:

```java
package thread;

public class Drop {
  private String food;
  // empty为true代表：消费者等待生产者生产
  // empty为false代表：代表商品生产完毕，生产者还要等待消费者消费完
  private boolean empty = true;
  
  /**
   * get方法再消费者线程执行
   * @return
   */
  public synchronized String get() {
    // 消费者线程拿到drop对象的内部锁
    while(empty) {
      try {
        // 调用wait，消费者线程会释放drop对象的内部锁，然后进入WAITING状态
        wait();  
      } catch (InterruptedException e) {}
    }
    empty = true;
    notifyAll();
    return food;
  }

  /**
   * add方法在生产者线程中执行
   * @param food
   */
  public synchronized void add(String food) {
    while(!empty) {
      try {
        wait();
      } catch (InterruptedException e) {}
    }
    empty = false;
    this.food = food;
    notifyAll();
  }
}

```

###### 测试main函数

```java
package thread;

public class DropMain {
  /*
   * 1. 调用wait、notify必须是同一个obj对象
   * 2. 调用wait、notify的线程必须拥有obj对象的内部锁
   */
  public static void main(String[] args) throws Exception {
    Drop drop = new Drop();
    (new Thread(new Consumer(drop))).start();
    (new Thread(new Producer(drop))).start();
  }
}
```

