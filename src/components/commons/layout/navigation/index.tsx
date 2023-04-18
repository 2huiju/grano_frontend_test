import { breakPoints } from "../../../../commons/styles/media";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavigationWrapper = styled.div`
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

const MenuItem = styled.div<{ isActive: boolean }>`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  margin-right: 65px;
  padding-bottom: 7px;
  border-bottom: ${(props) => (props.isActive ? "2px solid #000000" : "none")};
  cursor: pointer;

  * {
    pointer-events: none;
  }

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

const Navigation = () => {
  const router = useRouter();
  const [activeTitle, setActiveTitle] = useState("");

  const titles = [
    { title: "All", count: 420, page: "/allPage" },
    { title: "Collections", count: 220, page: "/collectionsPage" },
    { title: "Singles", count: 352, page: "/singlesPage" },
  ];

  const onClickNav = (event: React.MouseEvent<HTMLDivElement>) => {
    setActiveTitle(event.currentTarget.id);
    router.push(event.currentTarget.id);
  };

  useEffect(() => {
    if (!router.asPath.includes(activeTitle) || activeTitle === "") {
      // navigation css효과가 새로고침시에도 해제되지 않도록 하기 위한 코드
      // userEffect시 router page를 감지 후 해당 page에 해당하는 navigation title에 css 효과 적용
      setActiveTitle(router.asPath);
    }
  }, [router.asPath]);

  return (
    <NavigationWrapper>
      {titles.map((el) => (
        <MenuItem
          onClick={onClickNav}
          key={el.title}
          id={el.page}
          isActive={el.page === activeTitle}
        >
          <Title title={el.title}>{el.title}</Title>
          <Count>{el.count}k</Count>
        </MenuItem>
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;
