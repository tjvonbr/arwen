"use client";

import { useState } from "react";

interface Inquiry {
  name: string;
  email: string;
  request: string;
}

export default function ContactForm() {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    request: "",
  });

  console.log(inquiry);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let formData = { ...inquiry };
    formData[e.target.name as keyof Inquiry] = e.target.value;
    setInquiry(formData);
  }

  function handleSubmit() {}

  return (
    <form className="w-3/4 mt-8 flex flex-col items-center space-y-2 text-sm">
      <div className="w-full flex gap-2">
        <input
          className="w-1/2 px-3 py-2 rounded-md bg-[#141414]"
          name="name"
          type="text"
          placeholder="Name"
          value={inquiry.name}
          onChange={handleChange}
        />
        <input
          className="w-1/2 px-3 py-2 rounded-md bg-[#141414]"
          name="email"
          type="email"
          placeholder="Email"
          value={inquiry.email}
          onChange={handleChange}
        />
      </div>
      <textarea
        className="w-full px-3 py-2 rounded-md bg-[#141414]"
        name="inquiry"
        id="request"
        placeholder="How can we help?"
        cols={30}
        rows={10}
      ></textarea>
      <button className="mt-6 h-10 w-1/2 bg-indigo-700 hover:bg-indigo-600 rounded-md">
        Submit
      </button>
    </form>
  );
}
