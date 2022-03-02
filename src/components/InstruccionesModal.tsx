import React from 'react';

type StatusProps = {
    setShowGame: any;
};

function InstruccionesModal(props: StatusProps) {
    const handleClickJugar = () => {
        const containerInstrucciones = document.getElementById(
            'containerInstrucciones'
        );
        props.setShowGame(true);
        containerInstrucciones?.classList.add('hidden');
    };

    return (
        <div
            id='containerInstrucciones'
            className='container absolute top-0 rounded border-2 border-black w-5/12 bg-[#F3F3F3] flex flex-col items-center justify-center z-50'
        >
            <h2 className='text-center font-bold text-2xl'>Cómo jugar</h2>
            <section className='p-5'>
                <p>Adivina la palabra oculta en cinco intentos</p>
                <p>Cada intento debe ser una palabra valida de 5 letras</p>
                <p>
                    Despues de cada intento el color de las letras cambia para
                    mostrar que tan cerca estas de acertar la palabra
                </p>
            </section>
            <section className='w-full'>
                <p className='mx-5 mb-5'>
                    <strong>Ejemplos</strong>
                </p>
                <article className='flex items-center justify-center w-1/2 mx-auto'>
                    <span className='rounded border border-black w-1/5 m-3 p-3 font-bold bg-[#6AAA64]'>
                        G
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        A
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        T
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        O
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        S
                    </span>
                </article>
                <p className='px-5'>
                    La letra <strong>G</strong> está en la palabra y en la
                    posición correcta.
                </p>
                <article className='flex items-center justify-center w-1/2 mx-auto'>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        V
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        O
                    </span>
                    <span className='bg-[#CEB02C] rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        C
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        A
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        L
                    </span>
                </article>
                <p className='px-5'>
                    La letra <strong>C</strong> está en la posición incorrecta.
                </p>
                <article className='flex items-center justify-center w-1/2 mx-auto'>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        C
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        A
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        N
                    </span>
                    <span className='bg-white rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        T
                    </span>
                    <span className='bg-[#939B9F] rounded border border-black w-1/5 m-3 p-3 font-bold'>
                        O
                    </span>
                </article>
                <p className='px-5'>
                    La letra <strong>O</strong> no está en la palabra.
                </p>
            </section>
            <p className='px-5 mt-5 mb-5'>
                Puede haber palabras repetidas. Las pistas son independientes
                para cada letra.
            </p>
            <p className='text-center mt-5 mb-5'>
                ¡Una palabra nueva cada cinco minutos!
            </p>
            <button
                onClick={handleClickJugar}
                className='text-center mt-5 mb-5 bg-[#6AAA64] p-3 px-16 text-white rounded'
            >
                ¡JUGAR!
            </button>
        </div>
    );
}

export default InstruccionesModal;
