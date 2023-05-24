import { TextProps } from "@/components/types";
import clsx from "clsx";

const Heading = ({ children, size = 'md', className, align = 'left' } : TextProps) => {
    return (  
        <h1
        className={clsx(
          "text-grey-100 font-bold",
          {
            "text-sm": size === "sm",
            "text-md": size === "md",
            "text-lg": size === "lg",
            "text-center": align === "center",
            "text-right": align === "right",
          },
          className
        )}
      >
        {children}
      </h1>
    );
}
 
export default Heading;