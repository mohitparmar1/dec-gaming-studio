const ContactUs = () => {
  return (
    <div id="contact" className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
          Contact Us
        </h2>
        <form className="space-y-6 lg:space-y-0 lg:flex lg:flex-wrap lg:gap-6">
          <div className="flex flex-col w-full lg:flex-1">
            <label
              className="mb-2 text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col w-full lg:flex-1">
            <label
              className="mb-2 text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              className="mb-2 text-sm font-medium text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"
              id="message"
              name="message"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="w-full">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
