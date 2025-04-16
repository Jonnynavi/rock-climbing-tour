import { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";


function Booking(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [smallGroup, setSmallGroup] = useState(false);
    const [largeGroup, setLargeGroup] = useState(false);

    const handleLargeGroup = () =>{
        setSmallGroup(false);
        setLargeGroup(true);
        
    }

    const handleSmallGroup = () =>{
        setLargeGroup(false);
        setSmallGroup(true);
        
    }


    return(
        <section className="section-booking">
            <div className="booking">
                <Heading className="u-margin-bottom-med">Start Booking Now</Heading>
                <form className="form">    
                    <div className="form__group">
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form__input" placeholder="Full Name" id="name" required />
                        <label for="name" className="form__label">Full Name</label>
                    </div>
                    <div className="form__group">
                        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="form__input" id="email" required />
                        <label for="email" className="form__label">Email</label>
                    </div>
                    <div className="form__group">
                        <div className="form__radio-group">
                            <input type="radio" id="small" className="form__radio-input" onClick={handleSmallGroup} checked={smallGroup} name="size"></input>
                            <label for="small" className="form__radio-label">
                                <span className={`form__radio-button ${smallGroup ? "form__radio-button--fill" : "" }`}></span>
                                Small Group Tour
                            </label>
                        </div>
                        <div className="form__radio-group">
                            <input type="radio" id="large" className="form__radio-input" onClick={handleLargeGroup} checked={largeGroup} name="size"></input>
                            <label for="large" className="form__radio-label">
                                <span className={`form__radio-button ${largeGroup ? "form__radio-button--fill" : "" }`}></span>
                                Large Group Tour
                            </label>
                        </div>
                    </div>

                    <Button orange>Next Step →</Button>
                </form>
            </div>
        </section>
    )
}

export default Booking;