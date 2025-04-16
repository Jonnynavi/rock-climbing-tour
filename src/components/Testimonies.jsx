import Heading from "./Heading";
import Testimony from "./testimony.JSX";
import video from "../images/mountain-background.mp4";
import user1 from "../images/testimony-1.jpg";
import user2 from "../images/testimony-2.jpg";
import Button from "./Button";



function Testimonies(){
    return(
        <section className="section-testimonies">
            <Heading className="u-margin-bottom-big">People Love our Tours</Heading>

            <div className="bg-video">
                <video className="bg-video__content"  autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser is not supported
                </video>
            </div>

            <Testimony img={user1} name="Gil Sanchez" heading="Met Life Long Friends" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam culpa molestias porro quo animi, dicta tenetur deleniti pariatur sed, sint, repudiandae reiciendis voluptate quis dolorem ea itaque corrupti nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam culpa molestias porro quo animi, dicta tenetur deleniti pariatur sed, sint, repudiandae reiciendis voluptate quis dolorem ea itaque corrupti nobis.
            </Testimony>

            <Testimony img={user2} name="Kevin Pham" heading="difficult but a life changing experince" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam culpa molestias porro quo animi, dicta tenetur deleniti pariatur sed, sint, repudiandae reiciendis voluptate quis dolorem ea itaque corrupti nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam culpa molestias porro quo animi, dicta tenetur deleniti pariatur sed, sint, repudiandae reiciendis voluptate quis dolorem ea itaque corrupti nobis.
            </Testimony>

            <Button className="u-margin-top-med" text>Discover all tours →</Button>
        </section>
    )
}

export default Testimonies;