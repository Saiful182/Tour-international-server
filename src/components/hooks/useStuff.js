import { useEffect, useState } from "react";

const useStuff = () => {
    const [stuffes, setStuffs] = useState([]);


    useEffect(() => {
        fetch('https://stark-shore-53835.herokuapp.com/stuff')
            .then(res => res.json())
            .then(data => setStuffs(data))
    }, []);
    return {
        stuffes
    }
}
export default useStuff;