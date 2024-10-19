import { RoughNotation } from "react-rough-notation";

const Heading = () => {
  return (
    <div className="w-full ">
      <h1 className="text-3xl sm:text-5xl  font-black text-center lg:text-left text-neutral-700 ">
        Make AI Generated
        <span>
          <RoughNotation
            type="underline"
            color="#0369a1"
            strokeWidth={5}
            padding={0}
            show
          >
            {""} content {""}
          </RoughNotation>
        </span>
        in minutes.
      </h1>
    </div>
  );
};

export default Heading;
