import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/Granpa";


const Aunt = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>aunt</h2>
            <sectin className="flex">
                <Cousin name={'siam'}></Cousin>
                <Cousin name={'ahanoa'}></Cousin>
            </sectin>
            <p>Money:{money}</p>
            <button onClick={()=> setMoney(money+1000)}>add 1000 tk</button>
        </div>
    );
};

export default Aunt;