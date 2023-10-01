import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { SiTerraform, SiPython } from "react-icons/si";
export const servicesData = [
  {
    id: "1",
    icon: <SiPython className="text-7xl" />,
    title: (
      <span>
        Backed Development in <span className="whitespace-nowrap">Python</span>
      </span>
    ),
    des: "Design and developed REST api's using Fastapi",
    color: "#D566FF",
    bg: "#FCF4FF",
  },
  {
    id: "2",
    icon: <FaNodeJs className="text-7xl" />,
    title: (
      <span>
        Backed Development in <span className="whitespace-nowrap">NodeJS</span>
      </span>
    ),
    des: "Developed apis and served them on different transports like REST, Real-Time using Web sockets, WebRTC",
    color: "#DDA10C",
    bg: "#FEFAF0",
  },
  {
    id: "3",
    icon: <FaReact className="text-7xl" />,
    title: "Front end Development",
    des: "Developed Single page and Server rendered applications using React and Redux",
    color: "#8774FF",
    bg: "#FCF4FF",
  },
  {
    id: "4",
    icon: <TbBrandReactNative className="text-7xl" />,
    title: (
      <span>
        Mobile App Development{" "}
        <span className="whitespace-nowrap">using React Native</span>
      </span>
    ),
    des: "Developed Mobile applications using React native",
    color: "#FF6080",
    bg: "#FFF4F4",
  },
  {
    id: "5",
    icon: <AiOutlineCloudServer className="text-7xl" />,
    title: (
      <span>
        Cloud development{" "}
        <span className="whitespace-nowrap">using AWS and GCP</span>
      </span>
    ),
    des: "Expert in developing and deploying applications to AWS and GCP",
    color: "#FF75D8",
    bg: "#FFF0F8",
  },
  {
    id: "6",
    icon: <SiTerraform className="text-7xl" />,
    title: (
      <span>
        Infrastructure as code{" "}
        <span className="whitespace-nowrap">using Terraform</span>
      </span>
    ),
    des: "Maintained applications infrastructure as code using terraform",
    color: "#269FFF",
    bg: "#F3FAFF",
  },
];
