import { MdOutlineLocalShipping, MdOutlineShoppingCart } from "react-icons/md"
import callCenter from "../../assets/imgs/callCenter.png"
import logo from "../../assets/imgs/logo.png"
import whatsappIcon from "../../assets/imgs/whatsappIcon.png"
import telefoneIcon from "../../assets/imgs/telefoneIcon.png"
import store from "../../assets/imgs/store.png"
import { MenuItem } from "./components/MenuItem"
import { TbHeadset } from "react-icons/tb"
import { useState } from "react"
import "../../../src/global.css"

export function Header(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
    <header className="flex flex-col w-full">
        <section className="bg-black items-center w-full">
            <div className="items-center h-18 max-w-7xl mx-auto flex justify-between px-4 py-4">

                <div className="flex items-center space-x-2">
                    <img 
                    src={logo} 
                    alt="logo" 
                    className="h-9 w-8 text-white"/>
                </div>

                <div className="flex items-center space-x-8">
                    {/* Início do container relativo para o dropdown */}
                    <div className="relative">
                        <div 
                            className="text-white text-sm flex items-center space-x-2 cursor-pointer"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <TbHeadset size={25} color="white"/>
                            <span id="dropDownAtendimento">Central de Atendimento</span>

                            { isDropdownOpen && (
                            <div id="teste" className="absolute flex items-center bg-white text-black mt-1 shadow-lg rounded p-2 z-50 w-150 h-70 top-6 right-0">

                                <div className="flex itens-center gap-6">
                                    {/* Telefone */}
                                    <div className="w-70 flex flex-col justify-center items-center animate-fadeIn"   style={{ animationDelay: '0.2s' }}>
                                        <img src={telefoneIcon} alt="" className="h-8 "/>
                                        <h1 className="py-4 text-2xl text-[#5ABF5D] text-center font-bold font-arial">Tefone</h1>
                                        <a href="" className="hover:text-[#5ABF5D]">(83) XXXX-XXXX | (83) XXXX-XXXX</a>
                                        <p className="">Seg a Sex de 9h às 18h | Sáb até 14h</p>
                                    </div>

                                    {/* Whatsapp */}
                                    <div className="w-70 flex flex-col justify-center items-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                                        <img src={whatsappIcon} alt="" className="h-8"/>
                                        <a href="" className="flex justify-center flex-col items-center">
                                            <h1 className="py-4 text-2xl text-center font-bold font-arial text-[#5ABF5D]">Whatsapp</h1>
                                            <p className="hover:text-[#5ABF5D]">(83) XXXX-XXXX</p>
                                            <p className="hover:text-[#5ABF5D]">Seg a Sex de 9h às 18h | Sáb até 14h</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                        
                    </div>
                    {/* Fim do container relativo para o dropdown */}

                    <MdOutlineShoppingCart size={25} color="white"/>
                </div>
            </div>
        </section>

        <nav className="bg-white w-full h-16 flex items-center gap-[142px] justify-center shadow-sm z-10 ">
            <MenuItem>Todos os produtos</MenuItem>
            <MenuItem>Atacado</MenuItem>
            <MenuItem>Varejo</MenuItem>
        </nav>

        <section className="bg-[#E2E8F0] h-12 w-full flex items-center justify-center gap-2 px-4">
            <MdOutlineLocalShipping size={25} /> 
            <p>Frete grátis em pedidos a cima de R$100 em todo <strong>NORDESTE</strong></p>
        </section>

    </header>
    )
}
