import type { FC } from "react";
import { HomeComponent } from "../../components/Home/Home";

export const Home: FC = () => {
  return (
    <div className=" w-full flex flex-col items-center  gap-3 h-full">
      <HomeComponent />
    </div>
  );
};
