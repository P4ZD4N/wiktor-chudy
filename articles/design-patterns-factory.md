---
title: 'Design patterns: Factory'
date: "20-12-2024"
categories:
    - Programming
---

# Design patterns: Factory

![Blog image](/programming/programming-dp-factory.png)

**Factory** is one of creational design patterns. Main concept of this pattern is to facilitate process of creating objects and to delegate responsibility for it to special classes. With usage of **Factory** there is no need to directly write code responsible for creating them every time.

## Problem
Imagine, that you own a car factory. Your factory specializes in producing cars from two specific brands: Ford and BMW. Each car produced by the factory is distinguished by key attributes such as engine capacity, fuel type and year of production. Challenge appear when you need to manage production of these cars in a scalable and efficient way. The factory must be able to produce cars based on the brand and ensure that the correct attributes (engine capacity, fuel type, year of production) are assigned to each car. Factory pattern can help by providing certain mechanism for creating cars. It will be responsible for instantiating cars based on the requested brand, ensuring, that all required attributes are correctly assigned and simplifying the process of car production. It also allows you to easy extensions when new car brands are introduced in the future.


## Factory Method implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/factory-1.png)

### Car.kt

```kotlin
	
abstract class Car(engineCapacity: Double, fuelType: FuelType, productionYear: Int)
```

### Ford.kt

```kotlin
class Ford(engineCapacity: Double,
           fuelType: FuelType,
           productionYear: Int
) : Car(engineCapacity, fuelType, productionYear)
```

### BMW.kt

```kotlin
class BMW(engineCapacity: Double,
          fuelType: FuelType,
          productionYear: Int
) : Car(engineCapacity, fuelType, productionYear)
```

### FuelType.kt

```kotlin
enum class FuelType {
    PETROL, DIESEL
}
```

### CarBrand.kt

```kotlin
enum class CarBrand {
    FORD, BMW
}
```

### Factory.kt

```kotlin
abstract class Factory {
    abstract fun createCar(carBrand: CarBrand): Car
}
```

### CarFactory.kt

```kotlin
class CarFactory : Factory() {
 
    override fun createCar(carBrand: CarBrand): Car {
        return when (carBrand) {
            CarBrand.BMW -> BMW(3.0, FuelType.DIESEL, 2009)
            CarBrand.FORD -> Ford(2.0, FuelType.PETROL, 2007)
        }
    }
}
```

### Main.kt

```kotlin
fun main() {
    val fordFactory = FordFactory()
    val bmwFactory = BMWFactory()
 
    val bmw: Car = bmwFactory.buildBMW(BMWModel.E60)
    bmw.startEngine()
 
    val ford: Car = fordFactory.buildFord(FordModel.CMAX)
    ford.startEngine()
}
```

### Explanation

It is really simple implementation of factory method and solution of problem explained before.

You have **Car** abstract class, which is template for concrete car brands classes. **Ford** and **BMW** classes extends **Car** class. Each class receive three arguments in constructor: engine capacity, fuel type and production year. These classes allows you to create car from specific brand. Second argument, which is received by constructor is of type **FuelType**. It is simple enum, which define types of fuel: petrol and diesel. Second enum in our project is **CarBrand**. It specifies car brands, which are produced by our factory. And finally we have **Factory** abstract class and **CarFactory** class. Actually, both has one method: **createCar()**. Method receive value of **CarBrand** enum type as an argument and returns created car. **CarFactory** class overrides this method from **Factory** class and provides own implementation. Depending on entered argument, appropriate car will be created and returned.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Extended problem

Imagine, that you have two car factories. Both produce cars from two specific car brands: Ford and BMW. Attributes, which distinguishes each car are engine capacity, fuel type and year of production. Consider, that one factory produce cars to the Great Britain and countries of the former British Empire market. Second export cars to countries such as Poland, Germany, Sweden or Spain. Difference between factories is that one should produce cars with steering wheel on the left position and second on the right position.

## Abstract Factory implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/factory-1.png)

### Car.kt

```kotlin
abstract class Car(engineCapacity: Double, fuelType: FuelType, productionYear: Int) {
    abstract fun getSteeringWheelPosition(): SteeringWheelPosition
}
```

### Ford.kt

```kotlin
class Ford(engineCapacity: Double,
           fuelType: FuelType,
           productionYear: Int,
           private var steeringWheelPosition: SteeringWheelPosition
) : Car(engineCapacity, fuelType, productionYear) {
 
    override fun getSteeringWheelPosition(): SteeringWheelPosition {
        return steeringWheelPosition
    }
}
```

### FordModel.kt

```kotlin
enum class FordModel {
    CMAX, Focus
}
```

### BMW.kt

