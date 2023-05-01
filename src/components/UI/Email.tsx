const Email = () => {
  return (
    <a
      href="mailto:eugiost.dev@gmail.com"
      className="flex items-center justify-center transition-all hover:text-green after:w-[1px] after:h-[90px] after:bg-light-slate after:block"
      style={{
        writingMode: "vertical-rl",
      }}
    >
      <span className="my-[20px] text-xs font-['SF_Mono'] tracking-widest p-[10px]">
        eugiost.dev@gmail.com
      </span>
    </a>
  );
};

export default Email;
