import about from "../../assets/about.jpg";
import { skills } from "../../utilities/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="my-[100px] md:my-0 mx-auto py-[100px] md:px-0 max-w-[900px]"
      initial={{ opacity: 0, y: 25 }}
      transition={{ delay: 0.5, duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-end relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText font-bold">
        <div className="hidden md:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] mr-[20px] "></div>
        <span className="relative -bottom-1 text-themeBlue font-mono text-smallSize font-semibold mr-[10px]">
          02.
        </span>
        <h2 className="text-sectionHeading">About me</h2>
        <div className="block md:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px] "></div>
      </div>
      <div className="flex justify-center lg:justify-between place-items-start gap-10 flex-wrap-reverse md:flex-nowrap">
        <div className="group w-full max-w-[300px] relative h-[340px]">
          <div className="absolute top-[14px] right-[14px] w-full h-[320px] border-2 border-themeBlue rounded-lg transition-all duration-200  group-hover:top-[24px] group-hover:right-[24px]"></div>
          <div className="block relative w-full bg-themeBlue  shadow-aboutShadow max-h-[400px] h-[320px] rounded-lg transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
            <div
              className="w-full h-full bg-no-repeat rounded-lg relative z-[1]  transition-all duration-300 mix-blend-multiply grayscale  group-hover:mix-blend-normal group-hover:filter-none"
              style={{
                backgroundImage: `url(${about})`,
                backgroundPosition: "center 25%",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
        <div className="text-secondaryText font-fontParagraph text-base md:text-justify w-full md:max-w-[350px] lg:max-w-[500px]">
          <p className="mb-3">
            I am a Software Engineer with hands-on experience in full-stack development, specializing in building scalable and secure web applications using the <span className="text-themeBlue">HTML</span>,{" "}
            <span className="text-themeBlue">React</span>,{" "}
            <span className="text-themeBlue">Node.js</span>,{" "}
            <span className="text-themeBlue">ExpressJS</span>,{" "}
            <span className="text-themeBlue">MongoDB</span>. I thrive in dynamic environments where innovation and 
            continuous learning are encouraged. My expertise extends to designing responsive and 
            engaging user interfaces while ensuring backend efficiency.
          </p>
          <p className="mb-3">
            In addition to my development skills, I am well-versed in Data Structures and Algorithms, particularly in C++ <span className="text-themeBlue">C++</span>. Over
            time, I have successfully tackled over{" "}
            <span className="text-themeBlue">400+</span> distinct problems on
            renowned platforms such as{" "}
            <a
              href="https://www.naukri.com/code360/profile/77e1083a-d2de-44a4-acc3-2b85a97de591"
              className="text-themeBlue underline underline-offset-2"
            >
              Coding Ninjas
            </a>{" "}
            and{" "}
            <a
              href="https://leetcode.com/u/Bhushan-20/"
              className="text-themeBlue underline underline-offset-2"
            >
              LeetCode
            </a>
            . Additionally, I actively participate in coding contests to
            continually refine my skills.
          </p>
          <p className="mb-4">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="grid grid-cols-custom gap-x-3 overflow-hidden list-none">
            {skills &&
              skills.map((skill, i) => (
                <li key={i}>
                  <i className="text-themeBlue leading-3 mr-[7px]">▹</i>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
