import { FaChevronRight } from "react-icons/fa";
export function MenuItem({ children }){
    return (
        <a href="" className="flex gap-1 items-center font-semibold">
                        
            {children}
            <FaChevronRight size={10} className="mt-[2px]"/>
        </a>
    )
}