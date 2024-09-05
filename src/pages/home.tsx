import Icons from "@/components/molecules/icons";
import { RegisterButton } from "@/components/organisms/nav-bar";
import FAQ from "@/components/ui/FAQ";
import Introduction from "@/components/ui/introduction";
// import introduction from "@/components/ui/introduction";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <h2 className="flex flex-col mx-auto text-lg italic font-extrabold text-center sm:text-2xl md:text-3xl sm:text-right max-w-fit sm:max-w-full">
          Igniting a Revolution in HR Innovation
      <Icons.Star className="" />
          <Icons.Line className="right-0 self-end w-32 mx-auto xs:mx-0 sm:w-44 md:w-52" />
        </h2>
      </div>
      <div className="grid gap-y-8 mt-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl font-clashdisplay">
            getlinked Tech
            <br /> Hackathon <span className="text-primary-1">1.0</span>
          </h1>
          <p className="mx-auto mt-3 text-sm md:text-base max-w-96 lg:mx-0">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <RegisterButton className="mt-7 "/>
        </div>
        <div className="">
          <img src={"images/hero.png"} className="w-full max-w-lg mx-auto" />
        </div>
      </div>
      <FAQ/>
      <Introduction/>
    </div>
  );
}
