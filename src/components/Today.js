import ArrowDown from "./ArrowDown"
import ArrowUp from "./ArrowUp"
function Today({today}){
    return(
        <div className="flex justify-center mt-4">
        {today.charAt(0) === '+' ? <ArrowUp /> : <ArrowDown />}
        <p className={`today-green text-xs font-bold ${today.charAt(0) === '+' ? 'today-green' : 'today-red'}`}>{today.substring(1)}</p>
        </div>
    )
}
export default Today;