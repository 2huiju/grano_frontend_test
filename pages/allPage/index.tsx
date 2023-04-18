import CardContainer from "../../src/components/units/cardContainer/cardContainer";

const AllPage = () => {
  const cards = Array.from({ length: 6 }, (_, i) => i * 5 + 1);

  return <CardContainer cards={cards}></CardContainer>;
};

export default AllPage;
