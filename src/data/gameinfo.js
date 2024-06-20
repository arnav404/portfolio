
import inc from '../media/banners/INC.png'
import wap from '../media/banners/wap.png'
import website from '../media/banners/website.png'
import royale from '../media/banners/royale.png'

import siteshow from '../media/showcase/siteshow.gif'
import wapgif from '../media/showcase/wapshow.gif'
import ncshow from '../media/showcase/ncshow.gif'
import uc from '../media/showcase/uc.gif'

import juliaimage from '../media/banners/juliaimage.png'
import dd from '../media/banners/DD.png'

import juliashow from '../media/showcase/juliashow.gif'

// csharp, unity, node, react, swift, express, action, puzzle, stealth, platformer

const games = [
    {
        "title": `# Worlds Apart \n #### ...but still connected`,
        "stack": [1, 0],
        "genres": [1, 3, 4],
        "code": "",
        "live": "https://www.youtube.com/watch?v=LFup3A1ZZ74",
        "image": wap,
        "showPic": wapgif,
        "blurb": `##### A co-op game where players in different but connected worlds must work together to solve puzzles.`,
        "description": `##### Designed and developed **Worlds Apart**, a co-op game where players in different but connected worlds must work together to solve puzzles. Made in **six weeks** to showcase at UCSB's Gaucho Gaming Lab.\n ### Creating the world\n ##### Each player is in a world separate but almost identical to the other. Creating two separate levels can be time consuming and confusing to the player. Thus, the levels are mostly identical except for a few small changes. For example, a tree could exist in one world but not the other. In code, this means both players interact with the same level, but some objects can only be interacted with by one player. We use layermasks to differentiate the objects in P1 and P2's visions.\n ### Connecting the worlds\n ##### When one character interacts with an object in his world, the corresponding object in the other's world will change as well. This is the game's core mechanic. Imagine player one pushes a block down a ramp. Then, player two's block will automatically fall down the ramp as well. Adding the further constraint that the blue player can only interact with blue objects and the red player with red objects creates the "block system". If the red player encounters a blue block that needs to be moved, he must rely on the blue player to move it for her.\n ### Why two worlds?\n ##### The game as described so far can still work if both players are in the same world. In this one world, the blue character can interact with blue objects and the red character with red objects. They must work together to solve the puzzle. This game would still be engaging and have many of the same puzzles as Worlds Apart. So, where does the core mechanic come into play? In three separate ways.`
    },
    {
        "title": `# arnav.pro (Solo) \n #### just my portfolio :D`,
        "stack": [2, 3],
        "genres": [1],
        "code": "https://github.com/arnav404/portfolio",
        "live": "https://arnav.pro",
        "image": website,
        "showPic": siteshow,
        "blurb": `##### The website you're looking at right now.`,
        "description": `##### The website you're looking at right now. It's just a regular website. A website I made to showcase my work. Nothing interesting. You can even check out my code. No seriously, nothing interesting here. What? What's your deal, man. IT'S JUST A WEBSITE. Gosh... kids these days. Just. Just leave me alone. Please. Ugh. You're insuferable. Okay, you got me. The password is ________.`,
    },
    {
        "title": "Julia Set Visualizer",
        "stack": [1,0],
        "genres": [],
        "code": "https://https://github.com/arnav404/julia",
        "live": "https://rnv.itch.io/julia",
        "image": juliaimage,
        "showPic": juliashow,
        "blurb": `##### A visualizer for Julia Sets created by quadratic iterators. Made for a class at UC Santa Barbara.`,
        "description": `##### A visualizer for Julia Sets created by quadratic iterators. Made for a class at UC Santa Barbara.`,
    },
    {
        "title": "Digit Dynasty",
        "stack": [2, 3],
        "genres": [],
        "code": "https://https://github.com/arnav404/julia",
        "live": "https://rnv.itch.io/julia",
        "image": dd,
        "showPic": uc,
        "blurb": `##### A visualizer for Julia Sets created by quadratic iterators. Made for a class at UC Santa Barbara.`,
        "description": "A visualizer for Julia Sets created by quadratic iterators. Made for a class at UC Santa Barbara.",
    },
    {
        "title": `# Lightbringer (Team of 3) \n #### Think before you step`,
        "stack": [1, 0],
        "genres": [1],
        "code": "https://https://github.com/arnav404/Lightbringer",
        "live": "https://rnv.itch.io/ninth-circle",
        "image": inc,
        "showPic": ncshow,
        "blurb": `##### A short boulder-pushing puzzle game about a spirit trying to escape a tower. Made in **three weeks** for a class at UC Santa Barbara.`,
        "description": `##### Designed, developed, and made the art for **Lightbringer**, a short boulder-pushing puzzle game about a spirit trying to escape a tower. Made in **three weeks** for a class at UC Santa Barbara.`,
    },
]

export default games