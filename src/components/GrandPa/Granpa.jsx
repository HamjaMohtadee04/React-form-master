import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

// creating context api
export const AssetContext = createContext('gold')
export const MoneyContext = createContext(1000)

const Granpa = () => {
    const asset ="diamond"
    const [money,setMoney] = useState(1000)
    return (
        <div className="grandpa">
            <h2>grandpa</h2>
         <p>Net Money:{money}</p>
         <MoneyContext.Provider value={[money,setMoney]}>
         <AssetContext.Provider value="gold">
         <section className="flex">
           <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>
          </section>
         </AssetContext.Provider>
         </MoneyContext.Provider>
        </div>
    );
};

export default Granpa;



// for using context api
// 1.create a context and export it
//2.add provider for the context with a value