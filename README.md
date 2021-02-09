# Minesweeper

by [Alberto Cerrone](www.linkedin.com/in/alberto-cerrone)

![img](https://img.shields.io/badge/version-v%201.0.0-blue)
👉 [<b>Try me</b>](https://albertocerrone.github.io/sei-project-1/) 👈

## Overview

This project is the representation of Minesweeper from Windows 95. <br>
As simple as it sounds, this was my first project in General Assembly's Software Engineering Immersive course. It was an individual project assigned to us after three weeks of learning and built in less than a week.<br>
As much as I would love to improve the code, I'm deciding to keep it as it is for two reasons:

- To show the world what I'm capable to build after just three weeks into coding
- remind the future myself that maybe will look back on those lines with nostalgia.

Talking about nostalgia, I decided to build Minesweeper from Windows 95 because take me back memories of my first computer my dad bought me when I was 6.<br>
If you are going to play this game, I hope you will have a good jump into the past and have good fun.<br>
Enjoy!

---

## Let's Get Started

### Prerequisites

This game is a desktop-only website and requires the use of a mouse/trackpad.<br>
Please, take advantage of full-screen mode for a better experience.

### Installation steps

No installation is needed, just follow this [<i>link</i>](https://albertocerrone.github.io/sei-project-1/)

### How to use it

The goal of the game is simple: <br>
<b>You have to find all the mines in the field! </b><br>
To do so, you have two types of input:<br>

- <i>Left Click</i>: Open the hidden block<br>
- <i>Right Click</i>: Flag the hidden block to sign a probable mine<br>

When you open a block, the game will show you a number between 1 to 8.<br>
Those are the mines adjacent to that block; they will be helpful to you to discover more bombs and finish the game

From the menu Game, you can decide between 3 levels of difficulty:<br>

- <i>Beginner</i>: 9x9 arena with ten mines to find;
- <i>Intermediate</i>: 16x16 arena with forty mines to find;
- <i>Expert</i>: 30x16 arena with 99 mines to find.<br>

If you desire to reset the game, you can click on the smiley face.

You can understand better the games rules from this Youtube's video:
[<i>How to play Minesweeper by Eric Buffington</i>](https://www.youtube.com/watch?v=7B85WbEiYf4)

---

## How I made it

The technologies used for this project are:<br>

- HTML5
- CSS with the seamless use of CSS Grid and Flexbox
- Vanilla Javascript
- Photoshop

I did not use any libraries or framework.<br>

There are similar projects online that explain how to build a Minesweeper, but I decided to don't copy from them and, I've developed the logic from the ground.<br>

I have based the game's logic to be effortlessly expandable; possibly with this code, if we want to allow the player to customize his experience, deciding how many columns, rows, and mines he wants, it's easy and straightforward.<br>
I structured all the JS around level Beginner, but with the ending goal of the multi-level experience. Just at the end, I've added a <i>function changeLevel()</i> that handles UI and Logic of all the different levels.<br>
As well, I love how I've reused reusable functions for a much cleaner code.<br>
An example is the <i>function whoIsCloseToMe()</i>.
I've used this function to open the cells that are around or to find how many bombs are around each cell.

One of the weak points of my project is the use of CSS classes to keep track of the bombs' position. That allows the player to cheat, just opening the browser's console (Thank you, Andrew Webb, for let me realize this issue).<br>
Another thing that I'm not proud of is UI. The background is not responsive, and I didn't have the opportunity to style it better cause of the incoming deadline.

---

## Contributors

- Alberto Cerrone [📧](mailto:cerrone.alberto93@gmail.com)

---

## Contributing to this project

If you have suggestions for improving this project, please [open an issue on GitHub](https://github.com/albertocerrone/sei-project-1/issues/new).<br>
I will fix just bugs but any suggestions you'll give me to improve the functionality of the game will be used as form of learning but not applied to the code.

## License & Copyright

This work is dedicated to the [public domain (CC0 1.0)](http://creativecommons.org/publicdomain/zero/1.0/). To the extent possible under law, Alberto Cerrone has waived all copyright and related or neighboring rights to the README checklist. See the LICENSE file for all the legalese.
