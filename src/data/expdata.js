

import exp1_banner from '../assets/expimages/exp1_banner.png';
import exp2_banner from '../assets/expimages/exp2_banner.png';
import exp3_banner from '../assets/expimages/exp3_banner.png';
import exp4_banner from '../assets/expimages/exp4_banner.png';
import exp5_banner from '../assets/expimages/exp5_banner.png';
import exp1_show from '../assets/expimages/exp1_show.gif';

const expData = [
{ id: 1, isExperiment: true, title: 'Julia Sets', description: 'Simple Equations. Cool Patterns.', image: exp1_banner, show: exp1_show, text: ``, demoLink: 'https://rnv.itch.io/julia'},
{ id: 2, isExperiment: true, title: 'Tal Bot', description: 'A chess bot that plays like a legend.', isExperiment: true, image: exp2_banner, show: exp2_banner, text: ``},
{ id: 3, title: 'Conway\'s Game of Life', description: 'Simple Rules. Cool Patterns', image: exp3_banner, show: exp3_banner, text: ``},
{ id: 4, isExperiment: true, title: 'AI Plays Nim', description: 'Don\'t pick the last rock! AI won\'t.', image: exp4_banner, show: exp4_banner, text: ``},
{ id: 5, isExperiment: true, title: 'GPT From Scratch', description: 'Building language models ground up.', image: exp5_banner, show: exp5_banner, text: ``},
];

export default expData;