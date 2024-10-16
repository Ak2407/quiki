import { toast } from "sonner";

export default function Home() {
  const handleClick = () => {
    toast.success("Hello World");
  };

  return (
    <div>
      <button onClick={handleClick}>Toast</button>
    </div>
  );
}
