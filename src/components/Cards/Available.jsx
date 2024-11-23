import React from 'react';

const Available = ({info,handleSelectedPlayer,selectedPlayers}) => {
    return (
        <div className=" rounded-3xl bg-base-100 shadow-xl p-5">
                        <figure className="">
                            <img
                            className='rounded-lg h-[250px] w-full object-cover object-top'
                                src={info.image}
                                alt="player image" />
                        </figure>
                        <div className="">
                            <h2 className="card-title">{info.name}</h2>
                            <p>{info.country}</p>
                            <p>{info.role }</p>
                            <hr />
                            <h4 className="font-bold">Rating</h4>
                            <p>{info.battingType}</p>
                            <div className="flex justify-between">
                                <h4>Price : {info.biddingPrice}</h4>
                                <button onClick={() => handleSelectedPlayer(info)} className="p-3 rounded-xl bg-gray-400">choose Player</button>
                            </div>
                        </div>
                    </div>
    );
};

export default Available;