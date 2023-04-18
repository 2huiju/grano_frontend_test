import { RefObject } from "react";

export interface ContactWallet {
  connectWallet(): unknown;
  setActiveProfile: (isActive: boolean) => void;
  avatarRef: RefObject<HTMLDivElement>;
}
