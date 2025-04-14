import FeatureCard from "./FeatureCard";

function Features(){
    return(
        <section className="section-features">
            <div className="section-features__content">
                <FeatureCard icon="people" title="Meet new People">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </FeatureCard>
                <FeatureCard icon="explore" title="explore new areas">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </FeatureCard>
                <FeatureCard icon="healthy" title="get healthy">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </FeatureCard>
                <FeatureCard icon="mountain" title="climb new mountains">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                </FeatureCard>
            </div>
        </section>
    )
}

export default Features;