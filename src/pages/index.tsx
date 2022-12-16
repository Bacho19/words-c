import SimpleSidebar from "../components/Sidebar";
import { useMeQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = useMeQuery();

  console.log(data);

  return (
    <SimpleSidebar>
      <div>Home</div>
    </SimpleSidebar>
  );
};

export default Index;
