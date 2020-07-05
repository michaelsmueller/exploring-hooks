import React, { useState, useEffect } from 'react';
 
function StopWatch() {
  const [isOn, setIsOn] = useState(false); 
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
 
    if (isOn) {
      interval = setInterval(
        () => setTimer(timer + 1),
        1000,
      );
    }
 
    return () => clearInterval(interval);
  }, [isOn, timer]);

  const onReset = () => {
    setIsOn(false);
    setTimer(0);
  };
 
  return (
    <div>
      {timer}

      {!isOn && (
        <button type="button" onClick={() => setIsOn(true)}>
          Start
        </button>
      )}
 
      {isOn && (
        <button type="button" onClick={() => setIsOn(false)}>
          Stop
        </button>
      )}

      <button type="button" disabled={timer === 0} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
 
export default StopWatch;
