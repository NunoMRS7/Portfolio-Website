"use client";

const Navbar = () => {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center">
      <div className="mt-4 fixed flex gap-[11.2%] rounded-lg bg-neutral-800 w-[90vw] h-16 items-center justify-center text-neutral-50 z-50 shadow-xl text-xl"> 
        <p className="cursor-pointer hover:text-neutral-400 transition duration-250" onClick={() => handleScroll('home')}>Home</p>
        <p className="cursor-pointer hover:text-neutral-400 transition duration-250" onClick={() => handleScroll('about')}>About</p>
        <p className="text-[20px] font-bold bg-neutral-50 text-neutral-900 p-2 rounded-lg">&lt;Nuno Silva /&gt;</p>
        <p className="cursor-pointer hover:text-neutral-400 transition duration-250" onClick={() => handleScroll('projects')}>Projects</p>
        <p className="cursor-pointer hover:text-neutral-400 transition duration-250" onClick={() => handleScroll('contact')}>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;