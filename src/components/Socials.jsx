'use client';

import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiTwitterXFill
} from 'react-icons/ri';
import { SiLinktree } from "react-icons/si";


import Link from 'next/link';

const icons = [
    {
        path: 'https://github.com/abhishekanandok',
        name: <RiGithubFill />,
    },
    {
        path: 'https://www.linkedin.com/in/abhishekanandok/',
        name: <RiLinkedinFill />,
    },
    {
        path: 'https://twitter.com/abhishekanandok',
        name: <RiTwitterXFill />,
    },
    {
        path: 'https://www.youtube.com/abhishekanandok',
        name: <RiYoutubeFill />,
    },
    {
        path: 'https://linktr.ee/abhishekanandok',
        name: <SiLinktree />,
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index} target="_blank">
                        <div className={`${iconStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials;