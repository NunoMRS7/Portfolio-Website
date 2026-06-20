interface NavTabProps {
    name: string;
    destination: string;
    className?: string;
}

const NavTab: React.FC<NavTabProps> = ({ name, destination, className }) => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
  return (
    <p className={`cursor-pointer hover:text-neutral-400 duration-250 ${className}`} onClick={() => handleScroll(destination)}>{name}</p>
  );
};

export default NavTab;