---
title: 'Design patterns: Builder'
date: "11-12-2024"
categories:
    - Programming
---

# Design patterns: Builder

![Blog image](/programming/programming-dp-factory.png)

**Builder** is one of creational design patterns. Main purpose of this pattern is to create objects of class in straight way, especially when object is complex and contains many fields. Using **Builder** we can avoid difficulties such as uncertain about the order of fields when creating an object of a given class or poor code readability.

## Problem

I would like to indicate, that **Builder** is very universal design pattern. Actually, we can use it in many cases just to improve code readability, but I will point one typical case, when **Builder** may be necessary.

Imagine House. We can point many elements, which every house have. For example walls, floors, rooms, roof, windows etc. But we can also indicate additional elements, which some houses have, but not all. If you want to create **House** class, you have to be aware of creating many constructors inside the class specifically for each case. Finally, every house can consists of different elements, right?. It can be difficult to manage it all. **Builder** design pattern will help us solve this problem by enabling construction of object with the initialization of only fields, that we need.

## Implementation with nested class (Kotlin)

### Project structure

![Project structure](/programming/utils/builder-1.png)

### House.kt

```kotlin
class House private constructor(private val houseBuilder: HouseBuilder) {

    private var walls: String = ""
    private var floors: String = ""
    private var rooms: String = ""
    private var roof: String = ""
    private var windows: String = ""
    private var doors: String = ""
    private var garage: String = ""

    init {
        walls = houseBuilder.walls
        floors = houseBuilder.floors
        rooms = houseBuilder.rooms
        roof = houseBuilder.roof
        windows = houseBuilder.windows
        doors = houseBuilder.doors
        garage = houseBuilder.garage
    }

    companion object {
        class HouseBuilder {

            var walls: String = ""
            var floors: String = ""
            var rooms: String = ""
            var roof: String = ""
            var windows: String = ""
            var doors: String = ""
            var garage: String = ""

            fun buildWalls(walls: String): HouseBuilder {
                this.walls = walls
                return this
            }

            fun buildFloors(floors: String): HouseBuilder {
                this.floors = floors
                return this
            }

            fun buildRooms(rooms: String): HouseBuilder {
                this.rooms = rooms
                return this
            }

            fun buildRoof(roof: String): HouseBuilder {
                this.roof = roof
                return this
            }

            fun buildWindows(windows: String): HouseBuilder {
                this.windows = windows
                return this
            }

            fun buildDoors(doors: String): HouseBuilder {
                this.doors = doors
                return this
            }

            fun buildGarage(garage: String): HouseBuilder {
                this.garage = garage
                return this
            }

            fun build(): House {
                return House(this);
            }
        }
    }

    override fun toString(): String {
        return "House(walls='$walls', floors='$floors', rooms='$rooms', roof='$roof', windows='$windows', doors='$doors', garage='$garage')"
    }
}
```

### Main.kt

```kotlin
fun main() {
    val house1 = House.Companion.HouseBuilder()
        .buildWalls("walls")
        .buildFloors("floors")
        .buildRoof("roof")
        .buildWindows("windows")
        .build()

    val house2 = House.Companion.HouseBuilder()
        .buildWalls("walls")
        .buildFloors("floors")
        .buildRoof("roof")
        .buildWindows("windows")
        .buildRooms("rooms")
        .buildGarage("garage")
        .build()

    println(house1)
    println(house2)
}
```

### Explanation

This is implementation of **House** class, which solve problem described in **Problem** section.

This class contains only **private constructor**, which receive object of **HouseBuilder** class, some fields related to house, **HouseBuilder** nested static class and overwritten **toString()** method.

**HouseBuilder** class consists of the same fields as **House** class and methods, which enable us to "build" house. **buildSomeStuff()** methods works in the same way: receives object and assigns it to appropriate field in **HouseBuilder** class. Each construction must end with invocation of **build()** method, which returns ready **House** object. Actually, we create **House** object now, from values assigned previously in **HouseBuilder** method. Code inside the **init {}** block is run.

*In main method* firstly we create two houses:

- First house consists of walls, floors, roof and windows.
- Second house consists of walls, floors, roof, windows, rooms and garage.

You can check output and verify, that objects are different and created with desired elements.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Extended problem

