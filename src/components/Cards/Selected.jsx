import React from 'react';

const Selected = ({ selectedPlayers }) => {
    return (
        <div>

            <h2 className='text-3xl font-bold'> Selected Players: {selectedPlayers.length} / 6</h2>

            {selectedPlayers.map(p => <div
                key={p.playerId}
                className='flex justify-between p-1 mt-5 gap-5'>

                <div className='flex gap-5'>
                    <img className=' w-12 rounded-full object-cover' src={p.image} alt="player image" />
                    <div>
                        <h2 className='text-xl font-semibold'>{p.name}</h2>
                        <p>{p.role}</p>
                    </div>
                </div>

                <p className=''> ${p.biddingPrice}</p>
                <button>Delete</button>
            </div>)}
            <button className='btn mt-8'>Add More</button>
        </div>
    );
};

export default Selected;