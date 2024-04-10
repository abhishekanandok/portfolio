'use client';

import {
    RiYoutubeFill,
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill
} from 'react-icons/ri';

import Link from 'next/link';

const icons =[
    {
        path: '/',
        name: <RiGithubFill />,
    },
    {
        path: '/',
        name: <RiLinkedinFill />,
    },
    {
        path: '/',
        name: <RiYoutubeFill />,
    },
    {
        path: '/',
        name: <RiFacebookFill />,
    },
    {
        path: '/',
        name: <RiInstagramFill />,
    },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon,index)=> {
            return(
                <Link href={icon.path} key={index}>
                    <div className={`${iconStyles}`}>{icon.name}</div>
                </Link>
            )
        })}
    </div>
  )
}

export default Socials;