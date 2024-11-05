"use client";

import { useState, useEffect } from "react";
import PromptCard from "@components/PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          prompt={post.prompt}
          tag={post.tag}
          creator={post.creator}
          image={post.creator.image}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};


const Feed = () => {
const [searchText, setSearchText] = useState("");
const [posts, setPosts] = useState([]);

const handleSearchChange = (e) => {

}
//console.log(posts);
useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/api/prompt');
     const data = await response.json()
     

    setPosts(data);
    
   // console.log(data._id)
  }
  fetchPosts();
}, [])
//console.log(posts)
  return (
    <section className="feed">
      <form className=" relative w-full flex-center">
        <input type="text"
        placeholder="Search for tag or a username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer"
        />
      </form>

      <PromptCardList
        key={posts._id}
        data={posts}
        handleTagClick={()=> {}}
      />
    </section>
  )
}

export default Feed