---
title: 'Design patterns: Command'
date: "12-02-2025"
categories:
    - Programming
---

# Design patterns: Command

![Blog image](/programming/programming-dp-command.png)

**Command** is one of behavioral design patterns, which enable us to pack some actions in separated objects. Thanks to this we can store actions, do queues or even undo some actions in easy way. Implementation usually separates code of sender of the command from its executor, which increases flexibility and facilitates potential code extensions.

## Problem

Imagine, that you have simple **music player**. It provides functionalities, which are available after clicking appropriate button on the remote control. We have buttons, which allows to:

🔵 Play first track,

🔵 Play next track,

🔵 Play random track.

Each button on remote control clicked by user sends some command to music player. User doesn’t need to know technical details of these actions – implemented system is flexible and only provides possibility to select appropriate action at the right time.

## Implementation (Kotlin)

### MusicPlayerCommand.kt

```kotlin
interface MusicPlayerCommand {
    fun play()
}
```

### PlayFirstTrackCommand.kt

```kotlin
class PlayFirstTrackCommand(private val musicPlayer: MusicPlayer) : MusicPlayerCommand {
 
    override fun play() {
        musicPlayer.playFirstTrack()
    }
}
```

### PlayNextTrackCommand.kt

```kotlin
class PlayNextTrackCommand(private val musicPlayer: MusicPlayer) : MusicPlayerCommand {
 
    override fun play() {
        musicPlayer.playNextTrack()
    }
}
```

### PlayRandomTrackCommand.kt

```kotlin
class PlayRandomTrackCommand(private val musicPlayer: MusicPlayer) : MusicPlayerCommand {
 
    override fun play() {
        musicPlayer.playRandomTrack()
    }
}
```

### MusicPlayer.kt

```kotlin
class MusicPlayer {
 
    private val tracks: MutableList<String> = mutableListOf("Chin Check", "Candy Shop", "Gin N Juice", "Still D.R.E.", "Xxplosive")
    private var currentTrackNumber = 0
 
    fun playFirstTrack() {
        println("Playing first track: " + tracks[0])
    }
 
    fun playNextTrack() {
        currentTrackNumber++
        if (currentTrackNumber > 4) currentTrackNumber = 0
        println("Playing next track: ${tracks[currentTrackNumber]}")
    }
 
    fun playRandomTrack() {
        val randomNumber = (0..4).random()
        println("Playing random track: ${tracks[randomNumber]}")
    }
}
```

### MusicPlayerRemote.kt

```kotlin
class MusicPlayerRemote {
 
    lateinit var musicPlayerCommand: MusicPlayerCommand
 
    fun pressButton() {
        musicPlayerCommand.play()
    }
}
```

### Main.kt

```kotlin
fun main() {
    val musicPlayer = MusicPlayer()
    val remote = MusicPlayerRemote()
 
    remote.musicPlayerCommand = PlayFirstTrackCommand(musicPlayer)
    remote.pressButton()
 
    remote.musicPlayerCommand = PlayNextTrackCommand(musicPlayer)
    remote.pressButton()
    remote.pressButton()
    remote.pressButton()
    remote.pressButton()
    remote.pressButton()
    remote.pressButton()
 
    remote.musicPlayerCommand = PlayRandomTrackCommand(musicPlayer)
    remote.pressButton()
    remote.pressButton()
}
```

### Explanation

Implementation consists of **MusicPlayerCommand interface**, which is implemented by concrete command classes: **PlayFirstTrackCommand**, **PlayNextTrackCommand** and **PlayRandomTrackCommand**. Each command is equivalent of some specific action (playing first track, next track or random track) and delegates the task to **MusicPlayer** class. This class maintains a list of tracks and provides methods to play first track, next track or random track. **MusicPlayerRemote** class is equivalent of remote control (and also invoker in the **command pattern**) which has reference to **MusicPlayerCommand** and executes its **play()** method when a button is pressed. This setup allows to flexible interaction with the music player. User simply presses button and appropriate command is executed. System is extendable – new commands (like undo) can be added to support additional features without modifying the existing codebase.

**Your implementation can be different! Treat this as a typical demonstration example.**

## Pros and Cons

✅ We can add new commands without modifying existing.

✅ Easy undo/redo implementation.

❌ Each command should be created as separated class. It can lead to mess in our project.

❌ 	Using without caution can lead to excessive complexity in simple cases, where we don’t need to have high level of flexibility.