import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const useFetch = (url) => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        setIsAdmin(true);
        axios.get(url).then(({data}) => {
            console.log(data);
        });
    }, [url])
    return {
        isAdmin,
        setIsAdmin
    }
}
export default useFetch;