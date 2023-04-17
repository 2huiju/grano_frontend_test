import { injected } from "../../../commons/connector/index";
import styled from "@emotion/styled";
import { useWeb3React } from "@web3-react/core";
import { RefObject, useEffect, useRef } from "react";

const Wrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 9%;
  right: 38px;
  width: 248px;
  height: ${(props) => (props.active ? "224px" : "120px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => (props.active ? "center" : "left")};
  padding: 24px 20px 22px 24px;
  border-radius: 8px;
  box-shadow: 0 0 60px 4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
`;

const Title = styled.div`
  font-family: Gilroy;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

const ConnectButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11px 18px;
  border-radius: 10px;
  background-color: #2a2c33;
  font-family: AirbnbCereal_W_Bd;
  font-size: 15px;
  font-weight: normal;
  color: #ffffff;
  cursor: pointer;
`;

const FoxImg = styled.img``;

const Account = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: AirbnbCereal_W_Bd;
  font-size: 16px;
  font-weight: normal;
  color: #000;
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "AirbnbCereal_W_Md";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  color: #000000;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
`;

interface ContactWallet {
  connectWallet(): unknown;
  setActiveProfile: (isActive: boolean) => void;
  avatarRef: RefObject<HTMLDivElement>;
}

const ContactWallet = (props: ContactWallet) => {
  const { account, active, deactivate } = useWeb3React();

  const onClickConnectButton = async () => {
    try {
      await props.connectWallet();
    } catch (err) {
      alert(err);
      window.open("https://metamask.io/download.html");
    }
  };

  const disConnectWallet = async () => {
    try {
      deactivate();
      props.setActiveProfile(false);
      if (props.avatarRef.current) {
        props.avatarRef.current.innerHTML = "";
      }
      localStorage.removeItem("connectedMetaMask");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {active ? (
        <Wrapper active={active}>
          <FoxImg src="img/connectWallet/metamaskFox.svg" />
          <Account>
            {account?.substr(0, 6)}...{account?.substr(-6)}
          </Account>
          <Menu>Settings</Menu>
          <Menu onClick={disConnectWallet}>DisConnect</Menu>
        </Wrapper>
      ) : (
        <Wrapper active={active}>
          <Title>Connect</Title>
          <ConnectButton onClick={onClickConnectButton}>
            Connect Wallet
          </ConnectButton>
        </Wrapper>
      )}
    </>
  );
};

export default ContactWallet;
