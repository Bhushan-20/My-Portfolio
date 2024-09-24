import { useState, useEffect } from "react";
import Profile from "../../assets/profile-pic.jpeg";
import ButtonLink from "../shared/ButtonLink";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
    "Coder",
  ];
  const typingSpeed = 100;
  const deletingSpeed = 80;
  const delay = 1000;

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const currentRoleString = roles[roleIndex];
      const updatedRole = isDeleting
        ? currentRoleString.substring(0, charIndex - 1)
        : currentRoleString.substring(0, charIndex + 1);

      setCurrentRole(updatedRole);

      if (!isDeleting && charIndex === currentRoleString.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }

      setCharIndex((prevCharIndex) =>
        isDeleting ? prevCharIndex - 1 : prevCharIndex + 1
      );
    };

    timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const toggleButton = document.getElementById("toggle-button");
    const navbar = document.querySelector(".navbar");

    if (toggleButton) {
      toggleButton.addEventListener("click", function () {
        navbar.classList.toggle("show-nav");
      });
    }

    return () => {
      if (toggleButton) {
        toggleButton.removeEventListener("click", () => {
          navbar.classList.toggle("show-nav");
        });
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="flex items-start flex-col justify-center pt-[150px] md:pt-[0] h-screen min-h-screen p-0 mx-auto my-0 max-w-[1000px] heroSection"
    >
      <div className="flex justify-center lg:justify-between gap-8 lg:gap-0 items-center relative flex-wrap-reverse w-full">
        <div className="flex flex-col items-center lg:items-start max-w-[45rem] lg:max-w-[30rem]">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-themeBlue text-clamp1 tracking-wider leading-loose font-mono font-normal ml-[2px]  sm:ml-[3px]"
          >
            Hi, my name is
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-clamp2 m-0 font-bold text-primaryText font-fontHeading"
          >
            Bhushan Patil.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left text-clamp2 text-secondaryText font-bold text-xl font-fontHeading"
            style={{ minHeight: "2rem" }} // Fixed height to prevent movement
          >
            <span className="role">{currentRole}</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left m-0 mt-[20px] text-secondaryText font-fontParagraph"
          >
            I'm a passionate software developer with a strong foundation in computer science, driven by a fascination with technology. Dedicated to continuous learning, I strive to create innovative and efficient software solutions.          </motion.p>
          <ButtonLink
            content="Get In Touch!"
            url="/#contact"
            classNameBox="mt-[50px]"
            classNameBtn="px-[1.75rem] py-[1rem] text-[14px] tracking-wide"
            blank={false}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -20, 0] }} // Combined opacity and up-down motion
          transition={{
            opacity: { delay: 0.4, duration: 0.5 }, // Initial opacity transition
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, // Up and down motion
          }}
          viewport={{ once: true }}
          className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[18rem] shadow-lg rounded-lg"
        >
          <div
            className="w-full h-full rounded-lg border border-themeBlue bg-no-repeat"
            style={{
              backgroundImage: `url(${Profile})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
            }}
          ></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
