import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface ProjectCardProps {
    imageOnLeft: boolean;
    className?: string;
}

const Social: React.FC<ProjectCardProps> = ({ imageOnLeft, className }) => {
    return (
        <div className={`flex w-[800px] h-[400px] shadow-lg rounded-4xl ${className}`}>
            <div className="bg-neutral-300 w-1/2 rounded-l-4xl flex flex-col justify-around items-center p-6">
                <p className="text-neutral-950 w-fit text-[2em] font-bold">Project Name</p>
                <p className="bg-neutral-50 shadow-md rounded-lg p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.</p>
                <button className="shadow-md cursor-pointer bg-neutral-50 p-2 rounded-lg hover:px-6 duration-250">
                    View Project
                    <link rel="stylesheet" href="/" />
                </button>
            </div>
            <div className="bg-cyan-600 w-1/2 rounded-r-4xl">
                
            </div>
        </div>
    );
};

export default Social;