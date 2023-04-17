import { breakPoints } from "../../../../commons/styles/media";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  padding: 0 122px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: end;
  border-bottom: 1px solid #e4e4e4;

  @media ${breakPoints.tablet} {
    padding-left: 8%;
  }

  @media ${breakPoints.mobile} {
    padding: 0;
    justify-content: center;
  }
`;

const TitleBox = styled.div<{ activeTitle: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  margin-right: 65px;
  padding-bottom: 7px;
  border-bottom: ${(props) =>
    props.activeTitle === props.title ? "2px solid #000000" : "none"};

  @media ${breakPoints.mobile} {
    margin: 0 5%;
  }
`;

const Title = styled.div`
  margin-right: 4px;
  font-family: AirbnbCereal_W_Bd;
  font-weight: 700;
  font-size: 15px;
  color: #000000;
`;

const Count = styled.div`
  font-family: "AirbnbCereal_W_Bd";
  font-weight: 700;
  font-size: 15px;
  color: #797a7e;
`;

const titles = [
  { title: "All", count: 420 },
  { title: "Collections", count: 220 },
  { title: "Singles", count: 352 },
];

const ACTIVE_NAV = "active-nav";

const Navigation = () => {
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    const storedTitle = sessionStorage.getItem(ACTIVE_NAV);
    setActiveTitle(storedTitle || titles[0].title);
  }, []);

  const onClickNav = (el: string) => () => {
    const selectedTitle = el;
    if (selectedTitle) {
      setActiveTitle(selectedTitle);
      sessionStorage.setItem(ACTIVE_NAV, selectedTitle);
    }
  };

  return (
    <Wrapper>
      {titles.map((el) => (
        <>
          <TitleBox
            onClick={onClickNav(el.title)}
            title={el.title}
            activeTitle={activeTitle}
            key={el.title}
          >
            <Title title={el.title}>{el.title}</Title>
            <Count>{el.count}k</Count>
          </TitleBox>
        </>
      ))}
    </Wrapper>
  );
};

export default Navigation;
