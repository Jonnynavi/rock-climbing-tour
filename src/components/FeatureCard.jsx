import { GiMountains } from "react-icons/gi";
import { IoIosPeople, IoIosHeartEmpty } from "react-icons/io";
import { CiMap } from "react-icons/ci";

function FeatureCard({children, icon, title}){
    const logo = () => {
        switch (icon){
            case "people":
                return <IoIosPeople className="feature-card__icon"/>
            case "mountain":
                return <GiMountains className="feature-card__icon"/>
            case "healthy":
                return <IoIosHeartEmpty className="feature-card__icon"/>
            case "explore":
                return <CiMap className="feature-card__icon"/>

        }
    } 
    return(
        <div className="feature-card">
            {logo()}
            <h3 className="feature-card__title">{title}</h3>
            <p className="feature-card__text">{children}</p>
        </div>
    )
}

export default FeatureCard;