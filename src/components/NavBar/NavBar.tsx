const navLinks = [
  "Products",
  "Why Us",
  "Features",
  "Blog",
  "Pricing",
  "Gallery",
];

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-3 bg-white shadow-sm fixed top-0 left-0 z-50 h-21">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="relative">
          <div className="w-5.5 h-5.5 bg-[#F07171]"></div>
        </div>
        <span className="text-black text-2xl font-normal font-Inter leading-8.5">
          Cakls
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex gap-12.75 items-center">
        {navLinks.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase().replace(" ", "-")}`}
            className="text-black font-Inter text-sm font-normal leading-5.5"
          >
            {label}
          </a>
        ))}
      </div>

      {/* buttons */}
      <div className="flex gap-8.25 items-center">
        <button className="text-sm text-black font-normal font-Inter leading-5.5">
          Log in
        </button>
        <button className="flex h-10.5 w-20.75  text-white font-Inter text-sm font-normal leading-5.5 justify-center items-center gap-2.5 px-3.5 py-2.5 bg-[#F07171]">
          Register
        </button>
      </div>
    </nav>
  );
}
