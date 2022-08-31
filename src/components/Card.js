import parse from 'html-react-parser';
import { useRef } from 'react';
import useHover from '../hooks/useHover';
import Today from './Today';
function Card({ card, colors }) {
    const elementRef = useRef()
    const hovered = useHover(elementRef)
    return (
        <div 
        ref={elementRef}
        style={{ 
            borderColor: card.borderColor, 
            borderImage: card.borderColor,
            backgroundColor: hovered ? colors.cardHovered : colors.cardBackgroundColor 
        }} 
        className="flex cursor-pointer flex-col align-middle w-64 py-8 mx-auto lg:mt-0 md:mr-4 mt-8 rounded-md border-t-4">
            <div style={{color: colors.TextColor}} className="flex align-middle justify-center">
                {parse(card.logo)}
                <p className="text-xs mt-1 ml-2 font-bold">{card.handle}</p>
            </div>
            <p style={{color: colors.MainText}} className="mx-auto text-5xl mt-4 font-extrabold">{card.audienceCount}</p>
            <p style={{color: colors.TextColor}} className="letter-space mx-auto  text-sm uppercase">{card.audience}</p>
           <Today today={card.today} />
        </div>
    )
}
export default Card;