import { useState, useCallback } from "react";
import { debounce, throttle } from "lodash";

const DebounceThrottleComponent = () => {
    const [searchValue, setSearchValue] = useState('');

    // Throttled function that makes an API call or some expensive operation
    const throttledApiCall = useCallback(
        throttle((value) => {
            console.log('Throttled API call for:', value);
            // Your API call logic goes here
        }, 2000), // Throttle time of 2 seconds
        []
    );

    // Debounced function for handling input changes
    const debouncedSearch = useCallback(
        debounce((value) => {
            console.log('Debounced input value:', value);
            throttledApiCall(value); // Throttle the API call after debounce
        }, 1000), // Debounce time of 1 second
        [throttledApiCall]
    );

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        debouncedSearch(value); // Debounced search input
    };

    return (
        <div>
            <input 
                type="text" 
                className="border-2" 
                value={searchValue} 
                onChange={handleChange}
                placeholder="Search..." 
            />
        </div>
    );
}

export default DebounceThrottleComponent;
