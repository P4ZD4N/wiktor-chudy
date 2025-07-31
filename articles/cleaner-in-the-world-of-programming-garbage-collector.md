---
title: 'Cleaner in the world of programming - Garbage Collector'
date: "15-06-2024"
categories:
    - Programming
    - Java
---

# Cleaner in the world of programming - Garbage Collector

![Blog image](/programming/programming-garbage-collector.png)

Hello! In this short article I would like to tell you in short, very understandable and concise what exactly is **Garbage Collector** and its basics - how it works, advantages and disadvantages. If you are beginner and would like to understand it quickly this article is for you!

## What is Garbage Collector?

Programming has always required proper and thoughtful memory management to create efficient and stable apps. There are programming languages, which doesn't have built-in **garbage collector** and programmer have to manage memory manually. This give greater control over memory but also carry some risks like memory leaks or dangling pointers. Such languages are for example **C** or **C++** and these mechanisms, among others, make them difficult for beginners

There are also programming languages, which have build-it **garbage collector** like **Java**, **Python** or **JavaScript**. Thanks to this mechanism programmer don't need to manage memory manually, because garbage collector manage it automatically.

## How Garbage Collector works?

- When you create new things in your code (objects, arrays etc.) computer allocates memory space for them.
- After running your app in Java, Python, C#, JavaScript (or other language having built-in garbage collector), garbage collector start working in appropriate moments. In short, it depends on applied gc algorithm and current memory load.
- It keeps track of which things (which you created earlier in you code) are currently used by your program. 
- These, which are used are untouched, but things, which are not, are collected by garbage collector and removed (gc frees memory used by currently not used things). 
- This process repeats itself the entire time your program is running. Garbage Collector tries to optimize memory usage so that the application runs quickly and efficiently.

## Advantages and disadvantages

✅ Reduces programmer's memory management burden.

✅ Reduces the risk of memory leaks and dangling pointers.

✅ Modern Garbage Collectors are very efficient and minimize application interruptions.

❌ Programmers have less control over memory.

❌ Although Garbage Collector is optimized, it may introduce interruptions while programs are running.

❌ Implementing effective Garbage Collector can be complex and requires additional resources.

## Summary

Thank you for reading this short article!

Now you already know more about garbage collector - important element of modern development, which helps programmers in memory management with managing memory in applications automatically, removing unused objects and preventing memory leaks. 

I hope, that knowledge from my article let you understand, how memory is managed in most modern programming languages. Remember, that garbage collector is really complex mechanism and there are many more topics, that you can explore about it. For example there are dozens of algorithms, which can be used by different garbage collectors. If you are interested, then feel free to explore!