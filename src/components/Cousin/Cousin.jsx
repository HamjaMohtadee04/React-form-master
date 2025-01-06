import Special from "../Special/Special";


const Cousin = ({name,asset}) => {
    return (
        <div>
            <h2>cousin</h2>  
            <p>{name}</p>    
            <section>
              {asset && <Special asset={asset}></Special>}
                </section>      
        </div>
    );
};

export default Cousin;