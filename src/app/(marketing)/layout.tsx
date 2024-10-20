import Footer from "@/components/Footer";
import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Navbar />
      <main className="flex-grow ">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
