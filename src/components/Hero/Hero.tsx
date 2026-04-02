import { Icons, Images } from "../../assets";

export default function Hero() {
  return (
    <section className="w-full h-153.25 flex gap-31.75 items-center justify-center  py-12.5">
      <div className="px-10 max-w-7xl w-full flex items-start justify-between gap-31.75">
        {/* LEFT */}
        <div className="flex flex-col gap-11.5 max-w-133.75  h-128.25 justify-center">
          <h1 className="text-[64px] font-bold leading-18 ">
            Refining the tone <br /> of your space
          </h1>

          <p className="text-[24px] text-black leading-8.5">
            A chair with a high back will provide optimum comfort...
          </p>

          <button className="flex h-15.5 w-51.5 items-center justify-center gap-2.5 bg-orange text-white">
            Explore now
            <img src={Icons.RightArrowIcon} alt="arrow icon" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-138.25 h-128.25 overflow-hidden shrink-0 rounded-t-[100px]">
          <img src={Images.Rectangle12Image} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
