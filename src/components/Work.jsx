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
        category: 'angular js',
        name: 'Zomato Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
        link: '/',
        github: '/',
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
        image: '/work/2.png',
        category: 'react js',
        name: 'Cart Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'Nexa Website',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iusto deserunt sed eaque quasi.',
        link: '/',
        github: '/',
    },
];

const Work = () => {
    return (
        <section className=' relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                {/* text */}
                <div className="flex max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex-col justify-center items-center xl:items-start">
                    <h2 className=' section-title mb-4'>Latest Projects</h2>
                    <p className='subtitle mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Link href='/projects'>
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className=' xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper
                        className='h-[480px]'
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