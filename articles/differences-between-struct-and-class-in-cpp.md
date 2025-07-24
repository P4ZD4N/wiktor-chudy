---
title: 'Differences between struct and class keywords in C++'
date: "14-11-2024"
categories:
    - Programming
    - C++
---

# Differences between struct and class keywords in C++

![Blog image](/programming/programming-struct-vs-class.png)

In C++ we have actually two ways to create something, that is understand as "class". There are two keywords, which enable us to do it: **class** and **struct**.

```cpp
class Person { 
  // ...
};
```

```cpp
struct Person { 
  // ...
};
```

## Difference

There is only one difference between both. It's about default access modifiers.

- **struct** - Default access modifier for all struct members is **public**. We can change access modifier of certain struct member with appropriate keyword.
- **class** - Default access modifier for all class members is **private**. We can change access modifier of certain class member with appropriate keyword.

```cpp
struct MyStruct {
    int x;  // public by default

    private:
      int y;  // private
};

class MyClass {
    int x; // private by default
     
    public:
      int y;  // public
};
```

## Why are there two such keywords in C++?

**struct** keyword must exist in **C++** mainly for compatibility with **C** programming language. This keyword was used in C to group simple data and create slightly more complex structures with them. It did not support methods or other OOP mechanisms.

Addition of class keyword was intended to help programmers distinguish between two concepts: "simple structure" **(struct)** and "class in the sense of object-oriented programming" **(class)**. Struct was intended to create simple groups of data and class was intended to be used for full OOP. However, in practice this distinction turned out to be unimportant, because struct in C++ supports all OOP mechanisms. As a result, we were left with two keywords that are almost functionally identical.


## Which one is better to use?

Both **structs** and **classes** in C++ supports all OOP mechanisms and all access modifiers. They can actually be used interchangeably, but there are some conventions I have heard about, which I would like to reccommend:

- **struct** for groups of data, simple structures without any complex logic, methods or class-like features.
- **class** when you make use of OOP features and create more complex structures.