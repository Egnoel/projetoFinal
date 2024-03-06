import { UserButton } from "@clerk/nextjs";
import Hero from "./_components/Hero";


export default function Home() {
  return (
      <div className="flex flex-col justify-center w-full h-screen gap-6 bg-slate-600">
        <Hero />
        <Hero />
        <Hero />
      </div>
  );
}
