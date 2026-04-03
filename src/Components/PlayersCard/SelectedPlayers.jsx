import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, setDollar, dollar}) => {

    console.log(selectedPlayers, "selectedPlayers")


    const handleDeleteSelectedPlayer = (playerData)=>{
        console.log(selectedPlayers, "selectedPlayers")

       
        
        const filteredPlayers = selectedPlayers.filter(
            (selectedPlayer) => selectedPlayer.name !== playerData.name
        )

        console.log(filteredPlayers, "filteredPlayers")
        setSelectedPlayers(filteredPlayers)
        setDollar(dollar + playerData.price)
    }
    return (
        <div>
            { selectedPlayers.length === 0 ? 
                <div className='flex flex-col items-center  gap-3 mt-10 '>
                    <h3 className='font-medium text-2xl sm:text-4xl'>No players Selected yet</h3>
                    <p className='font-medium text-xl sm:text-3xl'>Go to Available tab to select Players</p>
                </div>
                :selectedPlayers.map((playerData) =>{
                    return <div className='flex justify-between items-center border rounded-2xl p-4 my-6'> 
                        <div className='flex items-center gap-4'>
                            <img className='w-25 rounded-2xl ' src={playerData.image} alt="Player image" />
                            <div className=''>
                                <h1 className='font-bold text-2xl pb-3'>{playerData.name}</h1>
                                <p className='font-semibold '>{playerData.role}</p>
                            </div>
                        </div>
                        <button onClick={()=> handleDeleteSelectedPlayer(playerData)} className=' p-3 bg-[#c2b9b6] rounded-xl text-4xl  '>
                            <MdDeleteForever></MdDeleteForever>
                        </button>

                    </div>
                    

                })
            }
        </div>
    );
};

export default SelectedPlayers;