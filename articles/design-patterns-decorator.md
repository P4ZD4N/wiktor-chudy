---
title: 'Design patterns: Decorator'
date: "14-01-2025"
categories:
    - Programming
---

# Design patterns: Decorator

![Blog image](/programming/programming-dp-decorator.png)

**Decorator** is one of structural design patterns, which enable us to add new functionalities to objects dynamically, without changing their source code. We can achieve this by placing particular object in other, wrapping object, which has appropriate behaviors.

## Problem

Imagine, that you are chef in certain restaurant. You, as a chef, should prepare appropriate meals based on chosen ingredients. Restaurant, for which you work serves two types of meals: **potato meal** and **rice meal**. Additional ingredients, which you can add to each of them are: **chicken**, **shrimps** and **sauce**. Creating individual class for each ingredients combination (for example “Potato meal with chicken and sauce” or “Rice with shrimps”) would be impractical and difficult to extend/maintain, especially, when number of combinations will grow. By utilizing **Decorator** design pattern we can compose as many meals as you can imagine in simple way, without making big changes in code.

## Implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/decorator-1.png)

### Meal.kt

```kotlin
abstract class Meal {
 
    open fun prepareMeal() {
        println("Preparing meal...")
    }
}
```

### PotatoMeal.kt

```kotlin
class PotatoMeal : Meal() {
 
    override fun prepareMeal() {
        println("Preparing potato meal...")
    }
}
```

### RiceMeal.kt

```kotlin
class RiceMeal : Meal() {
 
    override fun prepareMeal() {
        println("Preparing rice meal...")
    }
}
```

### MealDecorator.kt

```kotlin
open class MealDecorator(private val decoratedMeal: Meal) : Meal() {
 
    override fun prepareMeal() {
        decoratedMeal.prepareMeal()
    }
}
```

### ChickenMealDecorator.kt

```kotlin
class ChickenMealDecorator(private val decoratedMeal: Meal) : MealDecorator(decoratedMeal) {
 
    private fun addChicken() {
        println("Adding chicken to meal...")
    }
 
    override fun prepareMeal() {
        decoratedMeal.prepareMeal()
        addChicken()
    }
}
```

### SauceMealDecorator.kt

```kotlin
class SauceMealDecorator(private val decoratedMeal: Meal) : MealDecorator(decoratedMeal) {
 
    private fun addSauce() {
        println("Adding sauce to meal...")
    }
 
    override fun prepareMeal() {
        decoratedMeal.prepareMeal()
        addSauce()
    }
}
```

### ShrimpMealDecorator.kt

```kotlin
class ShrimpMealDecorator(private val decoratedMeal: Meal) : MealDecorator(decoratedMeal) {
 
    private fun addShrimp() {
        println("Adding shrimp to meal...")
    }
 
    override fun prepareMeal() {
        decoratedMeal.prepareMeal()
        addShrimp()
    }
}
```

### Main.kt

```kotlin
fun main() {
    println("New meal: ")
    val riceMeal: Meal = RiceMeal()
    riceMeal.prepareMeal()
 
    println("\nNew meal: ")
    val riceMealWithShrimp: Meal = ShrimpMealDecorator(RiceMeal())
    riceMealWithShrimp.prepareMeal()
 
    println("\nNew meal: ")
    val potatoMealWithChickenAndSauce: Meal = SauceMealDecorator(ChickenMealDecorator(PotatoMeal()))
    potatoMealWithChickenAndSauce.prepareMeal()
}
```

### Output

![Output](/programming/utils/decorator-2.png)

### Explanation

We have **Meal** abstract class, which has **prepareMeal()** method. **PotatoMeal** and **RiceMeal** classes extends **Meal** class and provide own implementations of this method. These classes represents our **base meals** without additional ingredients. Now we can cook **potato meals** and **rice meals**, but only in simple, boring form. To make adding other ingredients to our base meals possible, we should create next classes – decorators. First and most important is **MealDecorator**. It is base of each another decorator, which we will add and receives object of **Meal** class as an contructor argument. More precise decorators, which will enable us to add additional ingredients to meals are: **SauceMealDecorator**, **ShrimpMealDecorator** and **ChickenMealDecorator**. Each of them receives object of **Meal** class as an constructor argument, like **MealDecorator** class, extends **MealDecorator** class and invokes its constructor with given argument. Each of these “more precise” decorators has also own **add…()** method, which is invoked with invocation of **prepareMeal()** method. This method adds appropriate ingredient to our meal.

In main() function you can see practical example of meal preparation with usage of decorators. For example if you want to cook “Potato meal with chicken and sauce” you should firstly invoke **PotatoMeal** contructor, wrap it in a **ChickenMealDecorator** constructor and wrap **ChickenMealDecorator** in a **SauceMealDecorator** constructor.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ Possibility to extend functionality of class without modification of its base code (Open/Closed Principle).

✅ Avoiding complex inheritance hierarchies and reducing risk of a diamond problem.

✅ Reusability of decorators.

❌ Decorator is based on inheritance. In languages such as Java (where class can extend only one other class) usage of this pattern block us possibility to inherit from class, which we need from business perspective.