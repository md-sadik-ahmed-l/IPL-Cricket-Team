import React, { use } from 'react';
import PlayersData from './PlayersData';

const PlayersCard = ({PlayersPromise}) => {

    const PlayersCard = use(PlayersPromise)

    return (
        <div>
            <div className='flex justify-between'>

                <h4>Available Players</h4>

                <div>
                    <button>Available</button>
                    <button>Selected</button>
                </div>

            </div>

            <div className='grid grid-cols-3 gap-15 border '>
                {
                    PlayersCard.map(playerData =><PlayersData  playerData={playerData}></PlayersData> )
                }
                
            </div>

        </div>
    );
};

export default PlayersCard;