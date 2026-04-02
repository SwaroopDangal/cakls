import { Images } from "../../assets";

export default function Sponsors() {
  const sponsors = [
    { id: 1, name: "Microsoft", logo: Images.MicrosoftImage },
    { id: 2, name: "Decor", logo: Images.DecorImage },
    { id: 3, name: "Urban Interior", logo: Images.UrbanInteriorImage },
    { id: 4, name: "Hooker Furnishings", logo: Images.HookerFurnishingsImage },
    { id: 5, name: "Bassett", logo: Images.BassettImage },
  ];

  return (
    <section className="w-full flex justify-center items-center h-50 px-24 py-16 bg-white">
      <div className="flex justify-center items-center gap-12.75 max-w-6xl">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className={` ${sponsor.id === 1 ? "w-50 h-50" : "w-38.75 h-15.5"} opacity-0.4`}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className=" object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
