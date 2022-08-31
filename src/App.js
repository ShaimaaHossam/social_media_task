import './App.css';
import CardsLayout from './components/CardsLayout'
import Header from './components/Header';
import  useFetch  from './hooks/useFetch';
import useTheme from './hooks/useTheme';
function App() {
  const {data, isLoading} = useFetch('/data.json')
  const {toggleDark, colors} = useTheme()
  return(
    <div className="w-full h-full pb-20" style={{backgroundColor: colors.backgroundColor}}>
        { 
          !isLoading && 
          <>            
            <Header 
              colors={colors} 
              toggleDark={toggleDark} 
              followers={data.total_followers}
              />
            <CardsLayout colors={colors}  data={data}  />
          </>
        }
    </div>
  )
}

export default App;
