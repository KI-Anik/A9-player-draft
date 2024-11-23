import Available from "./Available";

/* eslint-disable react/prop-types */
const Cards = ({ allPlayers, handleBtnActive, btnActive, handleSelectedPlayer,selectedPlayers }) => {
    return (
        <div>
            <div  className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Avaiable player : {allPlayers.length}</h2>
            <div className="flex gap-4 border p-2 rounded-2xl font-semibold">
                <button onClick={() =>handleBtnActive(true) } className={`${btnActive.status? 'button bgColor' : 'button'}`}>Available </button>
                <button onClick={() =>handleBtnActive(false) } className={`${btnActive.status? 'button ' : 'button bgColor'}`} >Selected</button>
            </div>
            </div>
            <div className="w-11/12 mx-auto grid grid-cols-3 gap-5 mt-8 ">
    
            {
                allPlayers.map(player => <Available key={player.playerId}
                    info={player}
                    handleSelectedPlayer={handleSelectedPlayer}
                    selectedPlayers={selectedPlayers}
                    ></Available>
                   
                )
            }


            </div>
        </div>
    );
};

export default Cards;