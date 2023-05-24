import { GroupProps } from "@/components/types";
import Heading from "@/components/Heading/heading";
import Text from "@/components/Text/text";

const Group = ({ icon, size, color, weight, heading, text, headingOnTop, bold, width, strong, thin } : GroupProps) => {
    let Icon = icon

    return (  
        <div className="flex justify-center gap-x-4 items-center">
            <Icon color={color} size={size} weight={weight} />
            <div style={{width: width}} className={`flex flex-col`}>
                {
                    strong ?
                    <>
                        <Text className={"text-white"}><strong>{strong}</strong>{text}</Text>
                    </>
                    :
                    bold ? 
                    <Heading className={"text-white"}>{heading}</Heading>
                    :
                    thin ?
                    <Text className={"text-white"}>{text}</Text>
                    :
                    headingOnTop ? 
                    <>
                        <Heading className={"text-white"}>{heading}</Heading>
                        <Text className={"text-white"}>{text}</Text>
                    </>
                    :
                    <>
                        <Text className={"text-white"}>{text}</Text>
                        <Heading className={"text-white"}>{heading}</Heading>
                    </>
                }
          </div>
        </div>
    );
}
 
export default Group;