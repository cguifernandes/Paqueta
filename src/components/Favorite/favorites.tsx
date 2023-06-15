'use client'
import { HeartStraight } from "phosphor-react";
import Text from "../Text/text";
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
        };
      
        Fetch();
    }, [items]);

    return (
        <Link href={"favorites"} className="w-[175px] flex items-center justify-between">
            <HeartStraight className="mx-2" size={32} color="#000" />
            <Text>Lista de desejos</Text>
            {favorites && favorites.length != null && (
                <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-orange-100 absolute left-0 -top-2">
                    <Text className="text-white text-[12px]">{favorites.length}</Text>
                </div>
            )}
        </Link>
    );
}
 
export default Favorites;