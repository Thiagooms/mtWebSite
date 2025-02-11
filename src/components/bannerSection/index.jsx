import boneBanner from "../../assets/imgs/boneBanner.png"
import logoblack from "../../assets/imgs/logoblack.png"

export function BannerSection(){
    return(
        <>

            <section className="flex justify-center items-center w-full">

                <div className="flex items-center gap-[30px]">
                    <img src={logoblack} alt="" className="h-15"/>
                    <div className="bg-black w-1 h-24 rounded-2xl"></div>
                    <div className="text-center font-bold text-2xl leading-6 translate-x-[-5px]"
                    
                    
                    >PERSONALIZE SUA HISTÓRIA<br></br>COM A GENTE </div>
                    {/* <span className="">COM A GENTE</span> */}
                </div>

                <div>
                    <img src = {boneBanner} alt="" className="w-[71.25rem]" />
                </div>
            </section>
                        
        </>
    )
}

