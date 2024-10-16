import { Navbaritems } from "@/lib/constants";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b h-[57px] px-6  ">
      <div className="flex items-center justify-center gap-6">
        <Logo />
        <div className="flex gap-6">
          {Navbaritems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className=" text-neutral-500 hover:text-black transition-all ease-in-out duration-200 tracking-wide"
            >
              <p className="text-sm  ">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
