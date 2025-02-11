import { StatsItem } from "../StatsItem";

export function StatsSection ({id, stats, description}){
    return (
        <>
        
            <section className="flex flex-col justify-center items-center w-full h-[42.67rem] mt-24 mb-24">
                <span className="bg-black w-3 h-3 rounded-[50%]"></span>
                <h2 className="font-bold text-[2.5rem]">
                    POR QUE ESCOLHER NOSSOS BONÉS PERSONALIZADOS?
                </h2>
                <p className="text-2xl opacity-80">
                    QUALIDADE SUPERIOR, DESIGN CRIATIVO E  SATISFAÇÃO GARATINDA
                </p>

                <div className="mt-32 gap-5 flex direction-row">
                    <StatsItem />
                    <StatsItem />
                    <StatsItem />
                </div>
            </section>
        </>
    )
}