// import React from 'react'
import { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import { FaHeart, FaRegComment } from "react-icons/fa";
import { JSX } from "react/jsx-runtime";


interface PostType {
  map(arg0: (post: any) => JSX.Element): import("react").ReactNode;
  id: number;
  title: string;
  body: string;
  reactions: any;
  views: number;
}

function Post() {
  const [posts, setPosts] = useState<PostType>([]);

  const [islike, setIsLike] = useState<any>(false);
  const [likeCount, setlikeCount] = useState<any>(0);
  console.log("-----------------------islike1", islike);

  function handleClick() {
    console.log("--------------like fn calleddd--------------");
    if (!islike) {
      // setIsLike(true);
      setlikeCount(likeCount + 1);
    } else {
      setIsLike(false);

      if (likeCount == 0) {
        setlikeCount(0);
      } else {
        setlikeCount(likeCount - 1);
      }
    }
  }

  console.log("-----------------------islike2", islike);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postResponse = await axios.get(
          "https://dummyjson.com/posts?limit=2"
        );
        setPosts(postResponse.data.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <div className="w-full h-screen">
        <Navbar />
        <div className="flex">
          <div className="w-2/12 ">
            <Sidebar />
          </div>
          <div className="w-10/12 bg-gray-200">
            {posts?.map((post) => (
              <div className="flex justify-center mt-2  ">
                <div className=" w-1/1 items-center justify-center   ">
                  <div className="bg-gray-50 w-1/1  p-2 border-2 rounded-lg ">
                    <div className=" flex  ">
                      <div className="max-w-sm rounded-lg shadow-sm ">
                        <div className="h-[400px]">
                          <img
                            className="rounded-t-lg h-[400px]"
                            src="https://random-image-pepebigotes.vercel.app/api/random-image"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="p-2">
                          <div className=" flex justify-between">
                            <div className="flex">
                              <FaHeart
                                className={
                                  islike
                                    ? "w-6 h-6 text-current p-1 text-red-700"
                                    : "w-6 h-6 text-current p-1"
                                }
                                onClick={handleClick}
                              />
                              <FaRegComment className="w-6 h-6 text-current p-1" />
                              <FiSend className="w-6 h-6 text-current p-1" />
                            </div>
                            <p className="text-sm">Views {post.views}</p>
                          </div>
                          <a href="#" className="text-xs">
                            Likes &nbsp;
                            {likeCount}
                          </a>
                          <p className="text-sm">{post.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Post;
