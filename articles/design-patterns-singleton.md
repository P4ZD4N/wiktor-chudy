---
title: 'Design patterns: Singleton'
date: "06-12-2024"
categories:
    - Programming
---

# Design patterns: Singleton

![Blog image](/programming/programming-dp-singleton.png)

**Singleton** is one of creational design patterns. It is known as one of the easiest to understand and one of the most frequently used design patterns. Its main purpose is to ensure, that in application exists only one instance of particular class and that this instance is accessible globally.

## Problem

Do you play games? Even if you don’t, you have probably heard about a key component of every game: the game engine. This engine always includes a central method where the game loop is implemented - a critical structure that drives the game’s functionality.

What exactly is happening inside game engine is not that important within the scope of this example. Thing which interest us in this case, is that the game engine should be implemented as a Singleton. This design pattern ensures that there is only one instance of the game engine throughout the application's lifecycle. With this approach we can for example protect ourselves against creating second instance of this class and resetting the game state (or different problems, which may occur when creating second instance).

## Implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/singleton-1.png)

### GuessGame.kt

```kotlin
class GuessGame private constructor() {

    private var score: Int = 0;

    fun play() {
        for (i in 1..10) {
            val randomInt = Random.nextInt(1, 11)

            print("Guess number (1-10): ")
            val value = readln()

            if (value.toInt() == randomInt) {
                score++
                println("+1")
            } else println(":(")
        }
    }

    fun getScore(): Int {
        return score
    }

    companion object {
        private var instance: GuessGame = GuessGame()

        fun getInstance(): GuessGame {
            return instance
        }
    }
}
```

### Main.kt

```kotlin
fun main() {
    val game: GuessGame = GuessGame.getInstance()

    game.play()

    val score: Int = game.getScore()
    val anotherGameReference: GuessGame = GuessGame.getInstance()

    if (game == anotherGameReference) {
        println("Singleton!")

        if (score == anotherGameReference.getScore()) println("Points: $score")
    }
}
```

### Output

![Output](/programming/utils/singleton-2.png)


### Explanation

This is simple implementation of guess game. **GuessGame** class is our game class, which is also our game engine. Class is implemented with **Singleton** pattern to ensure, that there is only one instance of the game engine throughout the application's lifecycle.

One of the most important things and key concept of **Singleton** is that class should contain only **private constructor** without public constructors. Creating object of class with public constructor should not be possible. Second thing is to define private static field in our class, which is type of game engine class. Last important thing is proper **static method** to check whether instance of class already exists and to create it otherwise. In our case it is **getInstance()** method. If we only implement these key concepts, the class code would look like this:

```kotlin
class GuessGame private constructor() {
    
    companion object {
        private var instance: GuessGame = GuessGame()

        fun getInstance(): GuessGame {
            return instance
        }
    }
}
```

Apart from this, inside class we have **score** variable, which is count of our points and two methods: **play()** and **getScore()**. The **play()** method contains our game loop and getScore() method simply returns current value of **score** field.

With this implementation we cannot create object of **GuessGame** class with public constructor. We should use **GuessGame.getInstance()**. Next invocations of this methods will return object created with first invocation of method.

## Some of "special care" cases

### Multithreading

We can encount problem, when our application use multithreading mechanisms. Imagine, that implementation of our static class members looks like this:

```kotlin
companion object {
    private var instance: GuessGame? = null

    fun getInstance(): GuessGame {
        if (instance == null) instance = GuessGame()
          return instance!!
    }
}
```

It is also good approach, but not safe in this case. Why? Because when we have for example two threads, one of them can go into if statement and for its condition will be true. But problem which can occur is that it may not be able to create instance of class before second thread enters the if statement. In this situation, for second thread condition will be also true and both threads will create instance of class. It ends up that in the end we will have two instances of the class anyway.

**One of the ways to solve**: We can create object of class and assign it to our private static field, when the class is loaded by class loader for the first time.

```kotlin
companion object {
    private var instance: GuessGame = GuessGame()

    fun getInstance(): GuessGame {
        return instance
    }
}
```

### Serialization

If our singleton must be serialized we have little problem. This system does not know, that our class is singleton. By default it will create new instance based on data, ignoring existing instance. During deserialization there is automatically created new instance of class, which violates the single-instance rule.

**Way to solve**: implement **readResolve()** method.

```kotlin
private fun readResolve(): Any {
    return getInstance()
}
```

## Pros and Cons

✅ You are sure, that class has only one instance and you have global access to that instance.

✅ Singleton object is initialized only when it’s requested for the first time.

❌ Problems with multithreading, serialization and reflection.

❌ Violates the Single Responsibility Principle by fact that they control their own creation and lifecycle (solving two problems at the time).

❌ Unit testing is difficult.