"use client";
import {
  IconFaceId,
  IconCalendarEvent,
  IconTicket,
  IconReport,
  IconLogout2,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function HeaderNav() {
  const Router = useRouter();
  const HeaderNav = [
    {
      Id: 1,
      Image: <IconFaceId size={20} color="white" />,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          // stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon stroke-black dark:stroke-white tabler-icon-face-id "
        >
          <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
          <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
          <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
          <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
          <path d="M9 10l.01 0"></path>
          <path d="M15 10l.01 0"></path>
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
        </svg>
      ),
      Nav: "Profile",
    },
    {
      Id: 2,
      Image: <IconCalendarEvent size={20} color="white" />,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          // stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon stroke-black dark:stroke-white tabler-icon-calendar-event "
        >
          <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
          <path d="M16 3l0 4"></path>
          <path d="M8 3l0 4"></path>
          <path d="M4 11l16 0"></path>
          <path d="M8 15h2v2h-2z"></path>
        </svg>
      ),
      Nav: "Events",
    },
    {
      Id: 3,
      Image: <IconTicket size={20} color="white" />,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke=""
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon stroke-black dark:stroke-white tabler-icon-ticket stroke-black dark:stroke-white "
        >
          <path d="M15 5l0 2"></path>
          <path d="M15 11l0 2"></path>
          <path d="M15 17l0 2"></path>
          <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
        </svg>
      ),
      Nav: "Tickets",
    },
    {
      Id: 4,
      Image: <IconReport size={20} color="white" />,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          // stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon stroke-black dark:stroke-white tabler-icon-report "
        >
          <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"></path>
          <path d="M18 14v4h4"></path>
          <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"></path>
          <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
          <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
          <path d="M8 11h4"></path>
          <path d="M8 15h3"></path>
        </svg>
      ),
      Nav: "Issues",
    },
    {
      Id: 5,
      Image: <IconLogout2 size={20} color="white" />,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          // stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="tabler-icon stroke-black dark:stroke-white tabler-icon-settings-2 "
        >
          <path
            d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.
                                                                                                                                                                                                                                             948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
          ></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
        </svg>
      ),
      Nav: "Settings",
    },
  ];
  return (
    <div className="text-white font-medium  flex flex-col items-center justify-between w-full h-full z-30">
      {HeaderNav.map((Nav) => (
        <span
          key={Nav.Id}
          className="w-fit h-fit m-0 p-[8px] text-left text-black dark:text-red-500 cursor-pointer flex items-center justify-between"
        >
          <span className="">
            <>{Nav.svg}</>
          </span>
          <a href={`http://localhost:3000/${Nav.Nav}`}>
            <h2 className="font-medium text-20px">{Nav.Nav}</h2>
          </a>
        </span>
      ))}
    </div>
  );
}
