import { FC } from "react";
import AllWordsContent from "../components/AllWordsContent";
import SimpleSidebar from "../components/Sidebar";

interface AllWordsProps {}

const AllWords: FC<AllWordsProps> = () => {
  return (
    <SimpleSidebar>
      <AllWordsContent />
    </SimpleSidebar>
  );
};

export default AllWords;
