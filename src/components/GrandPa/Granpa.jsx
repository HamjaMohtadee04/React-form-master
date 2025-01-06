import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

// creating context api
const AssetContext = createContext('gold')

const Granpa = () => {
    const asset ="diamond"
    return (
        <div className="grandpa">
            <h2>grandpa</h2>
         <AssetContext.Provider value="gold">
         <section className="flex">
           <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>
          </section>
         </AssetContext.Provider>
        </div>
    );
};

export default Granpa;



// for using context api
// 1.create a context and export it
//2.add provider for the context with a value