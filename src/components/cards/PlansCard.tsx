import { FaCheckSquare } from "react-icons/fa";

const PlansCard = ({ number }: { number: number }) => {
  return (
    <div
      className={`w-80 md:w-full p-3 md:p-6  ${
        number % 2 == 0
          ? "bg-gradient-to-r from-gray-50 to-[#E0EFFF]"
          : "bg-gray-50"
      } border border-[#E0EFFF] rounded-lg shadow-sm hover:shadow-lg cursor-pointer`}
    >
      <p className="text-xl font-bold">Basic</p>
      <p className="mb-3">
        Lorem ipsum dolor sit amet consectetur. Tellus eu vitae tellus accumsan.
      </p>
      <p>
        <span className="text-2xl font-bold">${number},000</span>/month
      </p>
      <button className="btn1 my-3">Choose this plan</button>
      <p className="text-lg font-semibold">Features-</p>
      <ul>
        <li className="flex items-center gap-2">
          <FaCheckSquare /> Feature 1
        </li>
        <li className="flex items-center gap-2">
          <FaCheckSquare /> Feature 2
        </li>
        <li className="flex items-center gap-2">
          <FaCheckSquare /> Feature 3
        </li>
        {number % 2 === 0 && (
          <>
            <li className="flex items-center gap-2">
              <FaCheckSquare /> Feature 4
            </li>
            <li className="flex items-center gap-2">
              <FaCheckSquare /> Feature 5
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default PlansCard;
