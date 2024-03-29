export const Contact = ({ contactRef }) => {
  return (
    <div
      ref={contactRef}
      className="sm:py-24 sm:px-20 py-16 px-4 flex flex-col gap-12 dark:bg-gray-950 bg-gray-50"
    >
      <div className=" flex flex-col justify-center gap-12">
        <div className=" flex  justify-center">
          <button className="text-center py-1 px-5 text-black rounded-xl bg-gray-200">
            Get in touch
          </button>
        </div>

        <h2 className=" flex justify-center text-xl text-gray-600 dark:text-gray-300 mt-4">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </h2>

        <div className=" flex flex-row  gap-5 justify-center">
          <img src="/email-icon.png" alt="" />
          <p className="sm:text-4xl text-lg  text-gray-900 dark:text-gray-50">
            reachsagarshah@gmail.com
          </p>
          <img src="/contact-icon.png" alt="" />
        </div>

        <div className=" flex flex-row  gap-5 justify-center">
          <img src="/phone-icon.png" alt="" />
          <p className="sm:text-4xl text-lg text-gray-900 dark:text-gray-50">
            +91 8980500565
          </p>
          <img src="/contact-icon.png" alt="" />
        </div>

        <div>
          <p className="text-base  flex justify-center dark:text-gray-300">
            You may also find me on these platforms!
          </p>
          <div className=" flex flex-row justify-center">
            <img src="giticon.png" alt="" />
            <img src="twittericon.png" alt="" />
            <img src="figmaicon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
