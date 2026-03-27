import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers}) => {

    console.log(selectedPlayers, "selectedPlayers")


    const handleDeleteSelectedPlayer = (playerData)=>{
        console.log(selectedPlayers, "selectedPlayers")

       
        
        const filteredPlayers = selectedPlayers.filter(
            (selectedPlayer) => selectedPlayer.name !== playerData.name
        )

        console.log(filteredPlayers, "filteredPlayers")
        setSelectedPlayers(filteredPlayers)
    }
    return (
        <div>
            {
                selectedPlayers.map((playerData) =>{
                    return <div className='flex justify-between items-center border p-4 my-6'> 
                        <div className='flex items-center gap-4'>
                            <img className='w-20' src={playerData.image} alt="" />
                            <div >
                                <h1 className='font-bold text-xl'>{playerData.name}</h1>
                                <p className='font-semibold '>{playerData.role}</p>
                            </div>
                        </div>
                        <button onClick={()=> handleDeleteSelectedPlayer(playerData)} className='border p-4 bg-red-200 rounded-xl text-4xl  '>
                            <MdDeleteForever></MdDeleteForever>
                        </button>
                    </div>
                    

                })
            }
        </div>
    );
};

export default SelectedPlayers;