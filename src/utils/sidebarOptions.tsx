import { ClockIcon, ListBulletIcon, MusicalNoteIcon, SignalIcon } from "@heroicons/react/24/outline";

export const sidebarOption = [
  {
    Icon: MusicalNoteIcon,
    text: "my music",
    link: "/music",
  },
  {
    Icon: ClockIcon,
    text: "recent plays",
    link: "/recentplays",
  },
  {
    Icon: SignalIcon,
    text: "now playing",
    link: "/playing",
  },
  {
    Icon: ListBulletIcon,
    text: "playlists",
    link: "/playlists",
  },
  
];
