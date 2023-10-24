import { Link } from "react-router-dom";
import { footerLinks } from "../constants";
import Logo from "./Logo";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" bg-darker_violet text-gray grid place-content-evenly max-sm:place-items-center py-10 gap-6 max-sm:text-center md:grid-cols-3 place-items-center">
      <Logo />
      <div className=" md:grid grid-flow-col gap-14 ">
        {footerLinks.map((footerlink, index) => (
          <div key={index} className="">
            <p className="font-bold my-3 text-md">{footerlink.text}</p>
            {footerlink.children.map((link) => (
              <ul className="" key={link.item.ref}>
                <Link href={link.item.ref}>
                  <li className="text-sm py-1 hover:text-cyan ">
                    {link.item.link}
                  </li>
                </Link>
              </ul>
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-5 text-emerald-500">
        <FaFacebook size={25} className="hover:text-cyan" />
        <FaTwitter size={25} className="hover:text-cyan" />
        <FaPinterest size={25} className="hover:text-cyan" />
        <FaTwitter size={25} className="hover:text-cyan" />
      </div>
    </footer>
  );
};

export default Footer;
