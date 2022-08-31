import { useEffect, useRef } from "react"

const useEventListener = (event, callback, element = window) => {
    const callBackRef = useRef(callback)

    useEffect(()=>{
        callBackRef.current = callback
    }, [callback])

    useEffect(()=>{
        const handler = e => callBackRef.current(e)
        element.addEventListener(event, handler)

        return () => element.removeEventListener(event, handler)
    }, [event, element])
}

export default useEventListener;