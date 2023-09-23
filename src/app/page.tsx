"use client";

import ContactForm from "@/components/ContactForm";
import { Icons } from "@/components/Icons";
import { Service, services } from "@/config/services";
import { heroCopy } from "@/utils/consts";
import { join } from "tw-merge";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="relative mx-auto mt-40 flex flex-col items-center">
        <div className="w-1/2 mx-auto inset-0 absolute flex justify-center items-center rounded-md bg-gradient-to-br from-[#001eff] to-[#d600ff] blur-xl"></div>
        <div className="w-1/2 p-10 relative flex flex-col text-center justify-center items-center space-y-8 rounded-lg bg-black">
          <div className="flex flex-col itesm-center space-y-2">
            <h1 className="text-5xl font-black">
              Digital Solutions for the Digital Age
            </h1>
            <p className="text-gray-400">{heroCopy}</p>
          </div>
        </div>
      </div>
      <section className="mt-48 flex flex-col items-center">
        <div className="w-1/3 flex flex-col items-center">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-4xl text-white font-bold">What we offer</h2>
            <p className="text-zinc-300 font-semibold">
              Our comprehensive suite of services is designed to empower your
              brand, drive online success, and deliver measurable results
            </p>
          </div>
          <div className="mt-8 flex space-x-4">
            {services.map((service: Service, idx: number) => {
              const Icon = Icons[service.icon || "code"];

              return (
                <div
                  key={idx}
                  className="w-[400px] p-5 flex flex-col items-start space-y-2 bg-[#141414] rounded-md"
                >
                  <div
                    className={`h-16 w-16 flex justify-center items-center rounded-full`}
                    style={{ backgroundColor: `${service.color}` }}
                  >
                    <Icon size={25} color="#001eff" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="font-bold">{service.name}</p>
                    <p className="text-zinc-400">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="my-48 flex flex-col items-center">
        <div className="w-1/2 flex flex-col items-center text-center space-y-2">
          <h2 className="text-4xl text-white font-bold">Contact</h2>
          <p className="text-zinc-300 font-semibold">
            Our comprehensive suite of services is designed to empower your
            brand, drive online success, and deliver measurable results
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
