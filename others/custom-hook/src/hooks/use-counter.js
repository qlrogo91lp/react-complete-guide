import { useState, useEffect } from "react";

// 네이밍은 항상 use로 시작해야한다
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [forwards]);

    return counter;
};

export default useCounter;