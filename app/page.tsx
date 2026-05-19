"use client";

import DecryptedText from "@/components/DecryptedText";
import ProjectCard from "@/components/ProjectCard";
import Social from "@/components/Social";

export default function Page() {
  return (
    <div className="flex flex-col items-center">

        {/* HOME PAGE */}
        <section id="home" className="overflow-hidden px-18 pb-38 md:pt-20 lg:pt-38 w-full flex items-center justify-center bg-neutral-50">
            <div className="flex flex-col lg:flex-row justify-between w-[1100px] mt-10 items-center">
                <div className="items-center flex flex-col w-fit">
                    <div className="flex flex-col items-center mb-10">
                        <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                            <DecryptedText
                                text="Hi, I'm Nuno Silva!"
                                maxIterations={20}
                                characters="01"
                                parentClassName="all-letters"
                                encryptedClassName="encrypted"
                                speed={105}
                                animateOn="view"
                                sequential={true}
                            />
                        </div>
                        <div className="text-[13px] sm:text-md md:text-lg lg:text-xl mt-4 text-neutral-900">
                            <DecryptedText
                                text="<!-- Software Engineer -->"
                                maxIterations={20}
                                characters="01"
                                parentClassName="all-letters"
                                encryptedClassName="encrypted"
                                speed={80}
                                animateOn="view"
                                sequential={true}
                            />
                        </div>
                    </div>
                    <Social gap="60px" className="hidden mt-10 lg:flex"/>
                </div>
                <div className="items-center flex flex-col">
                    <div className="shadow-lg bg-neutral-200 text-neutral-900 h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] flex flex-col justify-center items-center rounded-xl">
                        <img src="/ME.JPG" width="85%" height="85%" alt="me" className="rounded-xl" />
                    </div>
                    <Social gap="60px" className="mt-10 lg:hidden"/>
                </div>
                
            </div>
        </section>

        {/* ABOUT PAGE */}
        <section id="about" className="overflow-hidden px-18 w-full bg-neutral-500">
            <p className="py-90">ABOUT PAGE</p>
        </section>

        {/* PROJECTS PAGE */}
        <section id="projects" className="px-18 w-full bg-neutral-200 flex flex-col items-center">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mt-30 mb-20">Projects</p>
            <div>
                <ProjectCard imageOnLeft={false} className="mb-20"/>
                <ProjectCard imageOnLeft={false} className="mb-20" />
                <ProjectCard imageOnLeft={false} className="mb-20" />
                <ProjectCard imageOnLeft={false} className="mb-20" />
            </div>
        </section>

        {/* CONTACT PAGE */}
        <section id="contact" className="overflow-hidden px-18 w-full bg-neutral-500">
            <p className="py-90">CONTACT PAGE</p>
        </section>


    </div>
  );
}
