import {
  FaFacebookF,
  FaLinkedinIn, 
  FaBloggerB
} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si"
import {FiGithub} from 'react-icons/fi'

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "/blogs",
      icon: <FaBloggerB />,
      iconClass: "text-[#FC4F08]",
    },
    {
      id: 2,
      link: "https://github.com/punith77",
      icon: <FiGithub />,
      iconClass: "text-[#1C9CEA]",
    },
    {
      id: 3,
      link: "https://leetcode.com/punith77/",
      icon: <SiLeetcode />,
      iconClass: "text-[#f9a825]",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/%F0%9F%99%82-p-819883153/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
