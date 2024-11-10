import Question from '../../assets/Questions.png';

const Questions = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-white px-8 py-10 rounded-lg shadow-lg max-w-8xl mx-auto">
      {/* Text Section */}
      <div className="flex-1 md:pr-8 text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">Complex Questions?</h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
          Request for a personalized budget for your legal problem. We will
          send you a couple of options in 24 hours. You can have a free consult if you are our first customer.
        </p>
        
        {/* Call-to-Action Button */}
        <button className="bg-blue-800 text-white py-3 px-6 md:py-4 md:px-8 rounded-md flex items-center justify-center mx-auto md:mx-0 font-semibold text-base md:text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 mr-2">
            <path d="M21 8.25V6a3 3 0 00-3-3H6a3 3 0 00-3 3v2.25M3 8.25h18M3 8.25V18a3 3 0 003 3h12a3 3 0 003-3V8.25M3 8.25l9 5.625L21 8.25" />
          </svg>
          Call now
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 w-full md:w-auto md:max-w-xs">
        <img
          src={Question} // Replace with your image URL
          alt="Person sitting by window"
          className="rounded-md object-cover w-full md:w-auto"
        />
      </div>
    </section>
  );
};

export default Questions;
