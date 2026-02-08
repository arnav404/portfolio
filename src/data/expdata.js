

import exp1 from '../assets/expimages/exp1.png';
import exp2 from '../assets/expimages/exp2.png';
import exp3 from '../assets/expimages/exp3.png';
import exp4 from '../assets/expimages/exp4.png';
import exp5 from '../assets/expimages/exp5.png';
import exp1_show from '../assets/expimages/exp1.gif';
import exp2_show from '../assets/expimages/exp2.gif';
import exp3_show from '../assets/expimages/exp3_show.jpg';

const expData = [
{ id: 1, isActive: true, date: 'Jan - Mar 2021', title: 'Julia Set Visualizer', image: exp1, show: exp1_show, text: [
    {
        type: 'chunk',
        content: `There's no better place to find mathematical beauty than in **fractals**, infinitely self-similar shapes. Zoom into the edge of a fractal and you'll find the same patterns repeating over and over. The **Sierpinski Triangle**, the **Newton's bugs**, and maybe the most famous of them all, the **Mandelbrot set** all have this property.\n\n **Julia Sets** are perhaps the most simple fractals of all.\n`
    },
    {
        type: 'link',
        content: `You can play around with them here.`,
        demoLink: 'https://rnv.itch.io/julia',
        codeLink: 'https://github.com/arnav404/julia',
        gap: 'gap'
    },
    {
        type: 'chunk',
        content: `## What are Julia Sets?\nConsider the function f(x)=x^2+0.25. Simple function right? What happens to the value of the function as we **iterate** it - if we start at some value of x, find f(x), f(f(x)), f(f(f(x))), and so on? We'd expect that value to either balloon to infinity or stay bounded. In this case, the starting values of x for which the function remains bounded are [-0.5, 0.5] and the iterator goes to infinity everywhere else.\n\n Now, what if we change the function to f(x)=z^2+c where c is a constant and the values of z are **complex numbers**? The set of starting values of z for which the function remains bounded is called the **Julia Set** of c.\n In the above demo, you can change the value of c and see which points on the complex plane remain bounded and which go to infinity. You'll come across some beautiful shapes and as you zoom in, you'll find the same patterns repeating over and over.`
    },
]},
{ id: 2, isActive: true, date: 'Jan - Mar 2021, Jan  2026 -', title: 'Conway\'s Game of Life', image: exp2, show: exp2_show, text: [
    {
        type: 'chunk',
        content: `Conway's Game of Life is a cellular automaton that simulates the life and death of cells on a grid. Each cell can be alive or dead, and the state of each cell in the next generation is determined by its current state and the number of live neighbors it has. \n 1. A live cell with fewer than 2 live neighbors dies (underpopulation)\n 2. A live cell with 2 or 3 live neighbors lives on to the next generation\n 3. A live cell with more than 3 live neighbors dies (overpopulation)\n 4. A dead cell with exactly 3 live neighbors becomes alive (reproduction)\n\n Simple rules based on a simple mental model of how cells interact, but it is from this simplicity that emerges a variety of complex patterns.`
    },
    {
        type: 'link',
        content: `Try it out for yourself!`,
        demoLink: 'https://simpleconway.netlify.app',
        codeLink: 'https://github.com/arnav404/gameoflife',
        gap: 'gap'
    },
    {
        type: 'chunk',
        content: `## Introducing AI\n Given a simulation of the game of life, it would be easy for humans to figure out what the rules are. But how about for an AI? How would a neural network learn to predict the next step of the game without knowing the rules? A lot of machine learning is about finding relations between input and output, so the game of life is a perfect sandbox to test how neural networks learn to find these relations.`
    },
    {
        type: 'link',
        content: `Learn how AIs are trained to predict the next step of Conway's Game of Life, and how this motivates the architecture of the Convolutional Neural Network.`,
        codeLink: 'https://github.com/arnav404/gameoflife'
    },
]},
{ id: 3, isActive: true, date: 'Nov - Dec 2025', title: 'Zero To Hero', image: exp3, show: exp3_show, text: [
    {
        type: 'chunk',
        content: `A series by deep learning pioneer Andrej Karpathy about the basics of deep neural network training. Goes from basic statistical models to a GPT-2 recreation.`,
        gap: 'gap'
    },
    {
        type: 'chunk',
        content: `## I: Intro to NN and Backpropagation\n We want to understand how to minimize the loss function of a neural net. To do so, we must find the derivatives of the loss function with respect to each weight (aka how the loss function changes when each weight is tweaked). We start with turning basic expressions into the shape of **neural networks** and computationally calculating the derivatives with respect to each variable.\n\n We start by building **micrograd**, a program that calculates how one variable changes with respect to another. A simple introduction.`,
    },
    {
        type: 'link',
        content: `Try out micrograd yourself!`,
        codeLink: 'https://colab.research.google.com/drive/1NyIBS8AVIQ4GwGrmlq16oyztZQ4FER7c?usp=sharing',
        gap: 'gap'
    },
    {
        type: 'chunk',
        content: `## II: Basic language models\n We want to understand the basics of how language models (next-token predictors) work, so we will create **makemore**, a program that creates more of whatever we give it (in this case, names).\n\n We will begin with a statistics-based approach and then will introduce neural network techniques we learned in episode one.`,
    },
    {
        type: 'link',
        content: `Let's generate some names!`,
        codeLink: 'https://colab.research.google.com/drive/1YqjyE-We6hci-QCEnwL3usgkbkKTr-z9?usp=sharing',
        gap: 'gap'
    },
    {
        type: 'chunk',
        content: `## III: Multi-layered Perceptron\n It is difficult to create a statistical model by looking at trigrams etc because the dimensionality expands with every new character we have to look at. Thus, we aim to create a model similar to our basic neural network but with more layers, which has the same low loss as a trigram model. We are implementing **A Neural Probabilistic Language Model** by Bengio et al.`,
    },
    {
        type: 'link',
        content: `Let's build a multi-layered perceptron!`,
        codeLink: 'https://colab.research.google.com/drive/1JJfqg6NUuO9b7mdgyKX9CFna53CFBO8t?usp=sharing',
        resourceLink: 'https://www.jmlr.org/papers/volume3/bengio03a/bengio03a.pdf',
        gap: 'gap'
    },
    {
        type: 'chunk',
        content: `## IV: Optimizations\n How do we make our multi-layered perceptron better? If we look at the preactivations of our neural net, we can . In general, we want the distribution of values of our neural network to be normal. We do this through a process called batch normalization.`,
    },
    {
        type: 'link',
        content: `Here's how it's done.`,
        codeLink: 'https://colab.research.google.com/drive/1JjU8ZLZWg_ZTXF02g5l_m4Oig2r_FKBK?usp=sharing',
        gap: 'gap'
    },
    {
        type: 'chunk',
        content: `## TO BE CONTINUED...`,
    },
]}
];

export default expData;