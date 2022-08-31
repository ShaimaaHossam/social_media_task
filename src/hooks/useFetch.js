import { useState, useEffect } from "react"

const useFetch = (link) =>{
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            fetch(link, {headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }})
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }, 1000)
    },[])
    

    return {data, isLoading}
}
export default useFetch