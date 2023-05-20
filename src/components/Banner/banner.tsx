'use client'
import { ArrowsClockwise, CreditCard, MapPin, Package } from "phosphor-react";
import { CiDiscount1 } from "react-icons/ci"
import Card from "../Card/card";

const Banner = () => {
    return (  
        <div className="bg-gradient-to-r from-orange-100 to-orange-300 h-[160px] flex justify-evenly">
            <Card 
                weight="thin" 
                size={64} 
                color="#ffffff" 
                icon={CreditCard} 
                heading="SEM JUROS*" 
                text="PAGUE EM ATÉ 10X"
            />
            <Card 
                weight="thin" 
                headingOnTop 
                size={64} 
                color="#ffffff" 
                icon={MapPin} 
                heading="RETIRE GRÁTIS" 
                text="EM NOSSAS LOJAS"
            />
            <Card 
                weight="thin" 
                headingOnTop 
                size={64} 
                bold
                color="#ffffff" 
                icon={CiDiscount1} 
                width={125}
                heading="GANHE 20% DE DESCONTO*" 
            />
            <Card 
                weight="thin" 
                headingOnTop 
                size={64} 
                color="#ffffff" 
                icon={Package} 
                width={200}
                strong="FRETE GRÁTIS "
                text="PARA REGIÕES SUL E SUDESTE*"
            />
            <Card 
                weight="thin" 
                headingOnTop 
                size={64} 
                color="#ffffff" 
                icon={ArrowsClockwise} 
                thin
                text="PRIMEIRA TROCA GRÁTIS"
            />
        </div>
    );
}
 
export default Banner;