'use client'
import { ArrowsClockwise, CreditCard, MapPin, Package } from "phosphor-react";
import { CiDiscount1 } from "react-icons/ci"
import Group from "../Group/group";

const Banner = () => {
    return (  
        <div className="bg-gradient-to-r from-orange-100 to-orange-300 gap-5 py-6 px-4 flex flex-wrap justify-center xl:justify-evenly">
                <Group 
                    weight="thin" 
                    size={64} 
                    color="#ffffff" 
                    icon={CreditCard} 
                    heading="SEM JUROS*" 
                    text="PAGUE EM ATÉ 10X"
                />
                <Group 
                    weight="thin" 
                    headingOnTop 
                    size={64} 
                    color="#ffffff" 
                    icon={MapPin} 
                    heading="RETIRE GRÁTIS" 
                    text="EM NOSSAS LOJAS"
                />
                <Group 
                    weight="thin" 
                    headingOnTop 
                    size={64} 
                    bold
                    color="#ffffff" 
                    icon={CiDiscount1} 
                    width={125}
                    heading="GANHE 20% DE DESCONTO*" 
                />
                <Group 
                    weight="thin" 
                    headingOnTop 
                    size={64} 
                    color="#ffffff" 
                    icon={Package} 
                    width={200}
                    strong="FRETE GRÁTIS "
                    text="PARA REGIÕES SUL E SUDESTE*"
                />
                <Group 
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