import Bash from '@/components/technologies/Bash';
import FFmpeg from '@/components/technologies/FFmpeg';
import Flask from '@/components/technologies/Flask';
import Gradio from '@/components/technologies/Gradio';
import JavaScript from '@/components/technologies/JavaScript';
import Json from '@/components/technologies/Json';
import Kotlin from '@/components/technologies/Kotlin';
import NextJs from '@/components/technologies/NextJs';
import OpenCV from '@/components/technologies/OpenCV';
import OpenGL from '@/components/technologies/OpenGL';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Streamlit from '@/components/technologies/Streamlit';
import TailwindCss from '@/components/technologies/TailwindCss';
import TensorFlow from '@/components/technologies/TensorFlow';
import TypeScript from '@/components/technologies/TypeScript';
import Whisper from '@/components/technologies/Whisper';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'CapVid',
    description:
      'AI-powered video captioning app that auto-generates and burns subtitles into videos using Whisper speech recognition',
    image: '/project/capvid.png',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Flask', icon: <Flask key="flask" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Whisper', icon: <Whisper key="whisper" /> },
      { name: 'FFmpeg', icon: <FFmpeg key="ffmpeg" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/0xUjwal/CapVid',
    details: true,
    projectDetailsPageSlug: '/projects/capvid',
    isWorking: true,
  },
  {
    title: 'ClipQuoter',
    description:
      'Python app that transcribes video clips and generates shareable quote cards using Gemini AI and Streamlit',
    image: '/project/clipquoter.png',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Streamlit', icon: <Streamlit key="streamlit" /> },
    ],
    github: 'https://github.com/0xUjwal/ClipQuoter',
    details: true,
    projectDetailsPageSlug: '/projects/clipquoter',
    isWorking: true,
  },
  {
    title: 'SysMon',
    description:
      'Lightweight Linux system monitoring dashboard with real-time CPU, memory, disk and network stats via a web UI',
    image: '/project/sysmon.png',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Bash', icon: <Bash key="bash" /> },
      { name: 'JSON', icon: <Json key="json" /> },
    ],
    github: 'https://github.com/0xUjwal/SysMon',
    details: true,
    projectDetailsPageSlug: '/projects/sysmon',
    isWorking: true,
  },
  {
    title: 'Acoustic Artistry',
    description:
      'AI tool that generates album-style artwork from audio using Stable Diffusion, with a Gradio web interface',
    image: '/project/acoustic-artistry.png',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Gradio', icon: <Gradio key="gradio" /> },
      { name: 'TensorFlow', icon: <TensorFlow key="tensorflow" /> },
    ],
    github: 'https://github.com/0xUjwal/Acoustic-Artistry',
    details: true,
    projectDetailsPageSlug: '/projects/acoustic-artistry',
    isWorking: true,
  },
  {
    title: 'Rock Paper Scissors AI',
    description:
      'An intelligent Rock Paper Scissors game that learns your playing patterns using LSTM neural networks and tries to predict your next move',
    image: '/project/rock-paper-scissors-ai.png',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'TensorFlow', icon: <TensorFlow key="tensorflow" /> },
      { name: 'Gradio', icon: <Gradio key="gradio" /> },
    ],
    github: 'https://github.com/0xUjwal/rock-paper-scissors-ai',
    details: true,
    projectDetailsPageSlug: '/projects/rock-paper-scissors-ai',
    isWorking: true,
  },
  {
    title: 'Edge Detection Viewer',
    description:
      'Android camera app that applies real-time Canny edge detection using OpenCV and renders via OpenGL ES',
    image: '/project/edge-detection-viewer.png',
    technologies: [
      { name: 'Kotlin', icon: <Kotlin key="kotlin" /> },
      { name: 'OpenCV', icon: <OpenCV key="opencv" /> },
      { name: 'OpenGL', icon: <OpenGL key="opengl" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: 'https://github.com/0xUjwal/Edge-Detection-Viewer',
    details: true,
    projectDetailsPageSlug: '/projects/edge-detection-viewer',
    isWorking: true,
  },
  {
    title: 'QR Code Generator',
    description:
      'Simple and fast browser-based QR code generator built with vanilla JavaScript and hosted on GitHub Pages',
    image: '/project/qr-code-generator.png',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/0xUjwal/QR-Code-generator',
    details: true,
    projectDetailsPageSlug: '/projects/qr-code-generator',
    isWorking: true,
  },
  {
    title: 'Portfolio',
    description:
      'Personal developer portfolio built with Next.js, TypeScript, and Tailwind CSS showcasing projects and experience',
    image: '/project/portfolio.png',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
    ],
    github: 'https://github.com/0xUjwal/portfolio',
    details: true,
    projectDetailsPageSlug: '/projects/portfolio',
    isWorking: true,
  },
];
