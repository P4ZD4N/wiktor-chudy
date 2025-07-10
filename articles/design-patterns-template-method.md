---
title: 'Design patterns: Template Method'
date: "01-02-2025"
categories:
    - Programming
---

# Design patterns: Template MEthod

![Blog image](/programming/programming-dp-template-method.png)

**Template Method** is one of behavioral design patterns. By utilizing this pattern you can define general algorithm in your base class, which will allow each derived class to deliver own implementation of some steps. Thanks to this approach you can avoid code duplications and enable to reuse common logic.

## Problem

All people have their own daily routine. Each routine consists of activities common to other routines (for example all people must wake up, prepare to leave home, go to work), but also completely different and unique. Differences occurs in the details such as type of transport to work, type of work and activities performed in it or activities in free time. Despite these variations, the overall structure of day is similar. Creating distinct classes for each case would lead to code duplication.

## Implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/template-method-1.png)

### TypeOfTransport.kt

```kotlin
enum class TypeOfTransport {
    ON_FOOT, CAR, TRAM, BIKE
}
```

### TypicalWeekDay.kt

```kotlin
abstract class TypicalWeekDay {
 
    final fun everyDayIsExactlyTheSame(typeOfTransport: TypeOfTransport) {
        wakeUp()
        getReady()
 
        val time = goToWork(typeOfTransport)
 
        summary(time)
        work()
        goHome()
    }
 
    private fun goHome() {
        println("Going to home...")
    }
 
    private fun summary(time: Int) {
        println("Trip to home took $time minutes...")
    }
 
    private fun getReady() {
        println("Preparing to leave home...")
    }
 
    private fun wakeUp() {
        println("Waking up...")
    }
 
    protected abstract fun work()
    protected abstract fun goToWork(typeOfTransport: TypeOfTransport): Int
}
```

### MyTypicalWeekDay.kt

```kotlin
open class MyTypicalWeekDay : TypicalWeekDay() {
 
    override fun work() {
        println("Code another feature...")
    }
 
    override fun goToWork(typeOfTransport: TypeOfTransport): Int {
 
        return when(typeOfTransport) {
            TypeOfTransport.ON_FOOT -> 40
            TypeOfTransport.TRAM -> 20
            TypeOfTransport.BIKE -> 25
            TypeOfTransport.CAR -> 15
            else -> throw IllegalArgumentException()
        }
    }
}
```

### MyFriendTypicalWeekDay.kt

```kotlin
class MyFriendTypicalWeekDay : MyTypicalWeekDay() {
 
    override fun work() {
        println("Repairing next car...")
    }
}
```

### Main.kt

```kotlin
fun main() {
 
    val myTypicalWeekDay = MyTypicalWeekDay()
    val myFriendDay = MyFriendTypicalWeekDay()
 
    println("My day:")
    myTypicalWeekDay.everyDayIsExactlyTheSame(TypeOfTransport.CAR)
 
    println()
    println("My friend's day: ")
    myFriendDay.everyDayIsExactlyTheSame(TypeOfTransport.TRAM)
}
```

### Output

![Output](/programming/utils/template-method-2.png)


### Explanation

This simple solution consists of **TypeOfTransport** enum class, **TypicalWeekDay** abstract class, **MyTypicalWeekDay** concrete class and **MyFriendTypicalWeekDay** concrete class. The most important is of course **TypicalWeekDay** abstract class, which is base for other typical days. It has **everyDayIsExactlyTheSame()** final method, which means that it is not possible to overwrite this. It calls each other method, which represents some activity for a typical day. In my implementation such methods are: **wakeUp()**, **getReady()**, **goToWork()**, **summary()**, **work()** and **goHome()**. Last two are abstract methods, which must be implemented by other days (classes, which extends **TypicalWeekDay** class) because type of transport to work and activities performed in work can be various. **MyTypicalWeekDay** is first class, which extends **TypicalWeekDay**. As you can see it overwrites both **work()** and **goToWork()** method. **MyFriendTypicalWeekDay** extends **MyTypicalWeekDay** because it would like to overwrite only **work()** method while **goToWork()** implementation should be exactly the same as in **MyTypicalWeekDay**.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ Eliminates code duplication by separating common code snippets to base class.

✅ Main logic is easy to extend and modify.

✅ High flow control because of clearly specified order of method invocations.

✅ Open/Closed principle: Algorithm can be extended without changes of base class code.

❌ Risk of deep inheritance hierarchy, which can lead to enhance complexity.

❌ Algorithm structure is specified in base class, which can be limiting for some clients.