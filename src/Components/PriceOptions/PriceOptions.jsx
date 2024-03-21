import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {


    const priceless = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 50,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access",
                "Group fitness classes"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 80,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access",
                "Group fitness classes",
                "Personal training sessions (1/month)"
            ]
        },
        {
            "id": 4,
            "name": "VIP Membership",
            "price": 120,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access",
                "Group fitness classes",
                "Personal training sessions (2/month)",
                "Access to sauna and spa facilities"
            ]
        }
    ]



    return (
        <div>
            <h2 className="text-7xl font-bold text-center mt-4">Best price in the town </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-20">
                {

                    priceless.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};



export default PriceOptions;