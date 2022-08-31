import parse from 'html-react-parser';
import { useRef } from 'react';
import useHover from '../hooks/useHover';
import Today from "./Today";
function Overview({card, colors}){
    const elementRef = useRef()
    const hovered = useHover(elementRef)
    return(
        <div ref={elementRef} style={{backgroundColor: hovered ? colors.cardHovered : colors.cardBackgroundColor}} className="cursor-pointer px-6 flex flex-col align-middle w-64 py-4 mx-auto lg:mt-0 md:mr-4 mt-2 rounded-md">
            <div className="flex justify-between">
                <p style={{color: colors.TextColor}} className="text-sm font-bold">{card.type}</p>
                {parse(card.logo)}
            </div>
            <div className="flex justify-between align-middle mt-6">
                <p style={{color: colors.MainText}} className="text-3xl text-black font-bold ">{card.amount}</p>
                <Today today={card.rise} />
            </div>
        </div>
    )
}

export default Overview;