import Header from "./header";
import Navigation from "./navigation";
import { ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Header />
      <Navigation />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
