import React, { useEffect, useState } from 'react';

function Navbar() {
    const [seeInstrucciones, setSeeInstrucciones] = useState(false);

    useEffect(() => {
        if (seeInstrucciones) {
            const containerInstrucciones = document.getElementById(
                'containerInstrucciones'
            );
            containerInstrucciones?.classList.remove('hidden');
        }
    }, [seeInstrucciones]);

    const handleClickInstrucciones = (e: any) => {
        setSeeInstrucciones(!seeInstrucciones);
    };

    return (
        <nav className='z-10 w-1/3 rounded container bg-[#F3F3F3] flex items-center justify-between p-5 h-20'>
            <img
                onClick={handleClickInstrucciones}
                className='cursor-pointer'
                src='../img/icon-pregunta.png'
                alt='Instrucciones.'
            />
            <h2 className='text-4xl'>WORDLE</h2>
            <article className='flex items-center justify-end'>
                <img
                    className='cursor-pointer'
                    src='../img/icon-chart.png'
                    alt='Estadisticas.'
                />
                <img
                    className='cursor-pointer'
                    src='../img/icon-switch.png'
                    alt='Tema.'
                />
            </article>
        </nav>
    );
}

export default Navbar;
