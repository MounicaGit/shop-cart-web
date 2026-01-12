import { useState } from "react";

function useLocalStorage(key, initialValue){
    const [value, setValue] = useState(()=>{
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });

    const setStoredValue=(newValue)=>{
       const valueToStore = newValue instanceof Function ? newValue(value) : value;
       setValue(valueToStore);
       localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [value, setStoredValue];
}

export default useLocalStorage;