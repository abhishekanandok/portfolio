'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';


const reviewsData = [
    {
        avatar: '/reviews/AnkushSingla.png',
        name: 'Abhishek Agrawal',
        job: 'E-commerce Entrepreneur',
        review: 'Couldnot be happier with the results! Abhishek Anand developed a stunning website for my business, exceeding all expectations.Their dedication and commitment to excellence are unmatched.'
    },
    {
        avatar: '/reviews/nehaR.png',
        name: 'Neha R.',
        job: 'Product Manager',
        review: 'Exceptional database management skills! Abhishek Anand optimized our system, enhancing performance and security. Their professionalism and expertise are truly commendable.'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Vikash Vis',
        job: 'UX Designer',
        review: 'Hiring Abhishek Anand for web development was the best decision we made! Their clean code and intuitive designs significantly improved user experience. Definitely our go-to developer from now on!'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'David Patel',
        job: 'CEO, Tech Innovations',
        review: 'Impressed by the level of expertise Abhishek Anand brought to our API development project. They understood our requirements perfectly and delivered beyond our expectations. Looking forward to future collaborations!'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Sophia Reynolds',
        job: 'Marketing Manager',
        review: 'Working with Abhishek Anand was an absolute pleasure! Their attention to detail and proactive communication made our project run smoothly from start to finish. Highly recommend!'
    },
]

const Reviews = () => {
    return (
        <section className=' mb-12 xl:mb-32'>
            <div className="container mx-auto">
                <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
                {/* slider */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    className='h-[350px]'
                >
                    {reviewsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className=' flex items-center gap-x-4'>
                                            {/* image */}
                                            <Image src={person.avatar} width={70} height={70} alt='' priority />
                                            {/* name */}
                                            <div className=' flex flex-col'>
                                                <CardTitle>{person.name}</CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews