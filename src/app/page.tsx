import { Cable, Code2, Terminal } from "lucide-react";
import { heroCopy } from "@/utils/consts";

export default function Home() {
  return (
    <main className="min-h-screen mb-24 flex flex-col items-center">
      <div className="relative mx-auto mt-40 flex flex-col items-center">
        <div className="hidden w-1/2 mx-auto inset-0 absolute sm:flex justify-center items-center rounded-md bg-gradient-to-br from-[#001eff] to-[#d600ff] blur-xl"></div>
        <div className="w-1/2 p-10 relative sm:flex flex-col text-center justify-center items-center space-y-8 rounded-lg bg-background">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-5xl text-center text-foreground font-black">
              Digital Solutions for the Digital Age
            </h1>
            <p className="text-sm text-foreground-secondary">{heroCopy}</p>
          </div>
        </div>
      </div>
      <section className="mt-48 flex flex-col items-center">
        <div className="w-1/3 flex flex-col items-center">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-4xl text-foreground font-bold">
              What we offer
            </h2>
            <p className="text-foreground-secondary font-semibold">
              Our comprehensive suite of services is designed to empower your
              brand, drive online success, and deliver measurable results
            </p>
          </div>
          <div className="mt-8 flex space-x-4">
            <div className="w-[400px] p-5 flex flex-col items-start space-y-2 border-[0.5px] border-border rounded-md">
              <div className="h-16 w-16 flex bg-blue-950 justify-center items-center rounded-full">
                <Terminal size={25} color="#3b82f6" />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-foreground font-bold">
                  Web Design and Development
                </p>
                <p className="text-foreground-secondary">
                  We can redesign your landing page, build you a full-stack
                  application, and anything in-between
                </p>
              </div>
            </div>
            <div className="w-[400px] p-5 flex flex-col items-start space-y-2 border-[0.5px] border-border rounded-md">
              <div
                className={`h-16 w-16 flex justify-center items-center bg-purple-950 rounded-full`}
              >
                <Code2 size={25} color="#a855f7" />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-foreground font-bold">
                  Low-code/No-code Solutions
                </p>
                <p className="text-foreground-secondary">
                  Don&apos;t want to worry about maintaining your codebase? We
                  provide low-code/no-code tool consulting
                </p>
              </div>
            </div>
            <div className="w-[400px] p-5 flex flex-col items-start space-y-2 border-[0.5px] border-border rounded-md">
              <div className="h-16 w-16 flex justify-center items-center rounded-full bg-pink-950">
                <Cable size={25} color="#ec4899" />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-foreground font-bold">
                  Third-party API Integration
                </p>
                <p className="text-foreground-secondary">
                  Programatically send emails with Mailchimp or create a
                  Slackbot that connects to your project management tooling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
