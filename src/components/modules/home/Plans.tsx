import PlansCard from "../../../components/cards/PlansCard";

const Plans = () => {
  const plans = [
    {
      id: 1,
      popular: false,
      name: "Basic",
      details: "Best for Small Teams or Individuals.",
      price: 5,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 2,
      popular: true,
      name: "Enterprise",
      details: "Ultimate for Enterprise Solutions.",
      price: 49,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      id: 3,
      popular: false,
      name: "Professional",
      details: "Ideal for Growing Companies.",
      price: 19,
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];
  return (
    <div className="pt-12">
      <h2 className="text-2xl text-center font-semibold my-8">Our Plans</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
        {plans.map((item) => (
          <PlansCard key={item.id} plansData={item} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
