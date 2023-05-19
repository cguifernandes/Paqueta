'use client'
import { Bag, Headphones, HeartStraight, MapPin, User } from "phosphor-react";
import Text from "../Text/text";
import Image from "next/image";
import Logo from "../../assets/logo.png"

const Header = () => {
    return (  
        <>
            <div className="bg-gradient-to-r from-orange-100 to-orange-300 flex justify-around items-center py-4">
                <Text className={"text-white"}>Loja de Calçados e Moda On-line</Text>
                <div className="flex">
                    <div className="flex items-center justify-between px-4">
                        <Headphones className="mx-2" size={28} color="#ffffff" />
                        <Text className={"text-white"}>Fale conosco</Text>
                    </div>
                    <div className="flex items-center justify-between px-4">
                        <MapPin className="mx-2" size={28} color="#ffffff" />
                        <Text className={"text-white"}>Encontrar uma loja física</Text>
                    </div>
                </div>
            </div>
            <header className="flex items-center justify-around py-8">
                <Image src={Logo.src} alt="Logo" width={297} height={86} />
                <div className="flex">
                    <div className="flex items-center justify-center mx-4 cursor-pointer">
                        <HeartStraight className="mx-2" size={32} color="#000" />
                        <Text>Lista de desejos</Text>
                    </div>
                    <div className="flex items-center justify-center mx-4 cursor-pointer">
                        <Bag className="mx-2 fill-orange-100" size={32} color="#000" />
                        <Text>Sacola</Text>
                    </div>
                    <div className="flex items-center justify-center mx-4 cursor-pointer">
                        <User className="mx-2" size={32} color="#000" />
                        <Text>Entrar FAZER HOVER</Text>
                    </div>
                </div>
            </header>
            <div className="flex items-center justify-evenly">
                <Text>Novidades</Text>
                <Text>Feminino</Text>
                <Text>Masculino</Text>
                <Text>Paquetá Esportes</Text>
                <Text>Outlet</Text>
                <Text>Cashback</Text>
            </div>
        </>
    );
}
 
export default Header;