import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-orange-100 p-4 text-center rounded-xl py-12">
            <h2>
                <span className="text-7xl">{price}</span>
                <span className="text-3xl">/mon</span>

            </h2>
            <h4 className="text-3xl">{name}</h4>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
        </div>
    );
};

export default PriceOption;