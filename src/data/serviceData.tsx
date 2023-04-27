import {TbBrandGolang, TbBrandReactNative} from 'react-icons/tb'
import {FaNodeJs, FaReact} from 'react-icons/fa'
import {AiOutlineCloudServer} from 'react-icons/ai'
import {SiTerraform} from 'react-icons/si'
export const servicesData = [
  {
    id: "1",
    icon: <TbBrandGolang className='text-7xl'/>,
    title: <span>Backed Development in <span className="whitespace-nowrap">Golang</span></span>,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#D566FF",
    bg: "#FCF4FF",
  },
  {
    id: "2",
    icon: <FaNodeJs className='text-7xl'/>,
    title: <span>Backed Development in <span className="whitespace-nowrap">NodeJS</span></span>,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#DDA10C",
    bg: "#FEFAF0",
  },
  {
    id: "3",
    icon: <FaReact className='text-7xl'/>,
    title: "Front end Development",
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#8774FF",
    bg: "#FCF4FF",
  },
  {
    id: "4",
    icon: <TbBrandReactNative className='text-7xl'/>,
    title: <span>Mobile App Development <span className="whitespace-nowrap">using React Native</span></span>,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#FF6080",
    bg: "#FFF4F4",
  },
  {
    id: "5",
    icon: <AiOutlineCloudServer className='text-7xl'/>,
    title: <span>Cloud development <span className="whitespace-nowrap">using AWS and GCP</span></span>,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#FF75D8",
    bg: "#FFF0F8",
  },
  {
    id: "6",
    icon: <SiTerraform className='text-7xl'/>,
    title: <span>Infrastructure as code <span className="whitespace-nowrap">using Terraform</span></span>,
    des: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#269FFF",
    bg: "#F3FAFF",
  },
];
