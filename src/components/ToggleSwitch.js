import React, { useState } from 'react';
import './ToggleSwitch.css';
import iconA from '../assets/toggleswitchimages/icon-a.png';
import iconB from '../assets/toggleswitchimages/icon-b.png';

function ToggleSwitch() {
  const [isB, setIsB] = useState(false);

  return (
    <div className="toggle-switch" onClick={() => setIsB(!isB)}>
      <div className={`switch-track ${isB ? 'active-b' : 'active-a'}`}>
        <img src={iconA} alt="A" className="switch-option left" />
        <img src={iconB} alt="B" className="switch-option right" />
      </div>
    </div>
  );
}

export default ToggleSwitch;