```kotlin
class BMW(engineCapacity: Double,
          fuelType: FuelType,
          productionYear: Int,
          private var steeringWheelPosition: SteeringWheelPosition
) : Car(engineCapacity, fuelType, productionYear) {
 
    override fun getSteeringWheelPosition(): SteeringWheelPosition {
        return steeringWheelPosition
    }
}
```

### BMWModel.kt

```kotlin
enum class BMWModel {
    X5, E60
}
```

### FuelType.kt

```kotlin
enum class FuelType {
    PETROL, DIESEL
}
```

### SteeringWheelPosition.kt

```kotlin
enum class SteeringWheelPosition {
    LEFT, RIGHT
}
```

### Factory.kt

```kotlin
interface Factory {
    fun buildBMW(bmwModel: BMWModel): Car
    fun buildFord(fordModel: FordModel): Car
}
```

### CommonwealthFactory.kt

```kotlin
class CommonwealthFactory : Factory {
 
    override fun buildBMW(bmwModel: BMWModel): Car {
        when (bmwModel) {
            BMWModel.X5 -> {
                val bmw = BMW(3.0, FuelType.DIESEL, 2009, SteeringWheelPosition.LEFT)
                return bmw
            }
            BMWModel.E60 -> {
                val bmw = BMW(2.0, FuelType.PETROL, 2007, SteeringWheelPosition.LEFT)
                return bmw
            }
        }
    }
 
    override fun buildFord(fordModel: FordModel): Car {
        when (fordModel) {
            FordModel.CMAX -> {
                val ford = Ford(2.0, FuelType.DIESEL, 2005, SteeringWheelPosition.LEFT)
                return ford
            }
            FordModel.Focus -> {
                val ford = Ford(2.0, FuelType.PETROL, 2007, SteeringWheelPosition.LEFT)
                return ford
            }
        }
    }
}
```

### ContinentalFactory.kt

```kotlin
class ContinentalFactory : Factory {
 
    override fun buildBMW(bmwModel: BMWModel): Car {
        when (bmwModel) {
            BMWModel.X5 -> {
                val bmw = BMW(3.0, FuelType.DIESEL, 2009, SteeringWheelPosition.RIGHT)
                return bmw
            }
            BMWModel.E60 -> {
                val bmw = BMW(2.0, FuelType.PETROL, 2007, SteeringWheelPosition.RIGHT)
                return bmw
            }
        }
    }
 
    override fun buildFord(fordModel: FordModel): Car {
        when (fordModel) {
            FordModel.CMAX -> {
                val ford = Ford(2.0, FuelType.DIESEL, 2005, SteeringWheelPosition.RIGHT)
                return ford
            }
            FordModel.Focus -> {
                val ford = Ford(2.0, FuelType.PETROL, 2007, SteeringWheelPosition.RIGHT)
                return ford
            }
        }
    }
}
```

### Main.kt

```kotlin
fun main() {
    val commonwealthFactory: Factory = CommonwealthFactory()
    val continentalFactory: Factory = ContinentalFactory()
 
    val bmw: Car = commonwealthFactory.buildBMW(BMWModel.E60)
    println(bmw.getSteeringWheelPosition())
 
    val ford1: Car = continentalFactory.buildFord(FordModel.CMAX)
    println(ford1.getSteeringWheelPosition())
 
    val ford2: Car = commonwealthFactory.buildFord(FordModel.Focus)
    println(ford2.getSteeringWheelPosition())
}
```

### Output

![Output](/programming/utils/factory-3.png)

### Explanation

This approach (**Abstract Factory**) is an interface or abstract class responsible for creating families of related objects. Implementation is more complex than in **Factory Method** case.

In this solution you have **Car** abstract class, which is template for concrete car brands classes. **Ford** and **BMW** classes extends **Car** class. **Car** class receive three arguments in constructor: engine capacity, fuel type and production year. **BMW** and **Ford** classes receive one additional argument, which is steering wheel position. These classes allows you to create car from specific brand and with proper steering wheel position. Second argument, which is received by constructor is of type **FuelType**. It is simple enum, which define types of fuel: petrol and diesel. In our our project we have also **FordModel**, **BMWModel** and **SteeringWheelPosition** enums. First two specifies models from car brand, which factories can produce. **SteeringWheelPosition** as you can guess is responsible for setting proper steering wheel position. And finally we have **Factory** interface, which is implemented by **CommonwealthFactory** and **ContinentalFactory** classes. It means, that both implements two methods: **buildBMW()** and **buildFord()**. As an argument proper model from specific brand is entered. Depending on entered argument, appropriate car model will be created and returned. Notice, that **CommonwealthFactory** creates cars with steering wheel on the left and cars from **ContinentalFactory** has steering wheel on the right.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ No need to directly write code responsible for creating objects every time.

✅ Compliant with Open/Closed Principle (SOLID). You can add new types of creating things without modifying the existing code.

❌ Code can become complicated, because to implement this pattern you have to create many additional classes.

❌ Redundant use of factories in simple projects may be expensive.
