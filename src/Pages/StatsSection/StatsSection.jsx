const StatsSection = () => {
  return (
    <section
      className="bg-blue-900 py-16 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('https://your-image-url.com/contour-lines.png')", // Replace with your contour lines image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto text-center px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Some count that matters
        </h2>
        <p className="text-lg opacity-80 mb-10">
          Our achievement in the journey depicted in numbers
        </p>

        {/* Statistics */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-12">
          {/* Clients */}
          <div className="text-center">
            <span className="text-4xl font-bold">30</span>
            <p className="text-lg opacity-80 mt-2">Clients</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

          {/* Business Legalities */}
          <div className="text-center">
            <span className="text-4xl font-bold">300+</span>
            <p className="text-lg opacity-80 mt-2">Taken business legalities</p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-12 bg-gray-300"></div>

          {/* Years of Journey */}
          <div className="text-center">
            <span className="text-4xl font-bold">8</span>
            <p className="text-lg opacity-80 mt-2">Years of Journey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
