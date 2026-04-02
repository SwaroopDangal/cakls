import { Images, Icons } from "../../assets";

export default function Benefits() {
  return (
    <section className="w-full h-203.5 flex justify-center bg-gray py-25px">
      <div className="flex max-w-6xl w-full items-center gap-15px px-24">
        {/* LEFT */}
        <div className="flex flex-col justify-center gap-11.5 max-w-203.5 h-126.5">
          {/* Heading */}
          <h2 className="text-black text-4xl font-bold font-inter leading-17">
            Our Services & Benefits
          </h2>

          {/* Description */}
          <p className="text-black text-2xl font-normal  leading-8.5">
            We are working on this commercial service since 2000. Almost 21 of
            out business service. And we almost works with 100k+ organisations
            and top related furniture and event service in USA.
          </p>

          {/* Features */}
          <div className="flex gap-23.75">
            <ul className="flex flex-col gap-2 list-disc pl-4 text-black text-2xl  leading-8.5">
              <li>Interior Strategy</li>
              <li>Update Designs</li>
              <li>Event Decoration</li>
            </ul>

            <ul className="flex flex-col gap-2 list-disc pl-4 text-black text-2xl font-inter leading-8.5">
              <li>21 Years Experience</li>
              <li>Creative Designer</li>
              <li>Interior Architecture</li>
            </ul>
          </div>

          {/* Button */}
          <button className="flex items-center justify-center h-15.5 gap-2.5 px-7 py-4 bg-orange text-white  w-49.75">
            <img src={Icons.PlayIcon} alt="play" className="w-6 h-6" />
            <span className="text-white text-xl font-normal font-inter leading-8">
              Watch Intro
            </span>
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-140 h-161.75 shrink-0">
          <img
            src={Images.Rectangle26Image}
            alt="right"
            className="w-full h-full object-cover rounded-tl-3xl"
          />
        </div>
      </div>
    </section>
  );
}
