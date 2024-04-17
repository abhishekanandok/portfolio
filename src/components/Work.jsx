'use client';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from './ui/button';
import ProjectCard from './ProjectCard';


const projectData = [
    {
        image: '/work/yaleFiesta.png',
        category: 'next js',
        name: 'yaleFiesta',
        description: 'A Event/Fest hosting website for my colleges. Real world live website with users apporx 2k.',
        link: '#',
        github: 'https://github.com/abhishekanandok/yalefiesta',
    },
    {
        image: '/work/wanderlust.png',
        category: 'ejs',
        name: 'Wanderlust',
        description: 'This is a hotel and property booking website, inspired by Airbnb.',
        link: 'https://wanderlust-abhishekanandok.vercel.app/',
        github: 'https://github.com/abhishekanandok/Wanderlust',
    },
    {
        image: '/work/portfolio.png',
        category: 'next js',
        name: 'My Portfolio',
        description: 'This is My Portfolio Website. ',
        link: 'https://abhishekanandok.com',
        github: 'https://github.com/abhishekanandok/portfolio',
    },
    {
        image: '/work/CodeYodha.png',
        category: 'javascript',
        name: 'CodeYodha',
        description: 'Purnea College of Engineering (PCE) Web Hackathon "Event Management Website"',
        link: 'https://abhishekanandok.github.io/CodeYodha/',
        github: 'https://github.com/abhishekanandok/CodeYodha',
    },
    {
        image: '/work/simonGame.png',
        category: 'javascript',
        name: 'SimonGame',
        description: 'Play this basic simon Game !',
        link: 'https://abhishekanandok.github.io/SimonGame/',
        github: 'https://github.com/abhishekanandok/SimonGame',
    },
];

const Work = () => {
    return (
        <section className=' relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                {/* text */}
                <div className="flex max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex-col justify-center items-center xl:items-start">
                    <h2 className=' section-title mb-4'>Latest Projects</h2>
                    <p className='subtitle mb-8'>Discover My Latest Projects: Experience a quick tour of my recent work in sleek slides. See firsthand how my expertise in MERN Stack and diverse programming languages brings innovation to life.</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className=' xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper
                        className='h-[500px]'
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{clickable: true}}
                    >
                        {/* show only the first 4 */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;