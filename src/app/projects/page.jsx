'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';


const projectData = [
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'yaleFiesta',
    description: 'A Event/Fest hosting website for colleges. Real world live website with users apporx 2k.',
    link: '/',
    github: 'https://github.com/abhishekanandok/yalefiesta',
  },
  {
    image: '/work/1.png',
    category: 'javascript',
    name: 'Wanderlust',
    description: 'This is a hotel and property booking website, inspired by Airbnb.',
    link: 'https://wanderlust-abhishekanandok.vercel.app/',
    github: 'https://github.com/abhishekanandok/Wanderlust',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'My Portfolio',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
    link: '/',
    github: 'https://github.com/abhishekanandok/portfolio',
  },
  {
    image: '/work/3.png',
    category: 'javascript',
    name: 'CodeYodha',
    description: 'Purnea College of Engineering (PCE) Web Hackathon "Event Management Website"',
    link: 'https://abhishekanandok.github.io/CodeYodha/',
    github: 'https://github.com/abhishekanandok/CodeYodha',
  },
  {
    image: '/work/3.png',
    category: 'javascript',
    name: 'SimonGame',
    description: 'Play this basic simon Game !',
    link: 'https://abhishekanandok.github.io/SimonGame/',
    github: 'https://github.com/abhishekanandok/SimonGame',
  },
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'react js',
    name: 'Gym Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Zomato Website',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
    link: '/',
    github: '/',
  },
];

//category filter
const uniqueCategories = [
  'all projects', ...new Set(projectData.map((item) => item.category)),
]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    //if category is 'all projects' return all, else filter by category
    return category === 'all projects' ? project : project.category === category;
  });

  return (
    <section className=' min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className=' mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return <TabsTrigger
                onClick={() => setCategory(category)}
                value={category} key={index} className='capitalize w-[162px] md:w-auto'>{category}</TabsTrigger>
            })}
          </TabsList>
          {/* tabs content */}
          <div className=' text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects