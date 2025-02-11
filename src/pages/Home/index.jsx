import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import Slider from "react-slick";
import styles from "./Home.module.css";
import Banner01 from "../../assets/imgs/slider1.png";
import Banner02 from "../../assets/imgs/slider2.png";
import { GenericSection } from "../../components/GenericSection";
import ProductsJSON from "../../mocks/products.json";
import { StatsSection } from "../../components/StatsSection";
import { BannerSection } from "../../components/bannerSection";


export function Home(){
    
    const navigate = useNavigate()

    let settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        appendDots: (dots) => (
            <div className={styles.dotsContainer}>
              <ul className={styles.dotsList}>{dots}</ul>
            </div>
          ),
          customPaging: () => <div className={styles.dot}></div>,
    };

    

    return (
        <> 
            <Header />

            <Slider {...settings}>
                <div onClick={() => navigate("#")}>
                    <img src={Banner01} alt="" />
                </div>
                <div onClick={() => navigate("#")}>
                    <img src={Banner02} alt="" />
                </div>
            </Slider>

            <StatsSection />

            <BannerSection />

            <GenericSection title="MAIS VENDIDOS" titleButton="VEJA NOSSOS PRODUTOS" products={ProductsJSON} />


        </>
    )
}