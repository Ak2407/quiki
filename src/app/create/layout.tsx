import BottomBar from "./_components/BottomBar";
import CancelButton from "./_components/CancelButton";

export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <div className="w-full fixed top-0 left-0 p-2 ">
        <CancelButton />
      </div>
      {children}
      <div className="fixed bottom-0 left-0 right-0 w-full">
        <BottomBar />
      </div>
    </main>
  );
}
