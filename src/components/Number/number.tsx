import { NumberProps } from "@/types/types";
import Text from "../Text/text";

const Number = ({ number, soldOut } : NumberProps) => {
    if (soldOut) {
        return (
            <div className="w-12 h-12 flex items-center justify-center border border-grey-100 duration-200 cursor-pointer relative bg-grey-800">
                <div className="-rotate-45 w-[64px] h-[1px] absolute bg-grey-100/70 bottom-[50%]"></div>
                <Text className={"text-lg"}>{number}</Text>
            </div>
        )
    }
    else {
        return (  
            <div className="w-12 h-12 flex items-center justify-center border border-grey-100 duration-200 cursor-pointer relative hover:bg-grey-800">
                <Text className={"text-lg"}>{number}</Text>
            </div>
        );
    }
}
 
export default Number;