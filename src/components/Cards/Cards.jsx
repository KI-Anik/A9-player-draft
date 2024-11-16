
const Cards = () => {
    return (
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Avaiable player</h2>
            <div className="flex gap-4 border p-3 rounded-xl font-semibold">
                <button>Available</button>
                <button>Selected</button>
            </div>
        </div>
    );
};

export default Cards;