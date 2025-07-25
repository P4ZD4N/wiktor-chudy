---
title: 'Why should you avoid using std::endl in C++?'
date: "15-10-2024"
categories:
    - Programming
    - C++
---

# Why should you avoid using std::endl in C++?

![Blog image](/programming/programming-std-endl.png)

Hello! This is my first article about C++ and here I would like to make you aware, why should you at least limit usage of std::endl, when you are coding in this programming language. Let's talk about this!

## What is std::endl?

If you ever created code in C++, you probably heard about this. It occurs in many C++ courses, which don't describe it sufficiently. Maybe you use this way so far. So, std::endl is **stream manipulator**, which enable you to insert newline character to output stream. And many beginners think, that this is all. But std::endl is doing **one more thing**. It also **flushes the output buffer simultaneously**.

What actually is buffer flushing? It is process, which sends all data stored in temporary storage (buffer) to the final destination, for example to the screen, file or output device.

### Example

Imagine mailbox and letters. Mailbox represents our buffer and letters represents the data you want to send (for example text, which you want to display on the screen using std::cout). Every time you write something in your program, like std::cout << "Hello";, a letter is put into the mailbox. This letter doesn't go straight to the destination (screen). Sending letters individually would be tiring, inefficient and expensive, but all letters can be sent at once. All letters stays in mailbox until it's time to be sent, to send all data at once. Letters are automatically sent when the mailbox is full or when the program finishes. And this action is exactly **buffer flushing**. Using std::endl after each std::cout is similar operation to sending letters individually.

## Why should you avoid std::endl?

std::endl has impact on your application's performace. It flushes the output buffer, which means, that if you use it after every std::cout, you are actually forcing the system to immediately send everything stored in the buffer to the output. You can significantly slow down your program, especially if you are writing a lot of data or doing it in a loop. Flushing is an expensive operation, because it forces the program to stop and send data, rather than collecting it and sending in larger, more efficient parts.

## What to use instead?

Consider using **'\n'** instead of std::endl, when you don't want to flush the output buffer. It will be the same result as std::endl, but it won't flush the buffer.

### Before

```cpp
#include <iostream>

auto main() -> int {
    std::cout << "Hello, World!" << std::endl;

    return 0;
}
```

### After

```cpp
#include <iostream>

auto main() -> int {
    std::cout << "Hello, World!" << '\n'; 

    return 0;
}
```