---
title: 'How to start write Bash scripts?'
date: "15-05-2024"
categories:
    - Programming
    - Bash
---

# How to start write Bash scripts?

![Blog image](/programming/programming-basics-bash.png)

Hello! In this article I would like to tell you a little about bacics of bash scripts. **Bash** is scripting language primarily used in systems such as Linux and macOS, and simultaneously powerful tool, which is widely used in IT industry and beyond. Bash scripts provide a convenient way to automate tasks, manage system configuration and handle various other operations efficiently, so I encourage you to stay and get acquainted with article! Today's plan:

- We will discuss about conditions, which must be met to write working scripts,
- I will present basic file structure, syntax and commands to start writing first scripts!

## Conditions

- It is not obligatory to use Unix-based system like Linux or macOS to write bash scripts. You can even create your scripts on Windows, but in this article I will focus on writing scripts in Unix-based environment.
- Your file with bash script should have .sh extension. 
- Your file with .sh extension should have appropriate rights. It should have right to execute for user. You can give this right with the **following command**: chmod u+x [file.sh]

## How to run script?

When you are sure that all conditions have been met, you can finally run your script. There are many ways, but I will present you three most basic to run script in terminal.

- **./[script name]** -> when your script is named "script.sh" you should enter ./script.sh
- **bash [script name]** - when your script is named "script.sh" you should enter bash script.sh
- **sh [script name]** - when your script is named "script.sh" you should enter sh script.sh

## File structure

### First line

Firstly open file with .sh extension in your favorite text editor (may be nano, pico, vi; it depends on your preferences!) and add this line:

#### #!/bin/bash

It is special instruction, which is used as first line in all bash scripts. With this line we inform our operating system about interpreter, which should be used to execute file. In this case **#!/bin/bash** means, that file should be interpreted by Bash interpreter, which is located in **/bin/bash** . If you have bash installed in other location, you should adjust your path. For example, if you installed bash in **/etc**, your first line will look as following:

#### #!/etc/bash

### Variables

Variables are second very important thing. Without variables we can't write complex scripts. So how we declare variables? Really simply. Look at code below:

![Blog image](/programming/utils/basicsbash-1.png)

As you can see, we don't have to declare type. You should simply enter name of variable. Now really **important** note. Try not to add spaces between the equal sign and the name of variable and the value it stores. It can generate unwanted errors, so remember about It.

### Using variables as arguments of commands

After declared some variables, you probably would like to use them with other commands. When you refers to the variable in other place, after declaration, you must add dollar as prefix of variable name, for example when you declared "**NAME**" variable, then you should use **$NAME**. Consider example below:

![Blog image](/programming/utils/basicsbash-2.png)

I added six **echo** commands. Each of them receives one of two variables, which I declared earlier, but on different ways. First way is to simply enter variable name with dollar as prefix **($NAME, $BIRTH_YEAR)**, second is to enter variable name in single quotes **('$NAME', '$BIRTH_YEAR')** and the last one is to enter variable name in double quotes **("$NAME", "$BIRTH_YEAR")** Do you think the type of quotation marks matters? Or will result be the same if we enter variable name without quotation marks? Let's find out by running the script:

![Blog image](/programming/utils/basicsbash-3.png)

#### Conclusion

- When you enter variable name with dollar as prefix **without any quotation marks or in double quotes** you are using value, which is assigned to entered variable.
- When you enter variable name with dollar as prefix **in single quotes** you are using literal value entered in these single quotes.

### Last line

It is not necessary and optional, but I recommend you to use this approach. In last line I encourage you to always write **exit 0**, which means that script ends without any error. With this line we clearly determine that the script worked as expected from start to finish.

![Blog image](/programming/utils/basicsbash-4.png)

## Basic commands

At this moment you are fully able to start write your scripts! Now I will present you a few basic commands, that you can use.

- **pwd** - displays path to directory, in which you currently are.
- **cd** - changes current directory to entered as first argument.
- **ls** - displays contents of current directory or directory entered as first argument.
- **touch** - creates empty file with name entered as first argument (if file exists, It changes last usage date to current date).
- **cat** - displays contents of file or files entered as an arguments.
- **mkdir** - creates directory with name entered as first argument.
- **rm** - deletes files/directories entered as arguments.
- **cp** - copies file/directory entered as first argument to location entered as second argument.
- **mv** - changes file/directory name from entered as first argument to this entered as second argument, moves file/directory from location entered as first argument to location entered as second argument.
- **man** - displays manual (documentation) of command entered as first argument.
- **whoami** - displays username ofuser, with which we are using system.
- **who** - displays usernames of all currently logged users.

## Summary

That's all from me at this moment! Thank you for getting acquainted with this article and I hope that It was useful for you. I described conditions, which must be met to write and run script, presented basic script structure and a couple of useful commands.

In near future I will write next articles about bash. I will definitely discuss if statements, for loops, functions and more key and useful concepts.