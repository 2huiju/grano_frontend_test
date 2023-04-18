import CardContainer from "../../src/components/units/cardContainer/cardContainer";

const CollectionsPage = () => {
  const cards = Array.from({ length: 6 }, (_, i) => 26 - i * 5);

  return <CardContainer cards={cards}></CardContainer>;
};

export default CollectionsPage;
