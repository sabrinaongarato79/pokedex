import pokebola from "../assets/pokebola.png";

const TitleStats = ({label}) => {
    return <div className="title-stats">
        <span>{label}</span>
        <img src={pokebola} alt="Pokebola"/>
    </div>
}

export default TitleStats;
