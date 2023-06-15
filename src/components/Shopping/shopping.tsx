'use client'
import { Bag } from "phosphor-react";
import Text from "../Text/text";
import { useContext, useEffect, useState } from "react";
import { StoragedContext } from "@/hooks/localStorage";
import { CardProps } from "../types";
import Link from "next/link";

const getData = async (id: string) => {
    const response = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${id}`);

    return response.json();
}

const Shopping = () => {
    const { GetStoraged } = useContext(StoragedContext);
    const [shopping, setShopping] = useState<CardProps[] | null>(null);
    const items = GetStoraged('shopping');

    useEffect(() => {
        const Fetch = async () => {
            if (items.length > 0) {
                const dataCard = [];
                for (let i = 0; i < items.length; i++) {
                    const data = await getData(items[i]);
                    dataCard.push(data);
                }
                setShopping(dataCard.flat());
            }
        };
        
        Fetch();
    }, [items]);

    return (
        <Link href={"cart"} className="w-[102px] flex items-center justify-between">
            <Bag className="mx-2 fill-orange-100" size={32} color="#000" />
            <Text>Sacola</Text>
            {shopping && shopping.length != null && (
                <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-orange-100 absolute left-0 -top-2">
                    <Text className="text-white text-[12px]">{shopping.length}</Text>
                </div>
            )}
        </Link>
    );
}
 
export default Shopping;