---
title: 'Design patterns: Chain of Responsibility'
date: "29-01-2025"
categories:
    - Programming
---

# Design patterns: Chain of Responsibility

![Blog image](/programming/programming-dp-cor.png)

**Chain of Responsibility** is one of behavioral design patterns. It allows requests to be forwarded through a chain of potential recipients until one of them decides to handle them. Thanks to this approach sender doesn’t have to know about recipient, which will be the most appropriate – request passes through several objects, which can react (if they are able to) or forward it to the next.

## Problem

Imagine preparation to Christmas in certain house. Mom asked her three children to help with preparation in the kitchen. During cooking mom noticed, that she need certain jar, which is placed on one of three shelves: low, medium and high. Each child can reach a different shelf based on their height:

🔵 Ania can only reach low shelf.

🔵 Tomek can reach medium shelf.

🔵 Antek can reach high shelf.

Mom requested the first child (let’s say that it’s Ania) to get the jar. If Ania can reach it, it means, that jar is on the low shelf and she takes it down. Otherwise, she asks the next, taller child (Tomek) to help. If Tomek also cannot reach it, he passes the request to Antek, who is the tallest child.

## Implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/cor-1.png)

### Shelf.kt

```kotlin
enum class Shelf {
    LOW, MEDIUM, HIGH
}
```

### MotherRequest.kt

```kotlin
class MotherRequest(val shelf: Shelf)
```

### Child.kt

```kotlin
abstract class Child {
 
    lateinit var tallerChild: Child
 
    abstract fun processRequest(motherRequest: MotherRequest)
}
```

### Anna.kt

```kotlin
class Anna : Child() {
 
    override fun processRequest(motherRequest: MotherRequest) {
        if (motherRequest.shelf == Shelf.LOW) {
            println("Anna reached jar from shelf!")
        } else tallerChild.processRequest(motherRequest)
    }
}
```

### Tomek.kt

```kotlin
class Tomek : Child() {
 
    override fun processRequest(motherRequest: MotherRequest) {
        if (motherRequest.shelf == Shelf.MEDIUM) {
            println("Tomek reached jar from shelf!")
        } else tallerChild.processRequest(motherRequest)
    }
}
```

### Antek.kt

```kotlin
class Antek : Child() {
 
    override fun processRequest(motherRequest: MotherRequest) {
        if (motherRequest.shelf == Shelf.HIGH) {
            println("Antek reached jar from shelf!")
        } else println("Wrong shelf!")
    }
}
```

### Main.kt

```kotlin
fun main() {
    val motherRequest = MotherRequest(Shelf.HIGH)
 
    val tomek: Child = Tomek()
    val ania: Child = Anna()
    val antek: Child = Antek()
 
    ania.tallerChild = tomek
    tomek.tallerChild = antek
 
    ania.processRequest(motherRequest)
}
```

### Output

![Output](/programming/utils/cor-2.png)

### Explanation

Firstly, we have one enum class: **Shelf**, which represents height of shelf. There are only three options: **LOW**, **MEDIUM** and **HIGH**. The rest of files are concrete and abstract classes.

Starting with first of them, short **MotherRequest** class, you can see, that constructor of this class receives one of three values from **Shelf** enum. It represents request, which is given by mother to the children. Depending on entered Shelf height it will be known which of the children can reach the jar.

**Child** abstract class is base for all children concrete classes. It contains field, which store reference to taller kid (must be initialized after object construction) and one abstract method, which allows to process mother request.

**Anna**, **Tomek** and **Antek** are concrete classes, which represents our children. Each extends **Child** abstract class and inherit both field and method described moment ago. Now focus on each **processRequest()** method implementation. They are similar, but have minor differences. Each implementation checks height of shelf in mother request. If height of shelf fit to height of child, appropriate message is printed. Otherwise request is passed to taller kid. If tallest kid can’t fulfill mother’s request appropriate message is printed.

In **main** method four objects was created: mother’s request to reach a jam from high shelf and children. Then we establish height hierarchy – **Anna** is shorter than **Tomek** and Tomek is shorter than **Antek**. Finally Anna is asked by mother to help. She can’t reach jar so task is delegated to Tomek. Tomek also can’t reach jar so he delegate task to Antek. Antek reaches jar and brings it to the mother.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ New elements of chain can be added without modification of existing code (Open/Closed Principle).

✅ Sender of request doesn’t have to know which object will handle it.

✅ Better code readability and appearance. Instead of big amount of if statements, code is divided to appropriate classes.

❌ Risk of requests being addressed to no one or ending up unhandled.