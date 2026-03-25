import React from 'react';

const PlayersData = ({playerData}) => {

    const {image, name, flag, country, role, rating, battingStyle, bowlingStyle, price } =playerData;

    return (
        <div className='m-auto border p-4'>

            <img className='w-' src={image} alt="" />
            <h3>{name}</h3>
            
            <div>

                <div className='flex justify-between '>
                    <div className='flex gap-3'>
                        <img className='w-8' src={flag} alt="" />
                        <h5>{country}</h5>
                    </div>

                    <h4>{role}</h4>

                </div>

                <div>
                    <p>Rating</p>
                    <h6>{rating}</h6>
                </div>
                <div className='flex justify-between gap-2'>
                    <p>Batting Style: </p>
                    <p>{battingStyle}</p>
                </div>
                <div className='flex justify-between gap-2'>
                    <p>Bowling Style: </p>
                    <p>{bowlingStyle}</p>
                </div>

            </div>

            <div className='flex justify-between gap-2'>

                <h2>Price: {price}</h2>

                <button>Choose Player</button>
            </div>

        </div>
    );
};

export default PlayersData;