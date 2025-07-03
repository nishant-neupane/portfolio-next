"use client";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "74f6f26b-7b3f-4e34-84f9-50fe489ca52b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setTimeout(() => {
      setResult("");
    }, 3000);
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-12 px-6 py-10 md:px-10 lg:px-40 bg-black text-white container"
    >
      <div className="relative z-[1] text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
          Get in touch with me
        </h1>
        <Image
          src="/theme_pattern.svg"
          alt=""
          height={250}
          width={250}
          className="absolute bottom-0 right-0 z-[-1] hidden md:block"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
        <div className="flex flex-col gap-5 flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="text-[#d8d8d8] text-lg leading-8 max-w-xl mx-auto lg:mx-0">
            I am currently available for project work. A developer with a strong
            skill set is ready to take on new challenges and contribute
            effectively to upcoming opportunities.
          </p>
          <div className="flex flex-col gap-4 text-[#d8d8d8] text-lg mx-auto lg:mx-0">
            <div className="flex items-center gap-3">
              <Image src="/mail_icon.svg" height={24} width={24} alt="" />
              <p>nishantneupane248@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/call_icon.svg" height={24} width={24} alt="" />
              <p>+977 9840033587</p>
            </div>
            <div className="flex items-center gap-3">
              <Image src="/location_icon.svg" height={24} width={24} alt="" />
              <p>Bhaktapur, Nepal</p>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-4 flex-1" onSubmit={onSubmit}>
          <label className="text-[#d8d8d8] text-lg">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="w-full h-14 px-4 rounded bg-[#32323c] text-[#a0a0a0] text-lg border-none"
          />
          <label className="text-[#d8d8d8] text-lg">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            className="w-full h-14 px-4 rounded bg-[#32323c] text-[#a0a0a0] text-lg border-none"
          />
          <label className="text-[#d8d8d8] text-lg">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            required
            className="w-full p-4 rounded bg-[#32323c] text-[#a0a0a0] text-lg border-none resize-none"
          ></textarea>
          {!result && (
            <button
              type="submit"
              className="text-white text-lg md:text-xl px-10 py-4 rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] hover:scale-105 transition-transform duration-300"
            >
              Submit now
            </button>
          )}
          {result && (
            <div className="mt-2 text-lg md:text-xl bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
