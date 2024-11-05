"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Profile from '@components/Profile'


const MyProfile = () => {

  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
       const data = await response.json()
       
  
      setPosts(data);
      
     // console.log(data._id)
    }
    fetchPosts();
  }, [])

const handleEdit = () => {}
const handleDelete = async () => {}

  return (
    <Profile
        name="My profile"
        desc="This is your profile page"
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile 