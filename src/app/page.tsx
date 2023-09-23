import { Cable, Code2, Terminal } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { heroCopy } from "@/utils/consts";

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
            <div className="w-[400px] p-5 flex flex-col items-start space-y-2 bg-[#141414] rounded-md">
              <div className="h-16 w-16 flex bg-blue-950 justify-center items-center rounded-full">
                <Terminal size={25} color="#3b82f6" />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-bold">Web Design and Development</p>
                <p className="text-zinc-400">
                  We can redesign your landing page, build you a full-stack
                  application, and anything in-between
                </p>
              </div>
            </div>
            <div className="w-[400px] p-5 flex flex-col items-start space-y-2 bg-[#141414] rounded-md">
              <div
                className={`h-16 w-16 flex justify-center items-center bg-purple-950 rounded-full`}
              >
                <Code2 size={25} color="#a855f7" />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-bold">Low-code/No-code Solutions</p>
                <p className="text-zinc-400">
                  Don&apos;t want to worry about maintaining your codebase? We
                  provide low-code/no-code tool consulting
                </p>
              </div>
            </div>
            <div className="w-[400px] p-5 flex flex-col items-start space-y-2 bg-[#141414] rounded-md">
              <div className="h-16 w-16 flex justify-center items-center rounded-full bg-pink-950">
                <Cable size={25} color="#ec4899" />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-bold">Third-party API Integration</p>
                <p className="text-zinc-400">
                  Programatically send emails with Mailchimp or create a
                  Slackbot that connects to your project management tooling
                </p>
              </div>
            </div>
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
