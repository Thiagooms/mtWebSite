export function CardProduct(props){
    return (
        <div className="bg-red-500 shadow-md rounded-2xl p-4 w-64">
            <img src={props.image} alt={props.name} />
            <h2 className="mt-2">
                {props.name}
            </h2>
        </div>
    )
}