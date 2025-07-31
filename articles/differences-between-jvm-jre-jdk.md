---
title: 'Differences between JVM, JRE and JDK'
date: "16-07-2024"
categories:
    - Programming
    - Java
---

# Differences between JVM, JRE and JDK

![Blog image](/programming/programming-jvm-jre-jdk.png)

Hello everyone! If you ever created applications using Java, Kotlin, Scala or Groovy you have probably heard about three acronyms from the title of this article. Here I would like to describe you **differences** between these three **fundamental** elements from Java **ecosystem** as clearly and easily as possible.

## JVM (Java Virtual Machine)

It is **virtual machine** and environment capable of **executing** compiled application code written in Java. In many other programming languages, compiler creates machine code straight away. However, the Java compiler creates Java bytecode, which is interpreted by JVM. JVM executes bytecode and compiles it to machine code.

You can't download and install JVM **separately**. To install JVM, you need to install at least **JRE**.

## JRE (Java Runtime Environment)

Set of tools and libraries responsible for **execution** of Java application. It contains JVM, set of core class libraries and other resources needed to run app. In short, if you want to run Java application and you are not a programmer, you don't need JDK, but only JRE to run Java programs.

## JDK (Java Development Kit)

Development environment and **complete set of Java programming tools**, which is used to create Java apps. It contains everything, which contains JRE plus development tools (for example: compiler, debugger, documentation tools, package management tools and more).

## Why other languages uses JVM, JRE and JDK?

Not only Java uses these three elements. There are also a few other, so-called **"JVM programming languages"** or **"programming languages from Java ecosystem"**, which are designed to compile to bytecode firstly. Examples of such languages:

- Java
- Kotlin
- Scala
- Groovy
- Clojure

So why? Because these three components offers strong support for cross-platform application launch, automatic memory management and robust runtime environment. 

**JVM** is crucial, because it allows bytecode to run regardless of the hardware platform, which means that application written in different languages can run on any system with the JVM installed. 

**JDK** and **JRE** provide the tools and libraries necessary to compile and run programs, advanced memory management and security mechanisms, which attract developers of other languages ​​to use this infrastructure. For example, languages ​​such as Scala or Kotlin are allowed to take full advantage of existing Java libraries and the ecosystem, while offering different language paradigms and improvements.