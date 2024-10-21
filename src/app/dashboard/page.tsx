import Connected from "./_components/Connected";
import Recently from "./_components/Recently";
import Title from "./_components/Title";

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-10 pt-4 ">
      <Title />
      <Connected />
      <Recently />
    </div>
  );
};

export default Dashboard;
