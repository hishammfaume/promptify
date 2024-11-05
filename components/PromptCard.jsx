"use client";

import {useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({tag,prompt,image,creator, handleTagClick, handleEdit, handleDelete}) => {
  console.log(prompt)
  const [copied, setCopied] = useState("");
  const handleCopy = () => { 
    setCopied(prompt);
    navigator.clipboard.writeText(prompt);
    setTimeout(() => setCopied(""), 3000);}

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image
            src={image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className="flex flex-col">
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {creator.username}</h3>
            <p className='font-iner text-sm text-gray-500'>
              {creator.email}</p>
             
          </div>
        </div>
        <div className='copy_btn' onClick={handleCopy}>
        <Image
            src={copied === prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            alt='copy'
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className='my-4 font-satoshi text-sm text-gray-700'>{prompt}</p>
      <p className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(tag)}
      >{tag}</p>
    </div>
  )
}

export default PromptCard