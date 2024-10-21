import Connected from "./_components/Connected";
import Title from "./_components/Title";

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-10 ">
      <Title />
      <Connected />
    </div>
  );
};

export default Dashboard;
