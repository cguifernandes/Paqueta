'use client'
import { Bag } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { StoragedContext } from "@/hooks/localStorage";
import Link from "next/link";
import { CardProps } from "../types";

const getData = async (id: string) => {
    const response = await fetch(`https://api.brchallenges.com/api/paqueta/shoe/${id}`);

    return response.json();
}

const Shopping = () => {
    const { GetStoraged } = useContext(StoragedContext);
    const [shopping, setShopping] = useState<CardProps[] | null>(null);
    const items = GetStoraged('shopping');

    useEffect(() => {
        const fetchData = async () => {
            if (items.length > 0) {
                const dataCard = [];
                for (let i = 0; i < items.length; i++) {
                    const data = await getData(items[i]);
                    dataCard.push(data);
                }
                setShopping(dataCard.flat());
            }
            else {
                setShopping(null)
            }
        };
        
        fetchData();
    }, [items]);

    return (
        <Link href="cart" className="w-auto flex items-center justify-between">
            <Bag className="mx-2 fill-orange-100" size={32} color="#000" />
            <span>Sacola</span>
            {
                shopping && shopping.length > 0 && (
                    <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-orange-100 absolute left-0 -top-2">
                        <span className="text-white text-[12px]">{shopping?.length}</span>
                    </div>
                )
            }
        </Link>
      )
}
 
export default Shopping;