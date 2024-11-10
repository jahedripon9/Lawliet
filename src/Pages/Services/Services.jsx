import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faBuilding, faComputer, faGavel } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    color: "text-blue-500",
    icon: faGavel,
    title: "Environmental Law",
    description: "Environmental legal issues might occur since the planned business activities are designed.",
  },
  {
    color: "text-blue-500",
    icon: faBuilding,
    title: "Corporate and Commercial",
    description: "We provide a complete range of services for the continuity of your business activities.",
  },
  {
    color: "text-blue-500",
    icon: faComputer,
    title: "Information and Technology",
    description: "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty.",
  },
  {
    color: "text-blue-500",
    icon: faLeaf,
    title: "Other Services",
    description: "In dealing with disruptive economic and legal challenges, our firm also provides various legal services.",
  },
];

const ServiceCard = ({ service }) => (
  <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
    <div className={`w-12 h-12 flex justify-center items-center rounded-full mb-4 ${service.color} bg-blue-100`}>
      <FontAwesomeIcon icon={service.icon} className="text-xl" />
    </div>
    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
    <p className="text-gray-600 text-sm">{service.description}</p>
  </div>
);

const LegalizationHelp = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side with Heading and Text */}
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Why do we help with legalization?</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.
          </p>
        </div>
        
        {/* Right Side with Service Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ServiceCard service={service} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalizationHelp;
