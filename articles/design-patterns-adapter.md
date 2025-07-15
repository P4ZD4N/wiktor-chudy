---
title: 'Design patterns: Adapter'
date: "06-01-2025"
categories:
    - Programming
---

# Design patterns: Adapter

![Blog image](/programming/programming-dp-adapter.png)

**Adapter** is one of structural design patterns. Main goal of it is to create intermediate class (which is our adapter), which will enable us to force seemingly incompatible interfaces to cooperate. We can create **both one way** adapter or **two way** adapter. In this article I will focus on the first one.

## Problem

Imagine, that you live in future and you have really modern laptop, which only has USB-C ports. While tidying your room, you came across an old mouse, which is connected via a USB-A interface. You decided to check, whether this mouse is still working, but your laptop doesn’t have USB-A port. In this case you should use USB-A to USB-C adapter. This adapter translates both the physical connection and the way data is transferred, enabling collaboration.

## Implementation (Kotlin)

### Project structure

![Project structure](/programming/utils/adapter-1.png)

### Laptop.kt

```kotlin
class Laptop {
 
    private var usbCPort: UsbC? = null
 
    fun connectDevice(usbCPort: UsbC) {
        this.usbCPort = usbCPort
        println("Laptop: Connected device through USB-C port")
        usbCPort.connect()
    }
 
    fun checkConnection() {
        if (usbCPort == null) {
            println("Laptop: USB-C port is not connected")
            return
        }
 
        println("Laptop: USB-C port is already connected")
    }
}
```

### UsbAMouse.kt

```kotlin
class UsbAMouse {
 
    fun connect() {
        println("USB-A Mouse: Mouse connected to USB-A port")
    }
}
```

### UsbC.kt

```kotlin
interface UsbC {
    fun connect()
}
```

### UsbAToUsbCAdapter.kt

```kotlin
class UsbAToUsbCAdapter(private val usbADevice: UsbAMouse) : UsbC {
 
    override fun connect() {
        println("Adapter: Adapter connected to USB-C port")
        usbADevice.connect()
    }
}
```

### Main.kt

```kotlin
fun main() {
    val laptop = Laptop()
    val usbAMouse = UsbAMouse()
    val adapter = UsbAToUsbCAdapter(usbAMouse)
 
    laptop.checkConnection()
    laptop.connectDevice(adapter)
    laptop.checkConnection()
}
```

### Output

![Output](/programming/utils/adapter-2.png)

### Explanation

In this simple implementation we created **Laptop**, **USB-A Mouse** and **USB-A to USB-C adapter**. It is actually one way adapter.

**Laptop** class has one private field, which is responsible for storing USB-C port state. If value of field is null, it means, that no device is connected. Otherwise it stores appropriate device (can store only devices, which implements **USB-C** interface). This class has also two methods: **connectDevice()** and **checkConnection()**. First of them receive, as I mentioned earlier, only devices, which implements USB-C interface as an argument. Then field and connection with device is initialized. Second method is only intended to check, whether port is already connected.

**UsbAMouse** class, which represents our old mouse, has only one method: **connect()**. This method simulates connecting a mouse to the **USB-A** port, which is shared by adapter.

**UsbAToUsbCAdapter** class, which represents our adapter, has also only one method with the same name: **connect()**. This method simulates connecting adapter to **USB-C** port and to the **USB-A** port and calls the **connect()** method on the mouse.

With this approach we can easily connect **USB-A** devices to our laptop, even if our laptop has only **USB-C** ports.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ Enables cooperation between classes, that would not normally be able to do it

✅ Enables to use existing code in new context without its modification

✅ Code becomes more reusable, because we can use various classes in various projects by adapting them using adapter

❌ Code becomes more complex, because implementation needs to add new classes and interfaces

❌ Code becomes more difficult to maintain