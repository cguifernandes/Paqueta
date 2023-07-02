'use client'
import Button from "@/components/Button/button";
import { ShoppingProps } from "@/components/types";
import { useContext, useEffect, useState } from "react";
import { Toast } from "@/hooks/toast";
import { StoragedContext } from "@/hooks/localStorage";

const ButtonShopping = ({ soldout, id, products } : ShoppingProps) => {
    const [isOnShopping, setIsOnShopping] = useState(false);
    const { GetStoraged, RemoveStoraged, SetStoraged } = useContext(StoragedContext);
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

    if (products) {
        if (soldout) {
            return (
                <Button onClick={() => Toast("Você será notificado quando o produto estiver disponível.", false, true)} soldout className="text-xl">ME AVISE QUANDO CHEGAR</Button>
            )
        }

        else {
            return (
                <Button onClick={handlerClick} className="text-xl">COMPRAR</Button>
            )
        }
    }

    else {
        if (soldout) {
            return (
                <Button onClick={() => Toast("Você será notificado quando o produto estiver disponível.", false, true)} soldout className="w-[85%] my-3 bottom-4 left-[50%] -translate-x-[50%] absolute">ME AVISE QUANDO CHEGAR</Button>  
            )
        }

        else {
            return (
                <Button onClick={handlerClick} className="w-[85%] my-3 bottom-4 left-[50%] -translate-x-[50%] absolute">COMPRAR</Button>
            )
        }
    }
}
 
export default ButtonShopping;