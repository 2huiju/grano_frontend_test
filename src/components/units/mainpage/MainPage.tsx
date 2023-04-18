import styled from "@emotion/styled";
import RenderCard from "../NFTCard";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  padding: 0 90px;
  flex-direction: row;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;

  @media ${breakPoints.mobile} {
    padding: 0;
    margin-top: 30px;
    justify-content: center;
  }
`;

const MainPage = () => {
  const cards = Array.from({ length: 6 }, (_, i) => i * 5 + 1);

  return <Wrapper>{cards.map((startIndex) => RenderCard(startIndex))}</Wrapper>;
};

export default MainPage;
