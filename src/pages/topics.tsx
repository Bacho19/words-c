import { FC } from "react";
import SimpleSidebar from "../components/Sidebar";
import { useFetchWordsQuery } from "../generated/graphql";

interface TopicsProps {}

const Topics: FC<TopicsProps> = ({}) => {
  const [{ data }] = useFetchWordsQuery();

  console.log(data);

  return (
    <SimpleSidebar>
      <div>topics</div>
    </SimpleSidebar>
  );
};

export default Topics;
