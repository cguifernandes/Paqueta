import { ButtonProps } from "@/components/types";
import clsx from "clsx";

const Button = ({ children, width, className } : ButtonProps) => {
    return (  
        <button 
            style={{width: width}} 
            className={clsx("py-2 rounded-[8px] bg-orange-100 text-white duration-200 ease hover:bg-orange-200", className)}
        >
            {children}
        </button>
    );
}
 
export default Button;