import { Images, Icons } from "../../assets";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "New Trendy Armchair",
      price: "$35.20",
      image: Images.Rectangle19Image,
    },
    {
      id: 2,
      name: "New Matchspel Armchair",
      price: "$35.20",
      image: Images.Rectangle20Image,
    },
    {
      id: 3,
      name: "New Utespelare Armchair",
      price: "$35.20",
      image: Images.Rectangle21Image,
    },
    {
      id: 4,
      name: "New Trotten Armchair",
      price: "$35.20",
      image: Images.Rectangle22Image,
    },
    {
      id: 5,
      name: "New Markus Armchair",
      price: "$35.20",
      image: Images.Rectangle23Image,
    },
    {
      id: 6,
      name: "New Loberget Armchair",
      price: "$35.20",
      image: Images.Rectangle24Image,
    },
  ];

  return (
    <section className="w-full bg-white py-30  flex justify-center">
      <div className="max-w-7xl w-full px-10 mb-50 flex flex-col  gap-19.25">
        {/* TITLE  */}
        <h2 className="text-[48px] font-bold text-center text-black">
          Top Sale Products
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-x-1 gap-y-19.25">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center gap-6">
              {/* IMAGE */}
              <div className="w-full h-104.75 rounded-2xl overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NAME */}
              <h4 className="font-bold text-[20px] text-black">
                {product.name}
              </h4>

              {/* STARS */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={Icons.StarIcon}
                    alt="star"
                    className="w-4 h-4"
                  />
                ))}
              </div>

              {/* PRICE */}
              <p className="font-bold text-[18px] text-black">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
