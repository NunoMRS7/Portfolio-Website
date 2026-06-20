import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialProps {
    gap: string;
    className?: string;
}

const Social: React.FC<SocialProps> = ({ gap, className }) => {
    return (
        <div className={`flex ${className}`} style={{ gap }}>
            <a href="https://www.linkedin.com/in/nuno-silva-79b160357/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="cursor-pointer w-8 h-8 text-neutral-900 hover:text-neutral-500 hover:scale-115 transition duration-200" />
            </a>
            <a href="https://github.com/NunoMRS7" target="_blank" rel="noopener noreferrer">
                <FaGithub className="cursor-pointer w-8 h-8 text-neutral-900 hover:text-neutral-500 hover:scale-115 transition duration-200" />
            </a>
            <a href="mailto:nmrsilva7@gmail.com">
                <FaEnvelope className="cursor-pointer w-8 h-8 text-neutral-900 hover:text-neutral-500 hover:scale-115 transition duration-200" />
            </a>
        </div>
    );
};

export default Social;