import { ButtonProps } from "@/types/types";

const Button = ({ children, width } : ButtonProps) => {
    return (  
        <button 
            style={{width: width}} 
            className="py-2 bg-orange-100 text-white duration-200 ease hover:bg-orange-200"
        >
            {children}
        </button>
    );
}
 
export default Button;