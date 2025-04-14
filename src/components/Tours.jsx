import Button from "./Button";
import Heading from "./Heading"
import RotatingCard from "./RotatingCard";

function Tours(){
    return(
        <section className="section-tours">
            <Heading>Most popular tours</Heading>
            <div className="section-tours__content">
                <RotatingCard title="The Pebble Path" cardNumber="1" details={["3 day tour","Up to 30 people", "4 mountains", "Sleep in Hotel", "Difficulty: easy"]} />
                <RotatingCard title="The Forest Path" cardNumber="2" details={["7 day tour","Up to 40 people", "8 mountains", "Sleep in Cabins", "Difficulty: medium"]} />
                <RotatingCard title="The Frozen Path" cardNumber="3" details={["5 day tour","Up to 15 people", "4 mountains", "Sleep in tents", "Difficulty: hard"]} />

            </div>
            <Button white>Discover all tours</Button>
        </section>
    )
}

export default Tours;