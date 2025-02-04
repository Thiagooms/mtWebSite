import { MdOutlineLocalShipping, MdOutlineShoppingCart } from "react-icons/md"
import callCenter from "../../assets/imgs/callCenter.png"
import logo from "../../assets/imgs/logo.png"
import store from "../../assets/imgs/store.png"
import { MenuItem } from "./components/MenuItem"
import { TbHeadset } from "react-icons/tb"

export function Header(){
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
                    <div className="text-white text-sm flex items-center space-x-2 hover:text-gray-300" >
                    <TbHeadset size={25} color="white"/>
                    <span>Central de Atendimento</span>
                    </div>

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