import React from 'react';

type StatusProps = {
    setKeyPressed: Function;
}

function Teclado(props: StatusProps) {

    const handleKeyPressed = (e: any) => {
        const id = e.target.id;
        const char = String.fromCharCode(id);
        console.log("Key pressed: " + char);
        props.setKeyPressed(char);
    }

    return (
        <div className='container w-1/3'>
            <section className='w-full flex items-center h-14 ml-3'>
                <div id="113" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    Q
                </div>
                <div id="119" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    W
                </div>
                <div id="101" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    E
                </div>
                <div id="114" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    R
                </div>
                <div id="116" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    T
                </div>
                <div id="121" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    Y
                </div>
                <div id="117" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    U
                </div>
                <div id="105" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    I
                </div>
                <div id="111" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    O
                </div>
                <div id="112" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    P
                </div>
            </section>

            <section className='w-full flex items-center h-14 ml-7'>
                <div id="97" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    A
                </div>
                <div id="115" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    S
                </div>
                <div id="100" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    D
                </div>
                <div id="102" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    F
                </div>
                <div id="103" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    G
                </div>
                <div id="104" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    H
                </div>
                <div id="106" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    J
                </div>
                <div id="107" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    K
                </div>
                <div id="108" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    L
                </div>
                <div id="241" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    Ñ
                </div>
            </section>
            <section className='w-full flex items-center h-14'>
                <div id="13" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-sm h-12 w-16'>
                    ENTER
                </div>
                <div id="122" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    Z
                </div>
                <div id="120" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    X
                </div>
                <div id="99" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    C
                </div>
                <div id="118" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    V
                </div>
                <div id="98" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    B
                </div>
                <div id="110" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    N
                </div>
                <div id="109" onClick={handleKeyPressed} className='bg-[#D3D6DA] cursor-pointer mx-1 flex items-center justify-center rounded-lg text-lg h-12 w-12'>
                    M
                </div>
                <div onClick={handleKeyPressed} className='bg-[#D3D6DA] text-sm cursor-pointer mx-1 flex items-center justify-center rounded-lg h-12 w-16'>
                    BORRAR
                </div>
            </section>
        </div>
    );
}

export default Teclado;
