---
title: 'Advantages of auto keyword in C++'
date: "16-10-2024"
categories:
    - Programming
    - C++
---

# Advantages of auto keyword in C++

![Blog image](/programming/programming-auto-keyword.png)

Hello everyone! In this short post I would like to show you advantages of using auto keyword during coding in C++. If you haven't heard about this keyword don't worry! At the beginning I will describe to you what is this and what it do briefly. Let's start!

## What is auto keyword and what is it for?

This keyword performs actually **two** functions, but we will focus on one of them. The second bounds to older C++ versions (before C++11) and I won't raise this topic in this article. Let's get back to the auto keyword since C++11. It is version released in 2011 and with it behavior of auto keyword changed significantly. Now its main function is to predicate the type of variable automatically (similarly like var keyword in Java). For example if you try to define variable with auto keyword and assign integer to it, compiler will determine this type as int, based on the expression to which the variable is assigned.

```cpp
#include <iostream>
auto main() -> int {
    auto x = 2;  
    std::cout << x;
}
```

Above code represents example syntax of auto keyword used in function and variable declaration. Compiler will determine automatically, that x is of type int.

## Why should you start using auto?

Mainly because **auto** keyword is safer than traditional approach with defining variables with its type precisely. You should understand the dangers of using the traditional approach. This danger is so-called **undefined bevahior**. It is something, that you should be aware of and avoid when you code in C++. As the name suggests, undefined behavior is situation, when our program can do literally everything. We can't predict what exactly our program will do then. Consider example of code below:

```cpp
#include <iostream>
auto main() -> int {
    int z;
    std::cout << z;
}
```

What do you think, **what will this code display in our console?** There is really no clear answer to this question. Our program can display 0, whatever number or null - literally everything, but it will still compile. Consider situation, when you forget to assign the variable. Then you will encounter undefined behavior. Maybe you think, that it is hard to forget to assign the variable. Sure, but only when you are working with small code. If you start working on a larger project, then it is definitely possible to forget about it, especially, since your IDE won't tell you that something is wrong - code will be still compilable!

Now guess what will behavior of program be with auto keyword:

```cpp
#include <iostream>
auto main() -> int {
    auto z;  
    std::cout << z;
}
```

Maybe you don't know, but in this case code won't compile. This keyword will secure you from defining variable without its initialization and from potential **undefined behavior**. You can initialize variables with auto in many ways:

```cpp
auto main() -> int {
    auto a = 0; 
    auto b = int();
    auto c = int(0);
    auto d = 3.14;
    auto e = 'A';
    auto str = std::string("Hello");
    auto vec1 = std::vector<int>{1, 2, 3}; 
    auto vec2 = std::vector<std::string>{"one", "two", "three"};
    auto it = vec.begin();
}
```

Apart from security there are more pros, but they are more obvious. For example:

- Improve code readability, especially, when type of variable is really long and complicated.
- Compiler will always choose the correct type of variable, based on the value, which we will assign to it. Programmer doesn't have to worry about its correctness.