import { TextProps } from "@/types/types";
import clsx from "clsx";
import { ReactNode } from "react";


const Text = ({ children, size = 'md', className, align = 'left' } : TextProps) => {
    return (
      <p
        className={clsx(
          "text-black",
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
      </p>
    );
}
 
export default Text;