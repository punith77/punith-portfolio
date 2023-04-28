import { MdOutlinePhoneIphone, MdOutlineMailOutline } from "react-icons/md";
export const addressData = [
  {
    id: "01",
    icon: <MdOutlinePhoneIphone className="text-4xl" />,
    title: "Phone ",
    info: (
      <>
        <p>
          <a href="tel:+18255611617" className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            Call or text me @
          </a>
        </p>
        <p>
          <a href="tel:+18255611617" className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            +1 825-561-1617
          </a>
        </p>
      </>
    ),
    bg: "#FCF4FF",
  },
  {
    id: "02",
    icon: <MdOutlineMailOutline className="text-4xl" />,
    title: "Email ",
    info: (
      <>
        <p>
          <a href="mailto:info@punith.ca" className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            Send a Email
          </a>
        </p>

        <p>
          <a href="mailto:info@punith.ca" className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
            mailto:info@punith.ca
          </a>
        </p>
      </>
    ),
    bg: "#EEFBFF",
  },
  {
    id: "03",
    icon: "/images/contact/map 1.png",
    title: "Address ",
    info: (
      <>
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">Maount View, Oval</p>
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">Road, New York, USA</p>
      </>
    ),
    bg: "#F2F4FF",
  },
];
