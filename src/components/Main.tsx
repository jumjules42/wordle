import React, { useState } from 'react';
import Game from './Game';
import InstruccionesModal from './InstruccionesModal';

function Main() {
    const [showGame, setShowGame] = useState(false);

    return (
        <div className="flex justify-center items-center w-full">
            <InstruccionesModal setShowGame={setShowGame} />
            {showGame ? <Game /> : ""}
        </div>
    )
}

export default Main;