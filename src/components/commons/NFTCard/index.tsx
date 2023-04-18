import { NFTCard } from "../../../commons/types/NFTCard";
import { breakPoints } from "../../../commons/styles/media";
import styled from "@emotion/styled";
import { useMemo } from "react";

const CardContainer = styled.div`
  width: 383px;
  height: 331px;
  display: flex;
  flex-direction: column;
  margin: 0 8px 24px 8px;
  flex-shrink: 0;
  flex-grow: 0;
  padding: 1px 2px 16px 3px;
  border-radius: 10px;
  border: solid 1px #d2d3d4;
  background-color: #ffffff;

  @media ${breakPoints.mobile} {
    margin: 20px 0;
    width: 370px;
  }
`;

const CardImageBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
`;

const MainImage = styled.img`
  width: 100%;
  margin-right: 2px;
  object-fit: cover;

  @media ${breakPoints.mobile} {
    height: 97%;
  }
`;

const ThumbnailBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const ThumbnailImage = styled.img`
  width: calc(50% - 2px);
  height: calc(50% - 2px);
  margin: 1px;
  object-fit: cover;
`;

const NFTTitle = styled.div`
  font-family: "Urbanist";
  font-weight: 700;
  font-size: 18px;
  color: #1b1d21;
  margin-bottom: 12px;
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
`;

const PriceLabel = styled.div`
  font-family: Urbanist;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #808191;
  margin-bottom: 6px;
`;

const PriceValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: Urbanist;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  color: #4c4d53;
`;

const EthSymbol = styled.img`
  margin-right: 5px;
`;

const RenderCard = ({ key, startIndex }: NFTCard) => {
  const titleImgIndex = startIndex;
  const subImgIndex = useMemo(
    () => Array.from({ length: 4 }, (_, i) => startIndex + i + 1),
    [startIndex]
  );

  return (
    <CardContainer>
      <CardImageBox>
        <MainImage src={`img/card/NFT/${titleImgIndex}.svg`} />
        <ThumbnailBox>
          {subImgIndex.map((index) => (
            <ThumbnailImage key={index} src={`img/card/NFT/${index}.svg`} />
          ))}
        </ThumbnailBox>
      </CardImageBox>
      <InfoBox>
        <NFTTitle>Girl in Red</NFTTitle>
        <PriceSection>
          <PriceContainer>
            <PriceLabel>Price</PriceLabel>
            <PriceValue>
              <EthSymbol src="img/commons/eth.svg" />
              27.5 ETH
            </PriceValue>
          </PriceContainer>
          <PriceContainer>
            <PriceLabel>Market Cap</PriceLabel>
            <PriceValue>
              <EthSymbol src="img/commons/eth.svg" />
              27.5 ETH
            </PriceValue>
          </PriceContainer>
        </PriceSection>
      </InfoBox>
    </CardContainer>
  );
};

export default RenderCard;
