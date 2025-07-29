---
title: 'How JVM works?'
date: "23-07-2024"
categories:
    - Programming
    - Java
---

# How JVM works?

![Blog image](/programming/programming-how-jvm-works.png)

Hello everyone! In [last article](https://www.wiktorchudy.me/differences-between-jvm-jre-and-jdk) I presented you differences between JVM, JRE and JDK and announced, that I have plan to realise article about JVM. And here It is! In this article you will familiarise with JVM in details. I will describe you all really important concepts in short and concise words.

## What is JVM?

JVM is **virtual machine** and environment **capable of executing** compiled application code written in Java, Scala, Kotlin and other languages based on Java platform. Compiler of particular language creates **bytecode**, which is interpreted by JVM. JVM **executes bytecode** and compiles it to machine code. It provides also platform independence (because bytecode is platform independent), memory management, security, and code execution optimization.

## JVM architecture

There are a couple of **JVM** architecture elements, which you should know to better understand how it works.

- **Class Loader** is mainly responsible for loading classes from disk to memory. It loads .class files (they contains bytecode), verifies integrity of bytecode and then checks, whether it meet security requirements. 
- **Execution Engine** is the heart of JVM. As you can guess, It execute bytecode. The most important elements are **interpreter** (which translates bytecode to machine code) and **Just-In-Time (JIT) compiler** (which dynamically compiles parts of bytecode, which are often used, what makes execution faster).
- **Garbage Collector** manages memory by removing unused objects from memory automatically. It prevents memory leaks and improves application performance. I have article about Garbage Collector, so if you are excited about this amazing mechanism take a look at [my article about it](https://www.wiktorchudy.me/cleaner-in-the-world-of-programming-garbage-collector).
- **Java Native Interface (JNI)** allows Java code to work with code written in other languages, such as C or C++. With JNI developers can use libraries written in other languages in their Java applications.

Remember, that this is simplified description of the JVM architecture. There are many other details and components not covered here, but to basic understand they are absolutely enough. If you want to go deeper, I can recommend articles that describes the JVM architecture in details and in advanced aspects. Extra sources:

### [JVM Architecture Explained](https://dzone.com/articles/jvm-architecture-explained)

![Image](/programming/utils/howjvmworks-1.png)

#### [Source of image](https://medium.com/java-for-beginners/understanding-java-virtual-machine-jvm-architecture-e68d1c611026)

## Steps to run app in the JVM

### Source code compilation

Firstly, Java **source code (.java)** is compiled by the **javac** compiler into **bytecode (.class)**. The compiler transforms code written in Java into platform-independent bytecode that the JVM can understand.

### Classes loading

**Class Loader** is responsible for loading **.class** files into the JVM memory. Classes are loaded on demand, which means they are loaded the first time they are needed. Class Loader **consists of several components**. Each of them has own role in the class loading process. For example, the B**ootstrap Class Loader** loads the core JDK classes, while the **Application Class Loader** loads application classes.

### Verification

The JVM c**hecks that the bytecode is correct** and does not contain errors that could lead to incorrect operation of the application. This process ensures that the code is safe to execute. **Involves several steps** such as validating method signatures, data type compatibility, and ensuring there are no illegal statements. This allows the JVM to prevent potentially dangerous code from running.

### Preparation

The JVM **allocates memory** for static class variables and prepares classes for initialization. This is the step where the JVM **reserves space** for static variables and sets default values. During preparation, all static variables are initialized with default values, such as zero for numeric types and null for references.

### Initialization

Static initializers and static blocks are executed. At this point the classes are ready to use.

### Execution

Execution Engine **interprets or compiles the bytecode and executes it**. The Execution Engine can operate in two modes: **interpretation and Just-In-Time (JIT) compilation.** In interpretation mode, the bytecode is translated into machine instructions on an ongoing basis, which is simple but slower. In **JIT mode**, often used code fragments are compiled into machine code, which significantly speeds up their execution. This allows JVM to dynamically optimize the application while it is running. This is the stage where the application actually works.