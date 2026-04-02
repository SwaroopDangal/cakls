import { Images } from "../../assets";

export default function About() {
  const stats = [
    { number: "750+", label: "Furniture or home equipment" },
    { number: "150+", label: "Fresh interior design theme" },
    { number: "850+", label: "Happy client more for this" },
  ];

  return (
    <section className="w-full h-156.75 bg-white py-15 flex justify-center">
      <div className="max-w-7xl w-full px-10 flex items-center gap-11.5">
        {/* IMAGE */}
        <div className="w-138.25 h-126.75 rounded-br-3xl overflow-hidden shrink-0">
          <img
            src={Images.Rectangle17Image}
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-12 h-90.25 max-w-182.75">
          <h2 className="text-[48px] font-bold text-black leading-[68px">
            Cozy is a minimalist
          </h2>

          <p className="text-[20px] leading-8">
            For create z cozy room, of course, the overall feel of the room must
            be warm. Therefore, the use of beige, pastel or brown colors will
            really help to create this
          </p>

          {/* STATS */}
          <div className="flex gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-4.25">
                <h4 className="font-bold text-3xl text-black">{stat.number}</h4>
                <p className="text-[14px] opacity-0.4 w-29.5 text-gray-600 leading-5.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
