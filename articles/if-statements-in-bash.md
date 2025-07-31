---
title: 'If statements in Bash'
date: "28-05-2024"
categories:
    - Programming
    - Bash
---

# If statements in Bash

![Blog image](/programming/programming-if-bash.png)

Like in other languages, in **Bash** we have **IF conditional statement**, which is key tool  if you want to write more advanced scripts. It enables you to execute proper block of code, depends on certain conditions.

## Basic syntax

### Basic if statement

![Blog image](/programming/utils/ifbash-1.png)

### If statement with else

![Blog image](/programming/utils/ifbash-2.png)

### If statement with elif and else

![Blog image](/programming/utils/ifbash-3.png)

## How to create conditions?

When you know basic syntax of if statements you probably wonder about how to determine conditions. To do that we must use special **conditional operators** properly.

### Number conditional operators

- -eq -> equals
- -ne -> not equals
- -lt -> less than
- -le -> less than or equals
- -gt -> greater than
- -ge -> greater than or equals

![Blog image](/programming/utils/ifbash-4.png)

![Blog image](/programming/utils/ifbash-5.png)

### String conditional operators

- **= / ==** -> equals (== is more safer when string contains spaces)
- **!=** -> not equals
- **<** -> less than (true when string on the left has fewer letters)
- **>** -> greater than (true when string on the left has more letters)
- **-z** -> empty (zero lenghth)
- **-n** -> not empty (non-zero length)

![Blog image](/programming/utils/ifbash-6.png)

![Blog image](/programming/utils/ifbash-7.png)

### Directory and file conditional operators

- **-f** -> is file
- **-d** -> is directory
- **-e** -> file or directory exists
- **-s** -> file or directory is not empty
- **-r** -> file or directory is readable (user running script has read right)
- **-w** -> file or directory is writable (user running script has write right)
- **-e** -> file or directory is executable (user running script has execute right)

![Blog image](/programming/utils/ifbash-8.png)

![Blog image](/programming/utils/ifbash-9.png)

### Logical operators

Now, when we know more about conditional operators I can introduce logical operators. They are used to combine or negate conditions.

- **!** -> negation
- **-a** -> and
- **&&** -> and
- **-o**  -> or
- **||** -> or

![Blog image](/programming/utils/ifbash-10.png)

![Blog image](/programming/utils/ifbash-11.png)

![Blog image](/programming/utils/ifbash-12.png)

![Blog image](/programming/utils/ifbash-13.png)

## [ ] -> [[ ]]

I introduced basic if statements so far. We can handle with it basic and simple conditions. However, there is a **more advanced** version of if statement. It offers better support for conditional and logical operators, flexibility, security and susceptibility to syntax errors.

How to use this more advanced option? Only difference is that the condition must be between **two square brackets** instead of one. 

Now I will show yousome examples, where traditional if statement won't work, but this more advanced will.

### Comparing number of letters in strings (with < and >)

![Blog image](/programming/utils/ifbash-14.png)

![Blog image](/programming/utils/ifbash-15.png)

![Blog image](/programming/utils/ifbash-16.png)

![Blog image](/programming/utils/ifbash-17.png)

### Checking if both files exists (with &&)

![Blog image](/programming/utils/ifbash-18.png)

![Blog image](/programming/utils/ifbash-19.png)

![Blog image](/programming/utils/ifbash-20.png)

![Blog image](/programming/utils/ifbash-21.png)

## Summary

Thank you for reading this article! We discovered all the secrets that if statements hide. Remember, that using if statements in Bash is key to write scripts, which are able to react on various situations and conditions. It is also necessary tool to start write more complex scripts. 

I hope that after reading this article you are able to create proper conditions and improve your scripts with usage of this tool. I also encourage you to start practise and play with if statements to master this extremely important concept.