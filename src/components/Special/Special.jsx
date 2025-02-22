import { useContext } from "react";
import { AssetContext } from "../GrandPa/Granpa";


const Special = ({asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>special</h2>
            <p>has:{asset}</p>
            <p>also has : {gift}</p>
        </div>
    );
};

export default Special;