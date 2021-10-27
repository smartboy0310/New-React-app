import './Hero.css';

function Hero () {

   return (
      <section className="hero">
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__info">
                        <h1 className="hero__info__heading section-heading">
                            Hey, I’m Alex Spencer and I love building beautiful websites
                        </h1>
                        <a className="hero__info__link" href="#about-me">
                        <svg className="hero__info__link__img"
                            width="18" height="14" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg">
                            <g stroke="#5FB4A2">
                                <path d="M1 9l8 4 8-4" />
                                <path opacity=".5" d="M1 5l8 4 8-4" />
                                <path opacity=".25" d="M1 1l8 4 8-4" />
                            </g>
                            </svg>
                            <span className="hero__info__link__span">ABOUT ME</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
   )
}

export default Hero;