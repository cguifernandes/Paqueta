import { X } from "phosphor-react";
import { TamanhoProps } from "../types";
import Heading from "../Heading/heading";
import Text from "../Text/text";
import Image from "next/image";
import Union from "@/assets/foot.png"

const Tamanho = ({ setVisibleTamanho } : TamanhoProps) => {
    const number = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
    const length = ["21,6 - 22,2 cm", "22,3 - 22,9 cm", "23,0 - 23,6 cm", "23,7 - 24,2 cm", "24,3 - 24,8 cm", "24,9 - 25,5 cm", "25,6 - 26,2 cm", "26,3 - 26,8 cm", "26,9 - 27,5 cm", "27,6 - 28,2 cm", "28,3 - 28,7 cm", "28,8 - 29,4 cm"]
    
    const data = [
        number.map((number, i) => {
            return ({
                number: number,
                length: length[i]
            })
        })
    ]

    return ( 
        <>
            <div onClick={() => setVisibleTamanho(false)} className="w-full h-full top-0 left-0 fixed z-40 bg-black/50"></div>
            <div className="bg-white w-[95%] h-[810px] my-10 fixed z-50 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg sm:my-0 lg:w-[990px]">
                <div onClick={() => setVisibleTamanho(false)} className="absolute right-5 top-5 p-2 rounded-full ease-in duration-150 cursor-pointer hover:bg-grey-800">
                    <X size={32} className="text-black" />
                </div>
                <div className="flex items-center h-full gap-y-10 py-[90px] flex-col overflow-auto lg:flex-row lg:justify-around">
                    <div className="h-full w-[90%] gap-y-5 flex flex-col items-center sm:items-start lg:justify-around lg:w-[400px]">
                        <Heading className={"text-orange-300 text-2xl font-montserrat"}>GUIA DE TAMANHOS</Heading>
                        <div className="h-[220px] flex flex-col justify-between">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center bg-orange-100 rounded-full w-[32px] h-[32px] mr-4">
                                    <Heading className={"text-white"}>1</Heading>
                                </div>
                                <Text className={"w-[270px] break-words sm:w-auto"}>Fique de pé em cima de uma folha de papel.</Text>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center justify-center bg-orange-100 rounded-full w-[32px] h-[32px] mr-4">
                                    <Heading className={"text-white"}>2</Heading>
                                </div>
                                <Text className={"w-[270px] break-words sm:w-[350px]"}>Faça um risco no seu calcanhar e outro na frente do seu dedão.</Text>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center justify-center bg-orange-100 rounded-full w-[32px] h-[32px] mr-4">
                                    <Heading className={"text-white"}>3</Heading>
                                </div>
                                <Text className={"w-[270px] break-words sm:w-[350px]"}>Agora é só medir o comprimento entre essas duas linhas e pronto!</Text>
                            </div>
                        </div>
                        <Image className="block m-[0_auto] my-4 lg:my-0" alt="Imagem do pe" src={Union} />
                    </div>
                    <div className="flex items-center justify-between w-[90%] h-full flex-col lg:w-[450px]">
                        <div className="w-full hidden sm:flex sm:justify-around  lg:justify-around lg:px-0">
                            <Heading className={"text-xl font-montserrat w-[150px] text-center"}>NÚMERO DO CALÇADO</Heading>
                            <Heading className={"text-xl font-montserrat w-[195px] text-center"}>COMPRIMENTO DO PÉ</Heading>
                        </div>
                        <div className="w-full block m-[auto_0]">
                            {
                                data[0].map(response => {
                                    return (
                                        <div key={response.length} className="flex justify-around lg:justify-between border-b border-grey-700 py-2 items-center last:border-b-0">
                                            <p className="font-bold lg:pl-[105px]">{response.number}</p>
                                            <p className="lg:pr-[75px]">{response.length}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
}
 
export default Tamanho;