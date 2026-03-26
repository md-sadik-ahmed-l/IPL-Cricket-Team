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
            <div className='flex justify-between pb-10'>

                {selectedType === "available" ? 
                <h4 className='font-bold text-2xl'>Available Players</h4> 
                : 
                <h4 className='font-bold text-2xl'>Selected Players</h4>}

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
                        
                        Selected (0)
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

                <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>

            }
                
        </div>
    );
};

export default PlayersCard;