import thumbnail from "../assets/Icons/cou.jpg";
import {
  ArrowLeftIcon,
  ArrowPathIcon,
  ArrowsRightLeftIcon,
  BackwardIcon,
  ForwardIcon,
  PlayIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
const FooterPlayer = () => {
  return (
    <footer className="w-full grid grid-cols-3 gap-3  h-[90px] bg-yellow-700 fixed bottom-0 z-20 opacity-90 left-0  ">
    <div className="flex items-center gap-5 ">
      <img src={thumbnail} alt="" className="w-32 h-full" />
      <p>Lorem ipsum dolor sit amet consectetur, adipisici!</p>
    </div>
    <div className=" flex flex-col justify-center">
      <div className="flex text-white w-full  justify-center items-center gap-2">
        <div className="p-2 cursor-pointer  rounded-full hover:bg-gray-900 hover:bg-opacity-50 transition-all">
          <ArrowsRightLeftIcon className="h-5   " />
        </div>
        <div className="p-2 cursor-pointer  rounded-full hover:bg-gray-900 hover:bg-opacity-50 transition-all">
          <BackwardIcon className="h-7  rounded-full " />
        </div>
        <div className="border cursor-pointer hover:bg-gray-900 hover:bg-opacity-50 rounded-full p-2.5 border-gray-200 border-opacity-50">
          <PlayIcon className="h-7   text-white" />
        </div>
        <div className="p-2 cursor-pointer  rounded-full hover:bg-gray-900 hover:bg-opacity-50 transition-all">
          <ForwardIcon className="h-7  rounded-full " />
        </div>
        <div className="p-2 cursor-pointer rounded-full hover:bg-gray-900 hover:bg-opacity-50 transition-all">
          <ArrowPathIcon className="h-5  rounded-full   " />
        </div>
      </div>
      <div className="flex ">
        <span>1:13</span>
        <input
          type="range"
          min="1"
          max="100"
          // className="appearance-none h-10 bg-green-400 outline-none opacity-70 transition-all hover:opacity-100    "
          className="w-full"
        />
        <span>4:50</span>
      </div>
    </div>
    <div className="flex items-center mr-5  justify-self-end">
      <SpeakerWaveIcon className="h-5" />
      <input type="range" name="" id="" />
    </div>
  </footer>
  )
}

export default FooterPlayer