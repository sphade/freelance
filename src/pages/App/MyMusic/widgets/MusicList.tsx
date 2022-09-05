import { PlayIcon, PlusIcon } from "@heroicons/react/24/outline";
import { musicOption } from "../../../../utils/musicOption";
const MusicList = () => {
  return (
    <ul role="list" className="">
        {musicOption.map(({ album, artist, genre, songName, time, year }) => (
          <li className="px-2 pl-10 odd:bg-gray-200 group relative hover:bg-gray-300 gap-2 bg-white grid grid-cols-12 py-3   items-center">
            <div className="absolute opacity-0  group-hover:opacity-100 flex  top-0 left-[250px] px-5 bg-gray-300 h-full items-center">
              <div className="hover:bg-gray-400 h-full w-full flex items-center px-3 justify-center">
                <PlayIcon className="h-5  " />
              </div>
              <div className="hover:bg-gray-400 h-full w-full flex items-center px-3 justify-center">
                <PlusIcon className="h-5" />
              </div>
            </div>
            <span className="  col-span-4 truncate font-normal">
              {songName}
            </span>
            <span className=" text-gray-800 text-sm col-span-2 truncate">
              {artist}
            </span>
            <span className=" text-gray-800 text-sm  col-span-2 truncate">
              {album}
            </span>
            <span className="  text-gray-800 text-sm col-span-1 truncate">
              {year}
            </span>
            <span className="  text-gray-800 text-sm col-span-2 truncate">
              {genre}{" "}
            </span>
            <span className="  text-gray-800 text-sm text-right truncate">
              {time}
            </span>
          </li>
        ))}
      </ul>
  )
}

export default MusicList