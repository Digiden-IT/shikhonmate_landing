import { PlansCardProps } from "@/types/props.type";

const PlansCard = ({ plansData }: { plansData: PlansCardProps }) => {
  return (
    <div
      className={`w-80 md:w-full p-3 md:p-7  ${
        plansData.popular ? "bg-[#065A82] text-gray-50" : "bg-gray-50"
      } border border-[#E0EFFF] rounded-lg shadow-sm hover:shadow-md cursor-pointer relative`}
    >
      {plansData.popular && (
        <div className="absolute top-2 right-2 bg-[#E0EFFF] text-[#065A82] p-1 rounded-md text-xs">
          🔥 Popular
        </div>
      )}
      <h3>{plansData.name}</h3>
      <p className="my-3">
        <span className="text-5xl font-bold">${plansData.price}</span>/ month
      </p>
      <p className="mb-4">{plansData.details}</p>
      <ul>
        {plansData.features.map((feature, index) => (
          <li key={index} className="mb-2 text-sm">
            ✔ {feature}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-2 mt-4 ${
          plansData.popular
            ? "bg-[#E0EFFF] text-[#065A82]"
            : "bg-[#065A82] text-gray-50"
        } rounded-lg`}
      >
        Get Started {plansData.popular && "⇾"}
      </button>
    </div>
  );
};

export default PlansCard;
