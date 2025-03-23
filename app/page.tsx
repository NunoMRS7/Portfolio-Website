import Image from "next/image";
import DecryptedText from "@/components/DecryptedText";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
        <section id="home" className="overflow-hidden justify-between p-40 flex w-[100vw] h-[100vh] items-center bg-neutral-50">
            <div className="items-center flex flex-col gap-25">
                <div className="flex flex-col items-center">
                    <div className="text-[50px] font-bold text-color text-neutral-900">
                        <DecryptedText
                            text="Hi, I'm Nuno Silva!"
                            maxIterations={20}
                            characters="01234ABCD%!?"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                            speed={105}
                            animateOn="view"
                            sequential={true}
                        />
                    </div>
                    <div className="text-xl mt-4 text-neutral-900">
                        <DecryptedText
                            text="/* Software Engineer Student */"
                            maxIterations={20}
                            characters="01234ABCD%!?"
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                            speed={65}
                            animateOn="view"
                            sequential={true}
                        />
                    </div>
                </div>
                <div className="flex gap-15">
                    <a href="https://www.linkedin.com/in/nuno-silva-79b160357/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="cursor-pointer w-8 h-8 red text-neutral-900 hover:text-neutral-500 hover:scale-115 transition duration-200" />
                    </a>
                    <a href="https://github.com/NunoMRS7" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="cursor-pointer w-8 h-8 text-neutral-900 hover:text-neutral-500 hover:scale-115 transition duration-200" />
                    </a>
                    <a href="mailto:nmrsilva7@gmail.com">
                        <FaEnvelope className="cursor-pointer w-8 h-8 text-neutral-900 hover:text-neutral-500 hover:scale-115 transition duration-200" />
                    </a>
                </div>
            </div>
            <Image src="/Eu.png" width={550} height={550} alt='me.png' className="translate-y-40" />
        </section>
        <section id="about" className="p-16 w-[100vw] h-[100vh] color bg-neutral-400">

        </section>
        <section id="projects" className="p-16 w-[100vw] h-[400vh] color bg-neutral-500">

        </section>
        <section id="contact" className="p-16 w-[100vw] h-[100vh] color bg-neutral-700">

        </section>
    </div>
  );
}
