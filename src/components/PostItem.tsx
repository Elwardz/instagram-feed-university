"use client";
import { useState } from "react";

type Post = {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  numberOfLikes: number;
  description: string;
};

export default function PostItem({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.numberOfLikes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md border mx-auto mb-10">
      {/* Top bar: avatar + username + follow */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center">
          <img
            src={post.avatarUrl}
            alt={post.username}
            className="w-9 h-9 rounded-full"
          />
          <span className="ml-3 font-semibold text-sm">{post.username}</span>
        </div>
        <button className="text-xs text-blue-500 font-semibold">Follow</button>
      </div>

      {/* Image */}
      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full object-cover aspect-square"
      />

      {/* Icons */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex gap-4 text-xl">
          <button onClick={toggleLike}>{liked ? "❤️" : "🤍"}</button>
          <span>💬</span>
          <span>📤</span>
        </div>
        <div>
          <span>🔖</span>
        </div>
      </div>

      {/* Likes and description */}
      <div className="px-4 pb-3 text-sm">
        <p className="font-semibold">{likes} likes</p>
        <p>
          <span className="font-semibold">{post.username}</span>{" "}
          <span className="text-gray-700">{post.description}</span>
        </p>
      </div>
    </div>
  );
}
