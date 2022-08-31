import Card from "./Card";
import Overview from "./Overview";
function CardsLayout({data, colors}){
    return(
        <div className="absolute z-40 mt-36">
        <div className="flex flex-wrap md:px-12 mt-12">
            {data.cards.map((card)=>{
                return <Card card={card} key={card.id} colors={colors} />
            })}
        </div>
        <h1 style={{color: colors.TextColor}} className="text-xl font-bold md:px-12 mt-12 px-8">Overview - Today</h1>
        <div className="flex flex-wrap md:px-12 mt-4 mb-12">
            {data.overview.map((card)=>{
                return <Overview card={card} key={card.id} colors={colors}  />
            })}
        </div>
        </div>
        
    )
}

export default CardsLayout;