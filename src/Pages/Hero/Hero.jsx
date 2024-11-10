import hero from "../../assets/Untitled-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDribbble,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const socialLinks = [
  { icon: faTwitter, href: "#" },
  { icon: faDribbble, href: "#" },
  { icon: faBehance, href: "#" },
];

const infoList = [
  { label: "Born in", value: "Bangladesh" },
  { label: "Experience", value: "7+ Years" },
  { label: "Date of Birth", value: "21 June 1994" },
];

const ProfileKeyInfo = () => (
  <div>
    {infoList.map((info, i) => (
      <p className="text-2xl mb-1" key={i}>
        <span className="opacity-50 mr-2">{info.label}</span>
        <strong>{info.value}</strong>
      </p>
    ))}
  </div>
);

ProfileKeyInfo.propTypes = {
  data: PropTypes.array.isRequired,
};

const SocialLinks = ({ links }) => (
  <ul className="inline-flex mt-6">
    {links.map((link, i) => (
      <li className="inline-block mr-5" key={i}>
        <a
          href={link.href}
          className="text-2xl opacity-70 hover:opacity-100 duration-300"
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  links: PropTypes.array.isRequired,
};

const Hero = () => {
  return (
    <section className="ezy__header10 light pt-10 md:pt-14 bg-white text-indigo-900">
      <div className="container px-4 mx-auto relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 lg:order-2 text-center lg:text-start relative">
            <img src={hero} alt="" className="lg:-mb-24 w-full" />
          </div>
          <div className="col-span-12 lg:col-span-6 lg:pl-6 xl:pl-12 ezy__header10-content">
            <div className="h-full flex flex-col justify-center">
             
              <h2 className="text-3xl font-bold md:text-[70px] mb-6">
                Your Solution
              </h2>
              <h2 className="text-3xl font-bold md:text-[60px] mb-6">
                Legal Consultacy
              </h2>
              <p className="text-xl leading-normal opacity-75">
                We are here to help you take care of your legality with the best
                service especially for you.
              </p>

              <div className="mt-12 lg:ml-12 p-4 md:px-12 lg:py-6 border-l border-slate-400">
                <ProfileKeyInfo data={infoList} />
                <SocialLinks links={socialLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-24 bg-white dark:bg-slate-800 hidden lg:block"></div>
    </section>
  );
};

export default Hero;
