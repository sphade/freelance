import { PostCard } from "../../components";

const Feed = () => {
  return (
    <div className="">
      <div className="  flex items-center mx-auto justify-between w-[500px]">
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>
        <div className="w-20 h-20 rounded-full bg-gray-300"></div>
      </div>
      <main>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    </div>
  );
};

export default Feed;
