import { useState, useEffect } from "react";

function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>{currentDateTime.toLocaleDateString()} - {currentDateTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default DateTime;
