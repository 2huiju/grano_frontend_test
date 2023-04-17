import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { SetStateAction, useEffect, useRef, useState } from "react";
import ContactWallet from "../../contactWallet";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "ethers";
import jazzicon from "@metamask/jazzicon";
import { injected } from "../../../../commons/connector/index";

const Wrapper = styled.div`
  width: 100vw;
  height: 76px;
  padding: 27px 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LogoImg = styled.img`
  margin-right: 8px;
`;

const Logo = styled.div`
  font-family: Urbanist;
  color: #1b1d21;
  font-size: 18px;
  font-weight: 800;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d2d3d4;
  border-radius: 50px;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EthBalance = styled.div`
  font-family: "AirbnbCereal_W_Bd";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #444444;
  margin-right: 18px;
`;

const EthImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Header = () => {
  const { account, library, active, activate } = useWeb3React();
  const avatarRef = useRef<HTMLDivElement>(null);

  const [activeProfile, setActiveProfile] = useState(false);
  const [balance, setBalance] = useState("");

  const connectWallet = async () => {
    try {
      await activate(injected, (error) => {
        if ("/No Ethereum provider was found on window.ethereum/")
          throw new Error("Metamask 익스텐션을 설치해주세요");
      });
      localStorage.setItem("connectedMetaMask", "true");
    } catch (err) {
      alert(err);
      window.open("https://metamask.io/download.html");
    }
  };

  const onClickProfile = () => {
    setActiveProfile(!activeProfile);
  };

  useEffect(() => {
    const element: HTMLDivElement | null = avatarRef.current;

    if (account) {
      library
        ?.getBalance(account)
        .then((result: { _hex: SetStateAction<string> }) =>
          setBalance(result._hex)
        );
    }

    if (element && account) {
      const addr = account.slice(2, 10);
      const seed = parseInt(addr, 16);
      const icon = jazzicon(40, seed); //generates a size 20 icon
      if (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      element.appendChild(icon);
    }

    if (localStorage.getItem("connectedMetaMask") === "true") {
      connectWallet();
    }
  }, [account, library, avatarRef]);

  return (
    <Wrapper>
      <LogoBox>
        <LogoImg src="img/layout/logo.svg" />
        <Logo>Renaissance Lab.</Logo>
      </LogoBox>
      <ProfileBox onClick={onClickProfile}>
        {active ? (
          <>
            <EthImg src="img/commons/eth.svg" />
            <EthBalance>
              {balance && Number(formatEther(balance)).toFixed(4)} ETH
            </EthBalance>
          </>
        ) : (
          <></>
        )}
        {active ? <ProfileImg ref={avatarRef} /> : <ProfileImg />}
        {activeProfile ? (
          <KeyboardArrowUpIcon style={{ color: "#808191" }} />
        ) : (
          <KeyboardArrowDownIcon style={{ color: "#808191" }} />
        )}
      </ProfileBox>
      {activeProfile ? (
        <ContactWallet
          setActiveProfile={setActiveProfile}
          avatarRef={avatarRef}
          connectWallet={connectWallet}
        />
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default Header;
