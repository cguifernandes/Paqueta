'use client'
import Button from "../Button/button";
import { ShoppingProps } from "../types";
import { useEffect, useState } from "react";
import { GetStoraged, RemoveStoraged, SetStoraged } from "@/hooks/localStorage";
import { Toast } from "@/hooks/toast";

const Shopping = ({ soldout, id, products } : ShoppingProps) => {
    const [isOnShopping, setIsOnShopping] = useState(false);
    const includesShopping = GetStoraged("shopping");
    
    useEffect(() => {
        setIsOnShopping(includesShopping.includes(id));
    }, [includesShopping])

    const handlerClick = () => {
        if (isOnShopping) {
            RemoveStoraged("shopping", id);
            setIsOnShopping(false);
            Toast("O produto foi removido do carrinho de compras.", false);
        } 
        else {
            SetStoraged("shopping", id);
            setIsOnShopping(true);
            Toast("O produto foi adicionado ao carrinho de compras.", true);
        }
    }
    
    return (
        products && !soldout ?
        <Button onClick={handlerClick} className="text-xl">COMPRAR</Button>
        :
        products && soldout ?
        <Button onClick={() => Toast("Você será notificado quando o produto estiver disponível.", false, true)} soldOut className="text-xl">ME AVISE QUANDO CHEGAR</Button>
        :
        !products && soldout ?
        <Button onClick={() => Toast("Você será notificado quando o produto estiver disponível.", false, true)} soldOut className="w-[85%] my-3 bottom-4 left-[50%] -translate-x-[50%] absolute">ME AVISE QUANDO CHEGAR</Button>  
        :
        <Button onClick={handlerClick} className="w-[85%] my-3 bottom-4 left-[50%] -translate-x-[50%] absolute">COMPRAR</Button>
    )
}
 
export default Shopping;