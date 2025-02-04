import { useNavigate } from "react-router-dom"

export function Product(){
    
    const navigate = useNavigate()

    return (
        <>
            Produto <button onClick={() => navigate("/")}>
                Página Home
            </button>
        </>
    )
}