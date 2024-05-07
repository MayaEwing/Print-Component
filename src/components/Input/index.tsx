import { InputHTMLAttributes, forwardRef } from "react";

const Input = forwardRef(
  (props: InputHTMLAttributes<HTMLInputElement>, type: any) => {
    const { className, ...rest } = props;
    return (
      <input
        {...rest}
        className="px-4 py-2 md:text-xl text-base outline-none outline-offset-0 bg-white/20 rounded-full border-2 border-white transition-all ease-linear duration-100 text-sky-800 hover:outline hover:outline-1 hover:outline-sky-800 focus:outline focus:outline-1 focus:outline-white focus:bg-[#3e771705] text-end"
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
