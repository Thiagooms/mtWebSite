export function CardProduct({title, badgeTitle, lineTitle, price, image}){
    return (
        <div className="h-[32.5rem] w-[28.75rem] bg-white shadow-md rounded-[5px]">
            
            <div className="w-[28.75rem] h-[28.75rem] relative ">
                <p className="w-[11.625rem] h-6 bg-black rounded-[15px] text-white flex items-center justify-center absolute top-5 left-[50%] translate-[-50%] font-semibold text-xs">
                    {
                        badgeTitle
                    }
                </p>
                <img className="object-cover max-w-full max-h-full min-w-[28.75rem] min-h-[28.75rem]" 

                src={
                    image
                } 
                alt= {
                    title
                } />
            </div>

            <div className="flex justify-between mt-2.5 mx-5 mb-3 ">
                
                <div>
                    <h4 className="leading-none">
                        {
                            title
                        }
                    </h4>
                    <p className="font-semibold underline">
                        {
                            lineTitle
                        }
                    </p>
                </div>

                <div>
                    <p className="leading-none">
                        A partir de
                    </p>

                    <p className="font-semibold">
                        {
                            price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            })
                        }
                    </p>

                </div>
            </div>

        </div>
    )
}