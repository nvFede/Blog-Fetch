import React from "react";
import FeaturedImage from "./FeaturedImage";

const PostsGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ">
      {posts.map((post, index) => (
        <div key={index} className="rounded overflow-hidden shadow-lg">
          <FeaturedImage id={post.id} />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 capitalize">{post.title}</h2>
            <p className="text-gray-700 text-base">{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
