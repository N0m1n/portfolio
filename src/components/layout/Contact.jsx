export const Contact = () => {
  return (
    <div className="py-20 px-14 border flex flex-col items-center gap-12  bg-gray-50">
      <div className=" flex flex-col justify-center gap-12">
        <div className=" flex  justify-center">
          <button className="text-center py-1 px-5 text-black rounded-xl bg-gray-200">
            Get in touch
          </button>
        </div>

        <h2 className=" flex justify-center text-xl text-gray-600 mt-4">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </h2>

        <div className=" flex flex-row  gap-5 justify-center">
          <img src="/email-icon.png" alt="" />
          <p className="text-4xl  text-gray-900">reachsagarshah@gmail.com</p>
          <img src="/contact-icon.png" alt="" />
        </div>

        <div className=" flex flex-row  gap-5 justify-center">
          <img src="/phone-icon.png" alt="" />
          <p className="text-4xl text-gray-900">+91 8980500565</p>
          <img src="/contact-icon.png" alt="" />
        </div>

        <div>
          <p className="text-base  flex justify-center">
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
