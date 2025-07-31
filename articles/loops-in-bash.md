---
title: 'Loops in Bash'
date: "30-05-2024"
categories:
    - Programming
    - Bash
---

# Loops in Bash

![Blog image](/programming/programming-loops-bash.png)

My last article about Bash was about if statements. If you don't get acquainted with it yet, I encourage you to do it. In this article I would like to tell you more about loops - next powerful tools, without which you can't write complex Bash scripts, so let's get started!

## Basic loops and their syntax

### For

Probably the easiest to understand and favorite loop of all students 😂. For loop is mostly used to iterate over elements of list / array and to performing certain operations on these elements. Below you can find some examples.

#### Basic for loop syntax

![Blog image](/programming/utils/bashloop-1.png)

#### For loops, which prints number from 1 to 5

![Blog image](/programming/utils/bashloop-2.png)

![Blog image](/programming/utils/bashloop-3.png)

#### For loop, which prints all fruits from fruit list

![Blog image](/programming/utils/bashloop-4.png)

#### For loop, which prints all files in home directory, whose names starts with "x"

![Blog image](/programming/utils/bashloop-5.png)

### While

This loop performs certain operations contained in it as long as condition is true. The **while** loop finds its greatest use in cases like waiting for a status, checking a service, or performing an action until a condition is met.

#### Basic while loop syntax

![Blog image](/programming/utils/bashloop-6.png)

#### While loop, which prints numbers from 1 to 5

![Blog image](/programming/utils/bashloop-7.png)

It is possible but... **for loop is better in this case**! Just take a look on amount of code to perform that operation with for loop and then with while loop!

#### While loop, which checks status and ends when status is ready

![Blog image](/programming/utils/bashloop-8.png)

### Until

Finally the last loop! Because **until** loop is very similar to while loop, both loops have the same usages. But remember about two main differences.

- **While** loop performs operations contained in it as long as condition is true. Until loop performs operations contained in it as long as condition is false.

- In **while** loop, if condition is true from the beggining, loop won't be executed even once. In **until** loop, if condition is false from the begginig, loop will be executed at least once.

#### Basic until loop syntax

![Blog image](/programming/utils/bashloop-9.png)

#### Until loop, which prints numbers from 1 to 5

![Blog image](/programming/utils/bashloop-10.png)

The same example like in while, but in condition instead of -le (less or equals) I used -ge (greater or equals). And for loop is still better in this case.

#### Until loop, which checks whether entered password is sufficiently long

![Blog image](/programming/utils/bashloop-11.png)

### Nested loops

Bash supports nested loops, which means that programmer is able to perform more complex operations. We can nest all three loops, which I presented in this article. You can see example below:

![Blog image](/programming/utils/bashloop-12.png)

### Break and continue

We can interrupt loop in bash with break instruction. It ends loop regardless of whether the loop termination condition is met. Basically break instruction interrupts only this loop, in which we put it, but we can also interrupt more loops in case of nested loops.

#### Interrupting only nested loop

![Blog image](/programming/utils/bashloop-13.png)

#### Interrupting both loops

![Blog image](/programming/utils/bashloop-14.png)

Okay, so what's the difference? After **break** instruction I simply added digit: **2**. And that's all! You can specify number of loops you want to interrupt. When you use only **break** without number, it is equivalent of break **1**.

With continue instruction we can skip current iteration of loop and switch to next. It's the best to show this with example:

![Blog image](/programming/utils/bashloop-15.png)

With appropriate if statement and **continue** instruction I skipped all iterations of loops, where j equals 2 or 3.