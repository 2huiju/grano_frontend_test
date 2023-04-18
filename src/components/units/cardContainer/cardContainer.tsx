import styled from "@emotion/styled";
import RenderCard from "../../commons/NFTCard";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  padding: 0 90px;
  flex-direction: row;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  margin: 70px 0 70px 0;

  @media ${breakPoints.mobile} {
    padding: 0;
    margin: 0;
    margin-top: 30px;
    justify-content: center;
  }
`;

const AllPageContainer = (props: { cards: number[] }) => {
  return (
    <Wrapper>{props.cards.map((startIndex) => RenderCard(startIndex))}</Wrapper>
  );
};

export default AllPageContainer;
