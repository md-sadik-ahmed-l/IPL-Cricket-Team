import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const PlayersCard = ({PlayersPromise, setDollar, dollar}) => {

    const Players = use(PlayersPromise)
    // const {id} =playerData;

    const [selectedType, setSelectedType] = useState("available");

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div>
            <div className='flex justify-between pb-6'>

                {selectedType === "available" ? 
                <h4 className='font-bold text-2xl'>Available Players ( {Players.length} )</h4> 
                : 
                <h4 className='font-bold text-2xl'>Selected Players ( { selectedPlayers.length }/{Players.length} ) </h4>}

                <div className=''>
                    <button 

                        onClick={() => setSelectedType("available")}
                        className={` ${selectedType === "available" ? "bg-green-400" : ""} 
                        font-semibold border rounded-xl  cursor-pointer m-3 px-4 py-2`}

                        >

                        Available
                    </button>


                    <button 
                        onClick={() => setSelectedType("selected")}
                        className={` ${selectedType === "selected" ? "bg-green-400" : ""} 
                        font-semibold border rounded-xl  cursor-pointer px-4 py-2 `}

                        >
                        
                        Selected( {selectedPlayers.length} )
                    </button>

                </div>

            </div>

            
            {selectedType === "available" ? 
                <div className='flex flex-wrap justify-between  gap-5'>
                    {
                    Players.map(playerData =><AvailablePlayers key={playerData.id} playerData={playerData} setDollar={setDollar} dollar={dollar} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></AvailablePlayers> )
                    }
                    
                </div>

                :

                <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setDollar={setDollar} dollar={dollar}></SelectedPlayers>

            }
                
        </div>
    );
};

export default PlayersCard;