import { TextProps } from "@/components/types";
import clsx from "clsx";

const Text = ({ children, size = 'md', className, align = 'left' } : TextProps) => {
    return (
      <p
        className={clsx(
          "text-grey-100",
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