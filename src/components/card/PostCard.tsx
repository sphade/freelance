import {
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  //   HandThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { Avatar, IconButton } from "@mui/material";
import img from "./img.png";

const PostCard = () => {
  return (
    <div className="border px-2 py-2 rounded">
      <div className="flex items-center gap-3">
        <Avatar src={img} sx={{
          width: 50 ,
          height:50
        }} />
        <div>
          <p className="capitalize leading-[1] font-semibold">lawal adebola</p>
          <p className="text-gray-500 text-sm font-medium">theNonChalant</p>
        </div>
      </div>
      <div className='p-2'>
        <p className="font-normal text-sm">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ducimus.
         </p>
      </div>
      <div className="flex items-center justify-between text-gray-500 ">
<p>122</p>
<p>122</p>
<p>122</p>
      </div>
    </div>
  );
};

export default PostCard;
