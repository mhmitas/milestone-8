import { useEffect, useState } from "react";
import PriceOption from "./PriceOption";

const PriceOptions = () => {

    const [priceOptions, setPriceOptions] = useState([])
    useEffect(() => {
        fetch('price-options.json')
            .then(res => res.json())
            .then(data => setPriceOptions(data))
    }, [])

    return (
        <div>
            <h3>Find what suits you</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
                {
                    priceOptions.map(
                        option => <PriceOption key={option.id} option={option}></PriceOption>
                    )
                }
            </div>
        </div>

    );
};

export default PriceOptions;