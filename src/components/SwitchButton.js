
function SwitchButton({ colors, toggleDark }) {
    return (
        <div className="relative  z-50 flex flex-col items-center  overflow-hidden">
            <div className="flex w-full justify-between md:">
                <span style={{ color: colors.TextColor }} className="md:mr-2 text-sm font-bold ">
                    Dark Mode
                </span>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">

                    <input
                        type="checkbox"
                        className="sr-only peer"
                        readOnly
                        onClick={toggleDark}
                    />
                    <div

                        className={`w-11  h-6 rounded-full peer  peer-checked:after:translate-x-full  
                                    after:content-[''] after:absolute after:top-0.5 after:left-[2px]   
                                    after:border after:rounded-full after:h-5 after:w-5 after:transition-all  
                                    ${colors.theme === 'light' ? ' after:bg-white bg-[#AEB3CB]' :
                                'peer-checked:after:bg-[#1F212E] peer-checked:after:border-[#1F212E] bg-gradient-to-r from-[#378FE6] to-[#3EDA82]'}`}
                    ></div>

                </label>
            </div>
        </div>
    )
}
export default SwitchButton; 