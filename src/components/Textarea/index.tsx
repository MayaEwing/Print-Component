import { TextareaHTMLAttributes, forwardRef } from "react";

const Textarea = forwardRef(
  (props: TextareaHTMLAttributes<HTMLTextAreaElement>, ref: any) => {
    const { className, ...rest } = props;
    return (
      <textarea
        {...rest}
        ref={ref}
        className="md:w-[580px] w-full px-4 py-2 text-lg outline-none outline-offset-0 bg-white/20 rounded-2xl border-2 border-white transition-all ease-linear duration-100 text-sky-800 hover:outline hover:outline-1 hover:outline-sky-800 focus:outline focus:outline-1 focus:outline-gray-200 focus:bg-[#ffffff05] resize-none text-end"
      />
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
