export default function Footer() {
  return (
    <footer className="w-full bg-[#F6F6F6] flex justify-center h-97.5 py-20">
      <div className="flex items-center justify-between max-w-6xl w-full px-24">
        {/* LEFT GROUP */}
        <div className="flex gap-24.75">
          {/* COMPANY */}
          <div className="flex flex-col gap-6.5">
            <h4 className="text-black text-[32px] font-bold leading-10 font-inter">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] leading-6">About</li>
              <li className="text-[16px] leading-6">Press</li>
              <li className="text-[16px] leading-6">Careers</li>
              <li className="text-[16px] leading-6">Contact</li>
            </ul>
          </div>

          {/* DEVELOPERS */}
          <div className="flex flex-col gap-6.5">
            <h4 className="text-black text-[32px] font-bold leading-10 font-inter">
              DEVELOPERS
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] leading-6">Documentation</li>
              <li className="text-[16px] leading-6">API Reference</li>
              <li className="text-[16px] leading-6">Changelog</li>
              <li className="text-[16px] leading-6">Status</li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="flex flex-col gap-6.5">
            <h4 className="text-black text-[32px] font-bold leading-10 font-inter">
              CONNECT
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-[16px] leading-6">Instagram</li>
              <li className="text-[16px] leading-6">LinkedIn</li>
              <li className="text-[16px] leading-6">Twitter</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="ml-auto flex  flex-col gap-7.75 max-w-65">
          {/* Logo */}
          <div className="flex items-center justify-end  gap-2.5">
            <div className="w-5 h-5 bg-red-400"></div>
            <span className="text-black text-[24px] font-normal">Cakls</span>
          </div>

          {/* Text */}
          <p className="text-[16px] text-gray-500 font-inter leading-6">
            They key difference between ordinary and special. No matter the
            season, our spaces are as nuanced as the lifestyles they reflect,
            don't just dream it
          </p>
        </div>
      </div>
    </footer>
  );
}
