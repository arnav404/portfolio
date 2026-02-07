import React, { useState, useEffect } from 'react';
import './HomePage/HomePage.css'

export default function UnderConstruction() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setExpanded(true), 100);
  }, []);

return (
    <div>
      <h1 className="heading-text">Under Construction</h1>
    </div>
);

}