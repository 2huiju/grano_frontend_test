import styled from "@emotion/styled";

const Card = styled.div`
  width: 383px;
  height: 331px;
  display: flex;
  flex-direction: column;
  margin: 0 8px 24px 8px;
  flex-shrink: 0;
  flex-grow: 0;
  padding: 4px 4px 16px;
  border-radius: 10px;
  border: solid 1px #d2d3d4;
  background-color: #ffffff;
`;

const CardImgBox = styled.div`
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
  /* justify-content: space-between; */
`;

const TitleImg = styled.img`
  width: 100%;
  margin-right: 2px;
  object-fit: cover;
`;

const SubImgBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const SubImg = styled.img`
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

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 130px;
`;

const PriceBoxTitle = styled.div`
  font-family: Urbanist;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  color: #808191;
  margin-bottom: 6px;
`;

const Price = styled.div`
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

const EthImg = styled.img`
  margin-right: 5px;
`;

const RenderCard = (startIndex: any) => {
  const titleImgIndex = startIndex;
  const subImgIndex = Array.from({ length: 4 }, (_, i) => startIndex + i + 1);

  return (
    <Card>
      <CardImgBox>
        <TitleImg src={`img/card/NFT/${titleImgIndex}.svg`} />
        <SubImgBox>
          {subImgIndex.map((index) => (
            <SubImg key={index} src={`img/card/NFT/${index}.svg`} />
          ))}
        </SubImgBox>
      </CardImgBox>
      <InfoBox>
        <NFTTitle>Girl in Red</NFTTitle>
        <PriceWrapper>
          <PriceBox>
            <PriceBoxTitle>Price</PriceBoxTitle>
            <Price>
              <EthImg src="img/commons/eth.svg" />
              27.5 ETH
            </Price>
          </PriceBox>
          <PriceBox>
            <PriceBoxTitle>Market Cap</PriceBoxTitle>
            <Price>
              <EthImg src="img/commons/eth.svg" />
              27.5 ETH
            </Price>
          </PriceBox>
        </PriceWrapper>
      </InfoBox>
    </Card>
  );
};

export default RenderCard;
