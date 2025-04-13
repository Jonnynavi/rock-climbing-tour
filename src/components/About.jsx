import Heading from "./Heading";

function About(){
    return(
        <section className="section-about">
            <div className="u-margin-bottom-big">
                <Heading>Exciting tours for all skill Levels</Heading>
            </div>
            <div className="section-about__content">
                <div className="section-about__left">
                    <h3 className="heading-tertiary">You're rock climbing skills are going to sky rocket</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Praesentium doloremque cupiditate ratione porro tempore explicabo adipisci suscipit 
                        voluptatem nobis dolores iusto officia, eaque quisquam, ea sed blanditiis quo iure nihil?
                    </p>
                    <h3 className="heading-tertiary">Meet people who have the same Interest</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Praesentium doloremque cupiditate ratione porro tempore explicabo.
                    </p>
                </div>
                <div className="section-about__right">

                </div>
            </div>
        </section>
    )
}

export default About;