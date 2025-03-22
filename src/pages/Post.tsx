// import React from 'react'
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import axios from "axios";

function Post() {
  const [posts, setPosts] = useState<
    { id: number; title: string; body: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get("https://dummyjson.com/posts");
        setPosts(postResponse.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log("---------------posttttttt", posts);
  return (
    <div className="flex">
      <div className="w-full h-screen">
        <Navbar />
        <div className="flex">
          <div className="w-2/12 bg-blue-500">
            <Sidebar />
          </div>
          <div className="w-10/12 bg-blue-400">
            <div className=" w-1/1 items-center justify-center h-screen bg-gray-200">
              <div className="bg-gray-50 h-screen w-1/1 border-2 border-red-200">
                {posts?.map((e) => (
                  <div key={e.id}>
                    <h1>{e.title}</h1>
                    <p>{e.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
