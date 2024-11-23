import React from 'react';

const Available = ({ allPlayers, handleSelectedPlayer,  }) => {
    return (
        <div>
            <h2 className='text-3xl font-bold'>Avaiable Players</h2>
            <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
            {allPlayers.map(player => 
            <div key={player.playerId} className='rounded-3xl bg-base-100 shadow-xl p-5 space-y-8' >

                    <img
                        className='rounded-lg h-[250px] w-full object-cover object-top'
                        src={player.image}
                        alt="player image" />

                <div className="m-2 space-y-3">
                    <h2 className="card-title">{player.name}</h2>
                    <p>{player.country}</p>
                    <p>{player.role}</p>
                    <hr />
                    <h4 className="font-bold">Rating</h4>
                    <p>{player.battingType}</p>
                    <div className="flex justify-between">
                        <p>Price : ${player.biddingPrice}</p>
                        <button onClick={() => handleSelectedPlayer(player)} className="p-2 md:p-3 btn font-bold">choose Player</button>
                    </div>
                </div>
            </div>
            )}
</div>
        </div>
    );
};

export default Available;