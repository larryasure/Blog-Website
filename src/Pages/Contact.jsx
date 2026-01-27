import React, { useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import contact from "../assets/contact.png";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [phone, setPhone] = React.useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.loading("... sending message ", { id: "send" });

    emailjs.sendForm(
      "service_drz97ar",
      "__ejs-test-mail-service__",
      formRef.current,
      "GnmuxVj7d_pGrrF_k",
    ).then((result) => {
      toast.success("Message sent successfully", { id: "send" })
      formRef.current.reset()
      setPhone("")
    }, (error) => {
      toast.error("Failed to send message, Try again", {id: "send"})
    })
  };
  return (
    <>
      <div className="min-h-screen flex py-15 justify-between px-8 bg-[#f1f1f1]">
        <div className="flex-1">
          <div className="flex flex-col space-y-3">
            <h1 className="text-4xl md:text-5xl font-semibold">Get In Touch</h1>
            <p className="tracking-widest">
              Our Friendly will like to hear from you.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="my-7 flex flex-col space-y-4"
          >
            <div className="flex items-center  gap-10">
              <div className="flex flex-col space-y-1 mt-2">
                <label
                  htmlFor="firstName"
                  className="font-bold text-lg tracking-wide"
                >
                  Firstname
                </label>
                <input
                  name="first_name"
                  type="text"
                  className="border border-gray-300 px-4  h-10 rounded-lg outline-0  placeholder:text-black/60   "
                  placeholder=" First Name..."
                />
              </div>

              <div className="flex flex-col space-y-1 mt-2">
                <label
                  htmlFor="Lastname"
                  className="font-bold text-lg tracking-wide"
                >
                  Lastname
                </label>
                <input
                  name="last_name"
                  type="text"
                  className="border border-gray-300 px-4  h-10 rounded-lg outline-0 animate-pulse  placeholder:text-black/60   "
                  placeholder="Last Name..."
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1 mt-2">
              <label
                htmlFor="email"
                className="font-bold text-lg tracking-wide"
              >
                Email
              </label>
              <input
                name="email"
                autoComplete="email"
                type="email"
                className="border border-gray-300 px-4 w-1/2  h-10 rounded-lg outline-0  placeholder:text-black/60   "
                placeholder="yourcompany@..."
              />
            </div>

            <div className="flex flex-col space-y-1 mt-2">
              <label
                className="font-bold text-lg tracking-wide"
                htmlFor="phone number"
              >
                Phone Number
              </label>
              <PhoneInput
                country="ng"
                value={phone}
                onChange={setPhone}
                inputClass="!w-1/2 !py-5 !px-12 !rounded-lg"
                enableAreaCodes={true}
              ></PhoneInput>
            </div>
            <div className="flex flex-col space-y-1 mt-2 ">
              <label
                htmlFor="textarea"
                className="font-bold tracking-wide text-lg"
              >
                Tell us Something!
              </label>
              <textarea
                className="border border-gray-300 px-4 w-2/3  h-50 rounded-lg outline-0  placeholder:text-black/60   "
                name="message"
              ></textarea>
            </div>

            <div className="flex space-x-4 mt-2 ">
              <input
                type="checkbox"
                name="checkbox"
                required
                id="policy"
                className="block"
              />
              <label htmlFor="policy">
                You agree to our Friendly
                <a href="" className="underline ">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              className="bg-blue-600 py-2.5 px-4  self-start text-white rounded-2xl"
              type="submit"
            >
              Get in Touch
            </button>
          </form>
        </div>
        <div className="flex-1 ">
          <div className="w-full ">
            <img src={contact} alt="contact us" className="rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
}
