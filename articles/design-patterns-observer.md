---
title: 'Design patterns: Observer'
date: "04-12-2024"
categories:
    - Programming
---

# Design patterns: Observer

![Blog image](/programming/programming-dp-observer.png)

**Observer** is one of **behavioral** design patterns. It define one-to-many dependency between objects. This dependency relies on notifying many observator objects about changes and events, that happen innside the object, which is observed by they.

## Problem

Imagine weather forecast application, which regularly receive updates about current weather (for example every hour) from weather service. This forecast may include data such as temperature, humidity, pressure or wind speed.

Application would like to notify various users or devices about each change in the forecast. **Observer** design pattern can ensure, that each registered receiver will be notified automatically, whenever there is a change in weather data.

## Implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/observer-1.png)

### Observer.kt

```kotlin
interface Observer {
    fun updateForecast(weatherForecast: WeatherForecast)
}
```

### InternetNews.kt

```kotlin
class InternetNews : Observer {

    override fun updateForecast(weatherForecast: WeatherForecast) {
        println(
            "Internet: New weather forecast: temperature: ${weatherForecast.temperature}^C pressure: ${weatherForecast.pressure}hPa")
    }
}
```

### RadioNews.kt

```kotlin
class RadioNews : Observer {

    override fun updateForecast(weatherForecast: WeatherForecast) {
        println(
            "Radio: New weather forecast: temperature: ${weatherForecast.temperature}^C pressure: ${weatherForecast.pressure}hPa")
    }
}
```

### TvNews.kt

```kotlin
class TvNews : Observer {

    override fun updateForecast(weatherForecast: WeatherForecast) {
        println(
            "TV: New weather forecast: temperature: ${weatherForecast.temperature}^C pressure: ${weatherForecast.pressure}hPa")
    }
}
```

### Observable.kt

```kotlin
interface Observable {

    fun registerObserver(observer: Observer)
    fun unregisterObserver(observer: Observer)
    fun notifyObservers()
}
```

### WeatherForecast.kt

```kotlin
class WeatherForecast(
    var temperature: Number,
    var pressure: Number
) : Observable {

    private var registeredObservers: MutableSet<Observer> = mutableSetOf()

    override fun registerObserver(observer: Observer) {
        registeredObservers.add(observer)
    }

    override fun unregisterObserver(observer: Observer) {
        registeredObservers.remove(observer)
    }

    override fun notifyObservers() {
        registeredObservers.forEach { observer ->
            observer.updateForecast(this)
        }
    }

    fun updateForecast(temperature: Number, pressure: Number) {
        this.temperature = temperature;
        this.pressure = pressure;
        notifyObservers()
    }
}
```

### Main.kt

```kotlin
fun main() {
    val weatherForecast = WeatherForecast(25, 1003)
    val radioNews = RadioNews()
    val internetNews = InternetNews()
    val tvNews = TvNews()

    weatherForecast.registerObserver(radioNews)
    weatherForecast.registerObserver(internetNews)
    weatherForecast.registerObserver(tvNews)

    weatherForecast.notifyObservers()

    weatherForecast.unregisterObserver(tvNews)
    weatherForecast.unregisterObserver(radioNews)

    println("New forecast - notification only for internet:")

    weatherForecast.updateForecast(18, 1007)
}
```

### Output

![Output](/programming/utils/observer-2.png)

### Explanation

This is implementation of app, which solve problem described in **Problem** section.

Firstly, we create **Observer** interface, which is implemented by classes, whose objects will be observers of observable object. In this app observer classes are: **InternetNews**, **RadioNews** and **TvNews**. Each of them implement **updateForecast()** method to notify followers of particular information source in proper way.

In **weatherforecast** package we can find **Observable** interface, which is implemented by object observable by observers. In our case It will be **WeatherForecast** class.

In **main** method firstly we create objects of observable class (**WeatherForecast**) and of **observer classes (RadioNews, InternetNews, TvNews)**. Observable class contain set of its observers, so we can register observer with **registerObserver()** method. At the beginning each of possible observers are observing our weather forecast. We can notify each of them manually with **notifyObservers()** method. As you can see - it works. Let's assume that for some reason we want to notify only the **InternetNews** about the next update, so we would like to unregister **TvNews** and **RadioNews** observers with **unregisterObserver()** method. And the last step is to update forecast. As you can see, when forecast was updated, **InternetNews** observer was notified about this change.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ Observable doesn't need to know the details of its observers, making it easy to add or remove observers without modifying the observable.

✅ New observers can be added dynamically without affecting the observable or other observers.

❌ Observators are notified in random order.
