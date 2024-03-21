import axios from "axios";
import { useEffect, useState } from "react";

const Phones = () => {

    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://restcountries.com/v3.1/all')
        //     .then(res => res.json())
        //     .then(data => setPhones(data))
        axios.get('https://restcountries.com/v3.1/all')
            .then(data => setPhones(data.data))


}, [])
return (
    <div>
        <h2 className="text-5xl">{phones.length} </h2>
    </div>
);
};

export default Phones;