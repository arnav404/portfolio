
import proj1_banner from '../assets/projectimages/proj1_banner.png';
import proj1_show from '../assets/projectimages/proj1_show.gif';
import proj2_banner from '../assets/projectimages/proj2_banner.png';
import proj2_show from '../assets/projectimages/proj2_show.gif';

const projectData = [
{ id: 1, isExperiment: false, title: 'Worlds Apart', description: 'A co-op game. Players in different but connected worlds must work together to solve puzzles.', image: proj1_banner, show: proj1_show, text: `Designed and developed Worlds Apart, a co-op game where players in different but connected worlds must work together to solve puzzles. Made in six weeks to showcase at UCSB's Gaucho Gaming Lab.
## Creating the world
Each player is in a world separate but almost identical to the other. Creating two separate levels can be time consuming and confusing to the player. Thus, the levels are mostly identical except for a few small changes. For example, a tree could exist in one world but not the other. In code, this means both players interact with the same level, but some objects can only be interacted with by one player. We use layermasks to differentiate the objects in P1 and P2's visions.
## Connecting the worlds
When one character interacts with an object in his world, the corresponding object in the other's world will change as well. This is the game's core mechanic. Imagine player one pushes a block down a ramp. Then, player two's block will automatically fall down the ramp as well. Adding the further constraint that the blue player can only interact with blue objects and the red player with red objects creates the "block system". If the red player encounters a blue block that needs to be moved, he must rely on the blue player to move it for her.`},
{ id: 2, isExperiment: false, title: 'arnav.pro', description: 'The website you are looking at.', image: proj2_banner, show: proj2_show, text: `Built in react. Hosted on Netlify. Feel free to look around. There may be some secrets here.`, demoLink: 'https://arnav.pro', codeLink: 'https://github.com/arnav404/portfolio'}
];

export default projectData;