import { TamanhoProps } from "../types";

const Tamanho = ({setVisibleTamanho} : TamanhoProps) => {
    return (  
        <div onClick={() => setVisibleTamanho(false)} className="w-screen h-screen">
            <div className="bg-white w-[60%] h-[60%]">
                <p>oi</p>
            </div>
        </div>
    );
}
 
export default Tamanho;