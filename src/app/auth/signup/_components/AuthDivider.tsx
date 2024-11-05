const AuthDivider = () => {
  return (
    <div className="flex items-center justify-center w-full  px-4 gap-2">
      <DottedLine />
      <span className="flex-shrink-0  text-slate-500 text-sm font-normal">
        Or sign in with
      </span>
      <DottedLine />
    </div>
  );
};

export default AuthDivider;

function DottedLine() {
  return (
    <div className="flex-grow flex items-center justify-center">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-[2px] h-[2px] rounded-full bg-gray-300 mx-1"
        ></div>
      ))}
    </div>
  );
}
