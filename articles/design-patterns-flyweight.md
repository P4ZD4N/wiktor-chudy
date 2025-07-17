---
title: 'Design patterns: Flyweight'
date: "23-12-2024"
categories:
    - Programming
---

# Design patterns: Flyweight

![Blog image](/programming/programming-dp-flyweight.png)

**Flyweight** is one of structural design patterns. Main purpose of this pattern is to **minimise usage of memory** with sharing as much common data as possible between similar objects. Typical case, in which pattern is useful is when app create large number of objects, which have common qualities.

## Problem

Imagine, that you would like to create app to visualise forest, in which each tree has unique properties such as location and common such as species, leaf color and size. If we have to render forest, which consists of millions trees, creating an object for each tree can be very memory expensive. **Flyweight** can help us solve that problem and save some memory space by separating common properties of trees into another object, rather than duplicating them for every individual tree.

## Implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/flyweight-1.png)

### Tree.kt

```kotlin
interface Tree
```

### Birch.kt

```kotlin
class Birch(val x: Int, val y: Int) : Tree {
    val properties: TreeProperties = TreePropertiesRepository.getBirchProperties()
}
```

### Maple.kt

```kotlin
class Maple(val x: Int, val y: Int) : Tree {
    val properties: TreeProperties = TreePropertiesRepository.getMapleProperties()
}
```

### Oak.kt

```kotlin
class Oak(val x: Int, val y: Int) : Tree {
    val properties: TreeProperties = TreePropertiesRepository.getOakProperties()
}
```

### TreeSize.kt

```kotlin
enum class TreeSize {
    MEDIUM, BIG
}
```

### TreePropertiesRepository.kt

```kotlin
class TreePropertiesRepository private constructor() {
 
    companion object {
        private val oakProperties = TreeProperties("Oak", "Green", TreeSize.BIG)
        private val birchProperties = TreeProperties("Birch", "Green", TreeSize.MEDIUM)
        private val mapleProperties = TreeProperties("Maple", "Red", TreeSize.MEDIUM)
 
        fun getOakProperties(): TreeProperties {
            return oakProperties
        }
 
        fun getBirchProperties(): TreeProperties {
            return birchProperties
        }
 
        fun getMapleProperties(): TreeProperties {
            return mapleProperties
        }
    }
}
```

### Main.kt

```kotlin
fun main() {
 
    val trees: MutableList<Tree> = mutableListOf()
 
    var temp = 0
    for (i in 0..10_000_000) {
        trees.add(Oak(temp++, temp++))
        trees.add(Birch(temp++, temp++))
        trees.add(Maple(temp++, temp++))
    }
 
    val oak1 = trees[0] as Oak
    val oak2 = trees[3] as Oak
 
    println("Oak1 coordinates: (${oak1.x}, ${oak1.y})")
    println("Oak2 coordinates: (${oak2.x}, ${oak2.y})")
    println("Oak1 properties == Oak2 properties: ${oak1.properties == oak2.properties}")
    println()
 
    val birch1 = trees[1] as Birch
    val birch2 = trees[4] as Birch
 
    println("Birch1 coordinates: (${birch1.x}, ${birch1.y})")
    println("Birch2 coordinates: (${birch2.x}, ${birch2.y})")
    println("Birch1 properties == Birch2 properties: ${birch1.properties == birch2.properties}")
    println()
 
    val maple1 = trees[2] as Maple
    val maple2 = trees[5] as Maple
 
    println("Maple1 coordinates: (${maple1.x}, ${maple1.y})")
    println("Maple2 coordinates: (${maple2.x}, ${maple2.y})")
    println("Maple1 properties == Maple2 properties: ${maple1.properties == maple2.properties}")
}
```

### Output

![Output](/programming/utils/flyweight-2.png)

### Explanation
In our app we have three species of trees: **Oak**, **Birch** and **Maple**, which are represented with appropriate classes. Each tree has its unique location expressed by its distinct **x** and **y** coordinates. Solution assumes, that common tree data is separated into a different class (**TreeProperties.kt**). Common data includes properties such as species, leaf color and tree size. Even though we actually have 30 million trees in our forest, we can save a lot of memory space thanks to **Flyweight**. How? Each of these 30 million trees shares the same properties which are stored once in the **TreeProperties** class, rather than duplicating them for every individual tree. Only the unique coordinates of each tree are stored separately, reducing memory usage while still maintaining a large number of tree objects in memory.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ With sharing common data between similar objects we can save a lot of memory space. Especially in cases, where objects have many properties.

✅ We can expect improvements in application performance.

❌ Code become more complicated. To implement Flyweight we must split the state into internal and external, which can complicate the design.

❌ Code become more difficult to maintain. Managing external state requires more attention.
