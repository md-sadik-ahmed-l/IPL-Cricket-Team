import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

const PlayersCard = ({PlayersPromise, setDollar, dollar}) => {

    const Players = use(PlayersPromise)
    // const {id} =playerData;

    const [selectedType, setSelectedType] = useState("available");

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className=''>
            <div className='flex justify-between pb-6'>

                {selectedType === "available" ? 
                <h4 className='font-bold text-2xl'>Available Players ( {Players.length} )</h4> 
                : 
                <h4 className='font-bold text-2xl'>Selected Players ( { selectedPlayers.length }/{Players.length} ) </h4>}

                <div className=''>
                    <button 

                        onClick={() => setSelectedType("available")}
                        className={` ${selectedType === "available" ? "bg-gradient-to-r from-pink-400 to-yellow-400 text-black" : ""} 
                        font-semibold text-xl bg-[#dbd9d9] rounded-xl  cursor-pointer mr-5 px-8 py-3 shadow-2xl`}

                        >

                        Available
                    </button>


                    <button 
                        onClick={() => setSelectedType("selected")}
                        className={` ${selectedType === "selected" ? "bg-gradient-to-r from-pink-400 to-yellow-400 text-black" : ""} 
                        font-semibold text-xl rounded-xl  cursor-pointer px-6 py-3 bg-[#dbd9d9] `}

                        >
                        
                        Selected( {selectedPlayers.length} )
                    </button>

                </div>

            </div>

            
            {selectedType === "available" ? 
                <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-5'>
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