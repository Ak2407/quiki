import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen min-w-full">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <h1>Footer</h1>
    </div>
  );
};

export default MarketingLayout;
