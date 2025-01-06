import { useContext } from "react";
import { MoneyContext } from "../GrandPa/Granpa";


const Brother = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
            <h2>bro</h2>
            <p>grandpa:{money}</p>
        </div>
    );
};

export default Brother;