import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AvailablePlayers = ({playerData, setDollar, dollar, setSelectedPlayers, selectedPlayers}) => {

    const { image, name, flag, country, role, rating, battingStyle, bowlingStyle, price } =playerData;
    const [isSelected, setIsSelected] = useState(false);

    const handleChoosePlayer = ()=>{

        let newDollar =dollar  - playerData.price;
        if(newDollar >= 0){
            setDollar(dollar - playerData.price)
        }else{
            toast("Not enough Dollar to purchase this Player!")
            return;
        }

        alert( `${playerData.name} is selected`)
        setIsSelected(true)
        setSelectedPlayers([...selectedPlayers, playerData])

    }

    return (
        <div className=' border rounded-2xl p-4 w-80'>
            
            <span><img className='rounded-2xl' src={image} alt="Player image" /></span>
            <div className='flex items-center font-bold text-2xl pt-3 gap-2'>
                
                <FaUserAlt></FaUserAlt>
                <h3 className=''>{name}</h3>

            </div>
            
            
            <div className='py-4'>

                <div className='flex justify-between pb-2'>
                    <div className='flex gap-3'>
                        <img className='w-8' src={flag} alt="Country Flag" />
                        <h5>{country}</h5>
                    </div>

                    <h4 className=' rounded-xl py-1 px-3 bg-[#f2f1f1]'>{role}</h4>

                </div>

                <div className='flex gap-4'>
                    <p>Rating-</p>
                    <h6>{rating}</h6>
                </div>
                <div className='flex justify-between gap-2'>
                    <p>Batting Style : </p>
                    <p>{battingStyle}</p>
                </div>
                <div className='flex justify-between gap-2'>
                    <p>Bowling Style : </p>
                    <p>{bowlingStyle}</p>
                </div>

            </div>

            <div className='flex justify-between items-center gap-6'>

                <h2 className='font-semibold'>Price: ${price}</h2>

                <button 
                    className={`font-semibold border rounded-xl ${isSelected ? "":"hover:bg-amber-200"} cursor-pointer px-3 py-1 `}
                    onClick={handleChoosePlayer}
                    disabled={isSelected}
                    // disabled = {isSelected ? true : false}
                >
                    {isSelected ? "selected": "Choose Player"}</button>
            </div>

        </div>
    );
};

export default AvailablePlayers;