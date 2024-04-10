import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import DevImg from "./DevImg";


const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Abhishek Anand',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+91 70507 41633',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'abhishekanandok@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 02 Oct, 2002',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bechlor in Computer Science',
    },
    {
        icon: <HomeIcon size={20} />,
        text: '852139 Triveniganj Supaul, Bihar, India',
    },
]


const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Example University',
                qualification: 'Bachelor Of Science',
                years: '2022 - 2026',
            },
            {
                university: 'Example University',
                qualification: 'PCM',
                years: '2019 - 2021',
            },
            {
                university: 'K C Mount Fort School , Muzafafpur',
                qualification: '10th',
                years: '2018 - 2019',
            },
        ],
    },
    {
        title: 'experince',
        data: [
            {
                company: 'ABC Inc.',
                qualification: 'Software Developer',
                years: '2022 - 2026',
            },
            {
                company: 'ABCg Inc.',
                qualification: 'Software Developer',
                years: '2022 - 2026',
            },
            {
                company: 'Tech Innovators',
                qualification: 'Lead Developer',
                years: '2022 - Present',
            },
        ],
    },
];


const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'React, NextJs',
            },
            {
                name: 'Javascript, Nodejs',
            },
            {
                name: 'C, C++',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            },
        ],
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className=" xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className=" section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className=" flex flex-col xl:flex-row">
                    {/* image */}
                    <div className=" hidden xl:flex flex-1 relative">
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png'/>
                    </div>
                    {/* tabs */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tab content */}
                            <div className=" text-lg mt-12 xl:mt-8">
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div>1.54</div>
                                </TabsContent>
                                <TabsContent value='qualifications'>Qualifications</TabsContent>
                                <TabsContent value='skills'>Skills</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About