Imagine, that you have two car factories. Both produce cars from two specific car brands: Ford and BMW. Attributes, which distinguishes each car are engine capacity, fuel type and year of production. Consider, that one factory produce cars to the Great Britain and countries of the former British Empire market. Second export cars to countries such as Poland, Germany, Sweden or Spain. Difference between factories is that one should produce cars with steering wheel on the left position and second on the right position.

## Classic implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/builder-3.png)

### HouseBuilder.kt

```kotlin
interface HouseBuilder {

    fun buildWalls()
    fun buildFloors()
    fun buildRooms()
    fun getHouse(): House
}
```

### HouseDirector.kt

```kotlin
class HouseDirector(private val houseBuilder: HouseBuilder) {

    fun buildHouse() {
        houseBuilder.buildWalls()
        houseBuilder.buildFloors()
        houseBuilder.buildRooms()
    }

    fun getHouse(): House {
        return houseBuilder.getHouse()
    }
}
```

### House.kt

```kotlin
class House {

    var walls: String = ""
    var floors: String = ""
    var rooms: String = ""

    override fun toString(): String {
        return "House(walls='$walls', floors='$floors', rooms='$rooms')"
    }
}
```

### BigHouseBuilder.kt

```kotlin
class BigHouseBuilder : HouseBuilder {

    private val house: House = House();

    override fun buildWalls() {
        house.walls = "big walls";
    }

    override fun buildFloors() {
        house.floors = "big floors";
    }

    override fun buildRooms() {
        house.rooms = "big rooms";
    }

    override fun getHouse(): House {
        return house
    }
}
```

### SmallHouseBuilder.kt

```kotlin
class SmallHouseBuilder : HouseBuilder {

    private val house: House = House();

    override fun buildWalls() {
        house.walls = "small walls";
    }

    override fun buildFloors() {
        house.floors = "small floors";
    }

    override fun buildRooms() {
        house.rooms = "small rooms";
    }

    override fun getHouse(): House {
        return house
    }
}
```

### Main.kt

```kotlin
fun main() {
    val smallHouseBuilder = SmallHouseBuilder()
    val bigHouseBuilder = BigHouseBuilder()

    val smallHouseDirector = HouseDirector(smallHouseBuilder)
    smallHouseDirector.buildHouse()

    val bigHouseDirector = HouseDirector(bigHouseBuilder)
    bigHouseDirector.buildHouse()

    val smallHouse = smallHouseDirector.getHouse()
    val bigHouse = bigHouseDirector.getHouse()

    println(smallHouse)
    println(bigHouse)
}
```

### Output

![Output](/programming/utils/builder-4.png)

### Explanation

Classic implementation seems to be much more complicated but nothing could be further from the truth! In fact, it is also really simple, if you understand it correctly.

So let's start with ***HouseBuilder***. It is interface, which has a couple of **buildSomeStuff()** methods for constructing the respective parts of the house and **getHouse()** method, which will return **House** object after construction.

Next, **HouseDirector** class is responsible for directing the construction process. It has private constructor, which takes object of class, which implement interface described previously. This class has two methods:

- **buildHouse()**, which invoke each method from interface in a specific order on object received in constructor.
- **getHouse()**, which returns fully constructed House object. It is actually invocation of **getHouse()** method from interface.

**House** class consists of fields related to house (which we can "build" with methods included in interface) and overwritten **toString()** method.

**BigHouseBuilder** and **SmallHouseBuilder** have the same body. Both implements **HouseBuilder** interface, overwrittes methods from it and initializes **private field** of **House** type. Each builder sets the attributes of the House differently, depending on whether it's a small or big house.

**In main method** firstly we create objects of **SmallHouseBuilder** and **BigHouseBuilder**. Two **HouseDirector** objects are instantiated, each with a different, previously created builder. The **buildHouse()** method is called on each director, which uses the appropriate builder to construct the house. Finally, **getHouse()** method is invoked to retrieve built house objects, and they are printed to the console.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ Eliminates need of creating many constructors.

✅ Improves code readability and reduces the risk of mistake during creation of object.

✅ Object construction process is clearly defined and controlled. Instead of creating an object in one line of code, it is constructed step by step.

❌ In some implementations we need to create many classes. It can lead to overcomplication for simple objects.