/* eslint-disable react/prop-types */

const Selected = ({ selectedPlayers, handleDelete, handleAddMore }) => {
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

                <p> ${p.biddingPrice}</p>
                <button onClick={()=>handleDelete(p)}>Delete</button>
            </div>)}
            <button onClick={()=> handleAddMore()} className='btn mt-8'>Add More</button>
        </div>
    );
};

export default Selected;