import React, { useEffect, useState } from 'react';

type StatusProps = {
    keyPressed: string;
}

function Tablero(props: StatusProps) {

    const [selectedBox, setSelectedBox] = useState("");

    const handleKeyPress = (e: any) => {
        console.log(e.target.value)
        e.target.value = e.target.value.toUpperCase();
    }

    const onFocusHandler = (e: any) => {
        document.getElementById(selectedBox)?.classList.remove("bg-blue-200");
        setSelectedBox(e.target.id);
        document.getElementById(e.target.id)?.classList.add("bg-blue-200");
    }

    const onBlurHandler = (e: any) => {
        document.getElementById(selectedBox)?.classList.remove("bg-blue-200");
    }

    useEffect(() => {
        const input = selectedBox ? document.getElementById(selectedBox) : null;
        if(input === null) {
            return;
        }
        input.setAttribute("value", props.keyPressed.toUpperCase());

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.keyPressed]);


    return (
        <div className='grid grid-cols-5 gap-5 mt-10 mb-10 w-1/3 justify-items-center items-center'>
            <input id="box1_1" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box1_2" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box1_3" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box1_4" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box1_5" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box2_1" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box2_2" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box2_3" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box2_4" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box2_5" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box3_1" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box3_2" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box3_3" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box3_4" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box3_5" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box4_1" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box4_2" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box4_3" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box4_4" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box4_5" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box5_1" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box5_2" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box5_3" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box5_4" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
            <input id="box5_5" onBlur={onBlurHandler} onFocus={onFocusHandler} onChange={handleKeyPress} className='w-12 h-12 bg-white border border-[#939B9F4D] rounded justify-self-center self-center text-center text-lg' maxLength={1} type='text' />
        </div>
    );
}

export default Tablero;
