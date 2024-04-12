'use client';

import React from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {User,MailIcon,ArrowRightIcon,MessageSquare} from 'lucide-react';

const Form = () => {
  return (
    <form className=' flex flex-col gap-y-4'>
        {/* input */}
        <div className="flex items-center relative">
            <Input type='name' id='name' placeholder='Name'/>
            <User className=' absolute right-6' size={20} />
        </div>
        {/* input */}
        <div className="flex items-center relative">
            <Input type='email' id='email' placeholder='Email'/>
            <MailIcon className=' absolute right-6' size={20} />
        </div>
        {/* input */}
        <div className="flex items-center relative">
            <Textarea type='message' id='message' placeholder='Type Your Message Here...'/>
            <MessageSquare className=' absolute top-4 right-6' size={20} />
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]'>
            Let's Talk 
            <ArrowRightIcon size={20} />
        </Button>
    </form>
  )
}

export default Form