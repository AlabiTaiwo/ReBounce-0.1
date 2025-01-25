"use client";
import { useTheme } from "next-themes";

export default function Theme() {
  const { setTheme, resolvedTheme, systemTheme, theme, themes } = useTheme();
  console.log(theme, themes);

  const Themes = [
    {
      id: 1,
      Name: "dark",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          // stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="tabler-icon tabler-icon-moon stroke-black dark:stroke-white"
        >
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      Name: "light",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          // fill="white"
          stroke="none"
          class="tabler-icon tabler-icon-sun-filled fill-black dark:fill-white"
        >
          <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"></path>
          <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"></path>
          <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"></path>
          <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"></path>
          <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"></path>
          <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"></path>
          <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"></path>
          <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"></path>
          <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full p-3 h-[40%] m-0 rounded-lg flex flex-col items-center gap-[6px] justify-around">
      <div className="w-[90%] h-[80%] rounded-lg border border-white"></div>
      <div className=" w-[70%] h-[17%] p-[2px] m-0 flex items-center justify-around rounded-lg border border-white GlassHighblurDark">
        {Themes.map((Theme, idx) => (
          <button
            className="w-[50%] h-full outline outline-[1px] outline-neutral-500 p-[3px] rounded-lg flex items-cente justify-around place-items-center"
            key={Theme.id}
            onClick={() => setTheme(Theme.Name)}
          >
            <>{Theme.svg}</>
          </button>
        ))}
      </div>
    </div>
  );
}
