import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Tablero from './Tablero';
import Teclado from './Teclado';


function Game() {

    const [keyPressed, setKeyPressed] = useState("");
    const [word, setWord] = useState("");

    const readWords = async () => {
        const response = await fetch("../words/words.txt");
        const text = await response.text();
        console.log(response)        
    }

    useEffect(() => {
        readWords();
    }, [])

    return (
        <div className='w-full flex flex-col items-center justify-between'>
            <Navbar />
            <Tablero keyPressed={keyPressed} />
            <Teclado setKeyPressed={setKeyPressed} />
        </div>
    );
}

export default Game;
