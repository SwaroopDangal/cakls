import { Icons } from "../../assets";

export default function Strengths() {
  return (
    <section className="w-full  h-69.75 py-16 flex justify-center">
      <div className="max-w-7xl bg-gray w-full px-10 flex items-center justify-center">
        <div className="flex items-start  justify-center w-328 gap-27.5">
          {/* ITEM 1 */}
          <div className="flex  flex-col gap-5.5 w-59 h-41.25">
            <div className="w-14.5 h-12.5 bg-white   flex items-center justify-center">
              <img
                src={Icons.TruckIcon}
                alt="Fast Delivery"
                className="w-7.5 h-7.5"
              />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-base text-black">
                Fast Delivery on time
              </h3>
              <p className="text-sm text-gray-600">
                The delivery timeline may vary from 3 days to 36 days
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex  flex-col gap-5.5 w-67.5 h-46.75">
            <div className="w-14.5 h-12.5 bg-white flex items-center justify-center">
              <img
                src={Icons.CastIcon}
                alt="Perfect Design"
                className="w-7.5 h-7.5"
              />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-base text-black">
                Perfect home design studio
              </h3>
              <p className="text-sm text-gray-600">
                Our experienced assemblers will assemble your furniture on site
                within 24 hours
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex flex-col gap-6 w-62.75 h-38">
            <div className="w-14.5 h-12.5 bg-white flex items-center justify-center">
              <img src={Icons.BoxIcon} alt="Fabric" className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-base text-black">
                Natural polytherine fabric
              </h3>
              <p className="text-sm text-gray-600">
                We make a deliberate effort to study how people use spaces and
                what they do in them
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
