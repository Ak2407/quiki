import { GhostIcon, GithubIcon, TwitterIcon } from "lucide-react";

const SocialButtons = () => {
  return (
    <div className="flex flex-row gap-6 items-center justify-center">
      <a
        href="https://github.com/Ak2407"
        target="_blank"
        className="hover:opacity-90 transition-opacity duration-200 text-zinc-500 hover:text-zinc-800 flex flex-col items-center justify-center"
      >
        <GithubIcon className="w-4 h-4" />
        <p className="text-[11px]">Github</p>
      </a>

      <a
        href="https://twitter.com/DevAxit"
        target="_blank"
        className="hover:opacity-90 transition-opacity duration-200 text-zinc-500 hover:text-blue-500 flex flex-col items-center justify-center"
      >
        <TwitterIcon className="w-4 h-4" />
        <p className="text-[11px]">Twitter</p>
      </a>

      <a
        href="https://www.akshit.app/"
        target="_blank"
        className="hover:opacity-90 transition-opacity duration-200 text-zinc-500 hover:text-yellow-600 flex flex-col items-center justify-center"
      >
        <GhostIcon className="w-4 h-4" />
        <p className="text-[11px] ">Portfolio</p>
      </a>
    </div>
  );
};

export default SocialButtons;
