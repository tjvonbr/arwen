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
    </main>
  );
}
