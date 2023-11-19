import React from "react";
import "./HomePage.scss";
// SwiperJs for Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// Image imports
import headerLogo from "../../assets/header-logo.png";

// Video Imports
import bgMp4 from '../../assets/ezgif.com-gif-maker.mp4'
import bgWebM from '../../assets/ezgif.com-gif-maker.webm'
import { TypeAnimation } from "react-type-animation";
function HomePage(props) {
    return (
        <>
            <main className="homepage">
                <section className="header padding ">
                    <video id="bg-video" autoPlay loop muted playsInline>
                        <source src={bgWebM} type="video/webm" />
                        <source src={bgMp4} type="video/mp4" />
                    </video>
                    <div className="header__brand " id="tsparticles">
                        <h1 className="hidden-title">Wyvern Team</h1>
                        <img
                            src={headerLogo}
                            alt=""
                            className="header__brand__icon"
                        />
                        {/* <h1 style={{fontSize: 35, color: 'white'}}>Welcome!</h1> */}
                        <TypeAnimation
                            sequence={[
                            " Welcome! Our Team",
                            3000,
                            "Powerful Dev Team",
                            3000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{
                            // display: "block",
                            color: "white",
                            fontWeight: 400,
                            fontFamily: "VT323",
                            letterSpacing: 1,
                            fontSize: 55,
                            }}
                        />
                        <p className="header__brand__description">
                        Welcome to our dynamic team of IT professionals! <br/>
                        Our expertise is anchored in the development and implementation of cutting-edge software solutions that empower businesses to operate efficiently and remain at the forefront of technology. With specialized skills ranging from ERP system services to AI Chatbot systems and extensive Web and Mobile App development, we are committed to transforming the digital landscapes of our clients. 
                        </p>
                    </div>
                </section>

                {/* Wrapper for background */}
                <div className="wrapper-top">
                    {/* Stats Section */}

                    <section className="stats padding">
                        {/* <div class="video-container">
                            <iframe
                                class="video-iframe"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Rick Roll"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div> */}
                        <div className="stats__container">
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={73}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                    Unique Clients
                                </p>
                            </div>
                            <div className="stats__container__border"></div>
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={32}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                    Freelancers
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="services padding">
                        <h2 className="services__heading">OUR SERVICES</h2>
                        <div className="services__container">
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./web development.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Web Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    In the fast-evolving digital landscape, our web development team stands as the creative and technical powerhouse behind numerous success stories. 
                                    
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./plugin.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        AI Chatbot Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    We've crafted a user-friendly chatbot system for admissions counseling based on cloud scenarios, complete with natural language processing capabilities.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft configuration.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Next Generation ERP System
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Develop an ERP system from the ground up, complete with integrated in-house portals, a management analysis system designed for intuitive operation, and mobile platforms that provide seamless services on the go
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./Discord Bot.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Discord Bot Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Our dedicated Discord Bot Development Team is at the vanguard of custom bot creation, specializing in designing, coding, and implementing bespoke bots that serve as integral components of Discord servers worldwide.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./design.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Android Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    As we navigate through an era where mobile technology is paramount, our team is at the forefront of delivering seamless, user-focused Android applications that spearhead market trends and set industry standards for excellence.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft design.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        iOS Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Our iOS Development Team is composed of dedicated specialists who are passionate about crafting exquisite, user-centric applications attuned to the elegant ecosystem of Apple devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Features Section */}
                <section className="features padding">
                    <h2 className="features__heading">OUR FEATURES</h2>
                    <div className="features__container">
                        <div className="features__container__item card-hover">
                            <img
                                src="./quality.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Quality
                            </h3>
                            <p className="features__container__item__details">
                            Our team is synonymous with quality, ensuring each project is executed with precision, unparalleled expertise, and an unwavering commitment to excellence.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./AFFORDABLE.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Affordable
                            </h3>
                            <p className="features__container__item__details">
                            At our team, we provide high-quality, cost-effective development solutions tailored to fit any budget, ensuring exceptional value without sacrificing performance.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./EFFICIENT.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Efficient
                            </h3>
                            <p className="features__container__item__details">
                            Our team is defined by efficiency, consistently delivering top-tier results with streamlined processes that maximize productivity and minimize turnaround time.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="PROFESSIONAL.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Professional
                            </h3>
                            <p className="features__container__item__details">
                            Our team exemplifies professionalism in every aspect of our work, upholding the highest standards of competence, reliability, and client-focused service.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="reviews padding">
                    <h2 className="reviews__heading">OUR REVIEWS</h2>

                    <div className="reviews__carousel">
                        <img
                            src="./btn-prev.png"
                            alt="btn-prev"
                            className="prev"
                        />
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev",
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    Their team tackled our complex requirements with ease, delivering a seamless solution that not only met but exceeded our highest expectations.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Craig S. Breese
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    The level of expertise and dedication from the team was outstanding; they delivered on time, within budget, and with exceptional quality that outshone the competition.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Emmett W. Trudell
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    What stood out most was the team's ability to translate our vision into reality, making the journey from concept to launch a masterclass in precision and skill.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Joseph D. Leu
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    Their meticulous attention to detail and innovative approach resulted in a product that has truly given us a competitive edge.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Donald L. Shrum
                                    </h2>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <img src="./btn-next.png" alt="" className="next" />
                    </div>
                </section>
            </main>
        </>
    );
}
import "./HomePage.scss";
import Ticker from "../../components/Ticker/Ticker";

export default HomePage;
