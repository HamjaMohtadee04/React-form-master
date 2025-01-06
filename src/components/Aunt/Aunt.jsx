import Cousin from "../Cousin/Cousin";


const Aunt = () => {
    return (
        <div>
            <h2>aunt</h2>
            <sectin className="flex">
                <Cousin name={'siam'}></Cousin>
                <Cousin name={'ahanoa'}></Cousin>
            </sectin>
        </div>
    );
};

export default Aunt;