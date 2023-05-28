import { ButtonProps } from "@/components/types";
import clsx from "clsx";

const Button = ({ children, width, className, soldOut = false } : ButtonProps) => {
    return (  
        <button 
            style={{width: width}} 
            className={clsx(
                "py-2 rounded-[8px] text-white duration-200 ease", 
                soldOut ? "bg-orange-300 hover:bg-orange-400"
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