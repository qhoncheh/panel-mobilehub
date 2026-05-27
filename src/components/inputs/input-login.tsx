import type { InputProps } from "../../types";

const Input = ({ label, leftIcon, rightIcon, className = "", ...props }: InputProps) => {
    return (
        <div className="flex flex-col w-full">
            {label && <label className="mb-1 text-gray-100 font-sans">{label}</label>}
            <div className="relative w-full">
                {leftIcon && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {leftIcon}
                    </div>
                  )}
                <input
                    className={`
                        w-full py-2 px-3 ${leftIcon ? "pl-10" : "pl-3"} ${rightIcon ? "pr-10" : "pr-3"} border border-gray-300 rounded-3xl
                        focus:outline-none focus:ring-2 focus:ring-[#8AB054] placeholder-sm ${className}
                    `}{...props}
                /> 
                {rightIcon && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        {rightIcon}
                    </div>
                )} 
            </div> 
        </div>
    );
};

export default Input;
