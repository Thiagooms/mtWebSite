import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"


export function Home(){
    
    const navigate = useNavigate()

    return (
        <>
            <Header />
            Home <button onClick={() => navigate("/produto")}>
                Página produto
            </button>
        </>
    )
}