import './About.css'
import aboutImg from '../../../Assets/Images/about.jpg'
function About () {
   return (
      <section className="about" id="about-me">
            <div className="container">
                <picture className="about__pictures">
                    <source
                    type="image/webp"
                    media="(max-width: 680px)"
                    srcset="../../../Assets/Images/about-mobile.webp 1x, ../../../Assets/Images/about-mobile@2x.webp 2x"/>
                    <source
                    type="image/webp"
                    media="(max-width: 950px)"
                    srcset="../../../Assets/Images/about-tablet.webp 1x, ../../../Assets/Images/about-tablet@2x.webp 2x"/>
                    
                    <source
                    type="image/webp" 
                    srcset="../../../Assets/Images/about.webp 1x, ../../../Assets/Images/about@2x.webp 2x"
                    />
                    <source
                    media="(max-width: 680px)"
                    srcset="../../../Assets/Images/about-mobile.jpg 1x, ../../../Assets/Images/about-mobile@2x.jpg 2x"/>
                    <source
                    media="(max-width: 950px)"
                    srcset="../../../Assets/Images/about-tablet.jpg  1x, ../../../Assets/Images/about-tablet@2x.jpg 2x"/>
                    
                    <img
                    src={aboutImg}
                    srcset="../../../Assets/Images/about.jpg 1x, ../../../Assets/Images/about@2x.jpg 2x"
                    alt="about me image"
                    width="540"
                    height="600"
                    />
                </picture>
                <div className="about__info">
                    <span className="about__line-top"></span>
                    <h2 className="about__info__heading section-heading ">
                        About Me
                    </h2>Name
                    <p className="about__info__paragraph">
                        I’m a junior front-end developer looking for a new role in an exciting company. 
                        I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. 
                        When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. 
                        I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. 
                        When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, 
                        run or cycling. I’d love you to check out my work.
                    </p>
                    <a className="about__info__link" href="./portfolio.html" >GO TO PORTFOLIO</a>
                    <span className="about__line-bottom"></span>
                </div>
            </div>
        </section>
   )
}

export default About;