import { CardProduct } from "../CardProduct";

export function GenericSection({title, titleButton, handleClickButton, products}) {
    return (

        <section className="flex flex-col w-full items-center mb-17 mt-[150px]">
            <span className="w-2 h-2 bg-black mb-[5px] rounded-full"></span>
            <h2 className="text-5xl mb-15 font-bold">{title}</h2>
            <div className="flex mx-w-full gap-5 p-2.5">
                {products?.slice(0,4) .map((product, index) =>
                    (
                        <CardProduct 
                            title= {product.title} 
                            badgeTitle={product.badgeTitle}
                            lineTitle={product.lineTitle}
                            price={product.price}
                            image={product.image}
                        />

                    )
                )}
            </div>
            {titleButton && 
            <button onClick={handleClickButton} className="w-[27.5rem] h-14 rounded-3xl border-black border-2 font-bold mt-15">{titleButton}</button>
            }
        </section>

    )
}