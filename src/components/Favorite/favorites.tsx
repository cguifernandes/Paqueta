'use client'
import { HeartStraight } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { StoragedContext } from "@/hooks/localStorage";
import { CardProps } from "../types";
import Link from "next/link";

const getData = async (id: string) => {
    const response = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${id}`);

    return response.json();
}

const Favorites = () => {
    const { GetStoraged } = useContext(StoragedContext);
    const [favorites, setFavorites] = useState<CardProps[] | null>(null);
    const items = GetStoraged('favorites');

    useEffect(() => {
        const Fetch = async () => {
            if (items.length > 0) {
                const dataCard = [];
                for (let i = 0; i < items.length; i++) {
                    const data = await getData(items[i]);
                    dataCard.push(data);
                }
                setFavorites(dataCard.flat());
            }
            else {
                setFavorites(null)
            }
        };
      
        Fetch();
    }, [items]);



    return (
        <Link href={"favorites"} className="w-auto flex items-center justify-between">
            <HeartStraight className="mx-2" size={32} color="#000" />
            <span>Favoritos</span>
            {
                favorites && favorites.length > 0 && (
                    <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-orange-100 absolute left-0 -top-2">
                        <span className="text-white text-[12px]">{favorites?.length}</span>
                    </div>
                )
            }
        </Link>
    );
}
 
export default Favorites;