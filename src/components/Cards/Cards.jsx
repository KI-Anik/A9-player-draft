
const Cards = ({ allPlayers }) => {
    return (
        <div>
            <div  className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Avaiable player : {allPlayers.length}</h2>
            <div className="flex gap-4 border p-3 rounded-xl font-semibold">
                <button>Available </button>
                <button>Selected</button>
            </div>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-3 gap-5 mt-8 ">

            {
                allPlayers.map(player =>
                    <div key={player.playerId} className=" rounded-3xl bg-base-100 shadow-xl p-5">
                        <figure className="">
                            <img
                            className='rounded-lg'
                                src={player.image}
                                alt="player image" />
                        </figure>
                        <div className="">
                            <h2 className="card-title">{player.name}</h2>
                            <p>{player.country}</p>
                            <p>{player.role }</p>
                            <hr />
                            <h4 className="font-bold">Rating</h4>
                            <p>{player.battingType}</p>
                            <div className="flex justify-between">
                                <h4>Price : {player.biddingPrice}</h4>
                                <button className=" bg-gray-400">choose Player</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </div>

        </div>
    );
};

export default Cards;