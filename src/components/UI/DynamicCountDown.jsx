import { useEffect, useState } from "react";
import TimeBox from "./TimeBox";
const DynamicCountDown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    // Function to calculate the countdown
    const calculateCountdown = () => {
        // Calculate the remaining time until the target date
        const targetDate = new Date(2024,7,3);
        const now = new Date();
        const remainingTime = targetDate - now;

        // Calculate the days, hours, minutes, and seconds
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Update the state variables
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    };

    // Call the calculateCountdown function once when the component mounts
    useEffect(() => {
        // Call the function right away so the countdown starts immediately
        calculateCountdown();

        // Then set an interval to update the countdown every second
        const intervalId = setInterval(calculateCountdown, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex gap-2 lg:gap-10 justify-center items-center flex-wrap">
            <span className="text-white text-center text-3xl lg:text-7xl font-bold font-midnight font-normal">Solo Falta</span>
            <div className="flex gap-4 md:gap-6 items-center">
                <TimeBox value={days} unit={"Dias"} />
                

                <TimeBox value={hours} unit={"Horas"} />


                <TimeBox value={minutes} unit={"Minutos"} />


                <TimeBox value={seconds} unit={"Segundos"} />

            </div>
        </div>
    );
};

export default DynamicCountDown;
