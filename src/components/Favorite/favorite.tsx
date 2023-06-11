import clsx from "clsx";
import { Heart } from "phosphor-react";
import { useEffect, useState } from "react";
import { FavoriteProps } from "../types";
import { GetStoraged, RemoveStoraged, SetStoraged } from "@/hooks/localStorage";
import { Toast } from "@/hooks/toast";

const Favorite = ({id, className, style} : FavoriteProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const includesFavorites = GetStoraged("favorites");
    
    useEffect(() => {
        setIsFavorite(includesFavorites.includes(id));
    }, [includesFavorites])

    const handlerClick = () => {
        if (isFavorite) {
            RemoveStoraged("favorites", id);
            setIsFavorite(false);
            Toast("O produto foi removido dos favoritos.", false);
        } 
        else {
            SetStoraged("favorites", id);
            setIsFavorite(true);
            Toast("O produto foi adicionado aos favoritos.", true);
        }
    }

    return (  
        <div 
            style={style}
            onClick={handlerClick} 
            className={clsx(
                "w-[45px] h-[45px] duration-200 cursor-pointer rounded-full flex z-30 items-center justify-center hover:bg-grey-800",
                
                className
            )}
        >
            <Heart weight={isFavorite ? "fill" : "regular"} size={30} className="float-right" color="#FF8A29"/>
        </div>
    );
}
 
export default Favorite;