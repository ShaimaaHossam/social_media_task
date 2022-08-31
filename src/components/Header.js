import SwitchButton from "./SwitchButton"
function Header({followers, colors, toggleDark}){
    return(
        <div style={{backgroundColor: colors.topBackgroundColor}} className=" md:flex justify-between pt-8 align-baseline z-30 md:px-12 px-4 absolute w-full top-0 h-1/2">
            <div style={{borderColor: colors.TextColor}} className="border-b-2 md:border-0 py-2 md:p-0 mb-2 md:mb-0">
                <h1 style={{color:colors.MainText}} className="font-bold text-2xl">Social Media Dashboard</h1>
                <p  style={{color:colors.TextColor}} className="text-sm font-bold ">Total Followers: {followers}</p>
            </div>
            <SwitchButton toggleDark={toggleDark} colors={colors}/>
        </div>
    )
}
export default Header