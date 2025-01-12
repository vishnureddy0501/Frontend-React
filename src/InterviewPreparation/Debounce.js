import { useState, useCallback } from "react";
import { debounce, throttle } from "lodash";

const userDefinedDebounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
        const context = this;

        // Clear the timeout if it's already set
        clearTimeout(timeoutId);

        // Set a new timeout
        timeoutId = setTimeout(() => {
            func.apply(context, args); // Call the function with the proper context and arguments
        }, delay);
    };
}


const Debounce = () => {
    const [searchValue, setSearchValue] = useState('');

    // const debouncedSearch = useCallback(
    //     debounce((value) => {
    //         console.log('Performing search for:', value);
    //     }, 1000),
    //     []
    // );

    const throttledSearch = useCallback(
        throttle((value) => {
            console.log('Throttled search for:', value);
        }, 1000),
        []
    );

    const debouncedSearch = useCallback(
        userDefinedDebounce((value) => {
            console.log('Performing search for:', value);
       }, 1000),
        []
    )

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        debouncedSearch(value);
        throttledSearch(value);
    };

    return (
        <div>
            <input 
                type="text" 
                className="border-2" 
                value={searchValue} 
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}

export default Debounce;
