import ContentLoader from "react-content-loader";
import { LoaderProps } from "../types";
import clsx from "clsx";

const Skeleton = ({className, height, width} : LoaderProps) => {
    return (  
        <ContentLoader 
            className={clsx("rounded-lg", className)} 
            speed={2} 
            width={width} 
            height={height} 
            backgroundColor="#ebebeb"
            foregroundColor="#dbdbdb"
        >
            <rect className="h-full w-full"/>
        </ContentLoader>
    );
}
 
export default Skeleton;