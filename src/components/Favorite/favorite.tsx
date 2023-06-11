import clsx from "clsx";
import { Heart } from "phosphor-react";
import { useEffect, useState } from "react";
import { FavoriteProps } from "../types";
import { GetStoraged, RemoveStoraged, SetStoraged } from "@/hooks/localStorage";
import { Toast } from "@/hooks/toast";

const Favorite = ({id, soldout, className} : FavoriteProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const includesFavorites = GetStoraged("favorites");
    
    useEffect(() => {
        setIsFavorite(includesFavorites.includes(id));
    }, [includesFavorites])

    const handlerFavorite = () => {
        if (isFavorite) {
            RemoveStoraged("favorites", id);
            setIsFavorite(false);
            Toast("Produto foi removido dos favoritos.", false);
        } 
        else {
            SetStoraged("favorites", id);
            setIsFavorite(true);
            Toast("Produto foi adicionado aos favoritos.", true);
        }
    }

    return (  
        <div 
            onClick={handlerFavorite} 
            className={clsx(
                "w-[45px] h-[45px] duration-200 cursor-pointer rounded-full flex z-30 items-center justify-center hover:bg-grey-800",
                soldout == false ?
                "top-6"
                :
                "top-12",
                className
            )}
        >
            <Heart weight={isFavorite ? "fill" : "regular"} size={30} className="float-right" color="#FF8A29"/>
        </div>
    );
}
 
export default Favorite;