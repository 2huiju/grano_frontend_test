import styled from "@emotion/styled";
import { useWeb3React } from "@web3-react/core";
import { ContactWallet } from "../../../commons/types/contactWallet";

const WalletWrapper = styled.div<{ active: boolean }>`
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

const WalletTitle = styled.div`
  font-family: Gilroy;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
`;

const WalletConnectButton = styled.div`
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

const AccountInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: AirbnbCereal_W_Bd;
  font-size: 16px;
  font-weight: normal;
  color: #000;
`;

const MenuItem = styled.div`
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

const ContactWallet = (props: ContactWallet) => {
  const { account, active, deactivate } = useWeb3React();

  const onClickConnect = async () => {
    await props.connectWallet();
  };

  const onClickDisConnect = async () => {
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
    <WalletWrapper active={active}>
      {active ? (
        <>
          <img src="img/connectWallet/metamaskFox.svg" />
          <AccountInfo>
            {account?.substr(0, 6)}...{account?.substr(-6)}
          </AccountInfo>
          <MenuItem>Settings</MenuItem>
          <MenuItem onClick={onClickDisConnect}>DisConnect</MenuItem>
        </>
      ) : (
        <>
          <WalletTitle>Connect</WalletTitle>
          <WalletConnectButton onClick={onClickConnect}>
            Connect Wallet
          </WalletConnectButton>
        </>
      )}
    </WalletWrapper>
  );
};

export default ContactWallet;
