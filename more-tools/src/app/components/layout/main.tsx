import SideBar from "./sidebar";
import Header from "./header";
import { ReactNode } from "react";

interface layoutHomeProps {
  children: ReactNode;
}

const layoutHome: React.FC<layoutHomeProps> = ({ children }) => {
  return (
    <main className="z-1000 w-full">
      <Header />
      <div className="flex">
        <SideBar />

        <div className="flex justify-center w-full ml-56">{children}</div>
      </div>
    </main>
  );
};

export default layoutHome;
