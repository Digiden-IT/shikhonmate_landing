import Image from "next/image";

const Contact = () => {
  return (
    <div className="pt-12 mb-20" id="contact">
      <h2 className="text-2xl text-center font-semibold my-8">
        Have Any Query? Contact us
      </h2>
      <div className="grid grid-cols-1 md:gap-28 md:grid-cols-2 dark:bg-gray-100 dark:text-gray-800">
        <div className="flex flex-col justify-between relative">
          <Image
            src="https://synetbd.com/public/assets/front-end/png/contact.png"
            alt=""
            className="p-6 h-52 md:h-64 hidden md:block"
            fill
          />
        </div>
        <form className="space-y-6 px-6 md:px-0">
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded dark:bg-gray-100"
          />

          <input
            id="email"
            type="email"
            placeholder="Your Email / Mobile Number"
            className="w-full p-3 rounded dark:bg-gray-100"
          />

          <textarea
            id="message"
            rows={3}
            placeholder="Your Message"
            className="w-full p-3 rounded dark:bg-gray-100"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 bg-[#065A82] text-gray-50 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
