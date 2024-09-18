import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import ComfyStoreImage from './assets/Comfy-Store.png';
import NextjsStoreImage from './assets/Next-js-Store.png';
import BackroadsImage from './assets/Backroads-App.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    // img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    img: ComfyStoreImage,
    url: 'https://lynnsbuildyourcomfyhome.netlify.app/',
    github: 'https://github.com/jackieglx/furniture_store_comfy',
    title: 'Furniture Store Version 1.0',
    text: 'This furniture store using React, Redux Toolkit and React Query for front-end.  Utilized the Outlet component to create reusable layout structure.',
  },
  {
    id: nanoid(),
    img: NextjsStoreImage,
    url: 'https://nextjs-store-lynn.vercel.app/',
    github: 'https://github.com/jackieglx/nextjs-store',
    title: 'Furniture Store Version 2.0',
    text: 'This furniture store using Next.js to build front-end and back-end. I use Supabase to store data and utilize Prisma to interact with Supabase.',
  },
  {
    id: nanoid(),
    img: BackroadsImage,
    url: 'https://lynnstravelwebsite.netlify.app/',
    github: 'https://github.com/jackieglx/travel-website',
    title: 'Travel Project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
