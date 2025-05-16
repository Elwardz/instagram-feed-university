import PostItem from "@/components/PostItem";
import { posts } from "@/data/postData";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="flex flex-col items-center">
        {posts.map((post, idx) => (
          <PostItem key={idx} post={post} />
        ))}
      </div>
    </main>
  );
}
