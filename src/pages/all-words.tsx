import { FC } from "react";
import SimpleSidebar from "../components/Sidebar";
import { useFetchWordsQuery } from "../generated/graphql";

interface AllWordsProps {}

const AllWords: FC<AllWordsProps> = () => {
  const [{ data }] = useFetchWordsQuery();

  console.log(data);

  return (
    <SimpleSidebar>
      {data?.words.map((word, index) => {
        return (
          <div key={word.id}>
            {index + 1}. {word.word}
          </div>
        );
      })}
    </SimpleSidebar>
  );
};

export default AllWords;
