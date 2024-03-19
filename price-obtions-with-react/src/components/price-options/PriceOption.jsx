
const PriceOption = ({ option }) => {
    // console.log(option)
    const { name, price, features } = option

    const Features = features.map(
        (feature, idx) => <li key={idx}>✅ {feature}</li>
    )

    return (
        <div className="card  bg-neutral text-white shadow-xl m-2">
            <div className="card-body">
                <div className="mb-4">
                    <h3 className="text-3xl font-bold">{name}</h3>
                    <h3>${price} /month</h3>
                </div>
                <h3 className="text-xl fond-bold">Features:</h3>
                <ul className="ml-4">{Features}</ul>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PriceOption;