import styled from "@emotion/styled";
import RenderCard from "../../commons/card";

const Wrapper = styled.div`
  padding: 0 90px;
  flex-direction: row;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
`;

const MainPage = () => {
  const cards = Array.from({ length: 6 }, (_, i) => i * 5 + 1);
  return <Wrapper>{cards.map((startIndex) => RenderCard(startIndex))}</Wrapper>;
};

export default MainPage;
