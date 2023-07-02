import { ButtonProps } from "@/components/types";
import clsx from "clsx";

const Button = ({ children, width, className, soldout = false, ...props } : ButtonProps) => {
    return (  
        <button 
            {...props}
            style={{width: width}} 
            className={clsx(
                "py-2 rounded-[4px] text-white duration-200 ease", 
                soldout ? "bg-orange-300 hover:bg-orange-400"
                :
                "bg-orange-100 hover:bg-orange-200",
                className
            )}
        >
            {children}
        </button>
    );
}
 
export default Button;