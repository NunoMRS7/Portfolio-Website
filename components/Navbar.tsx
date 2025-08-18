"use client";

import NavTab from "./NavTab";

const Navbar = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center hidden md:flex">
      <div className="mt-4 text-[20px] fixed flex rounded-lg bg-neutral-800 w-[90vw] p-3 items-center text-neutral-50 z-50 shadow-lg text-xl justify-between"> 
        <p className="font-bold bg-neutral-50 text-neutral-900 p-1 rounded-lg"> &lt; Nuno Silva /&gt; </p>
        <div className="flex w-1/2 justify-around">
          <NavTab name={"Home"} destination={"home"} />
          <NavTab name={"About"} destination={"about"} />
          <NavTab name={"Projects"} destination={"projects"} />
          <NavTab name={"Contact"} destination={"contact"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;