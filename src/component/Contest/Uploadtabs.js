import React, { useState, Children } from 'react';
import './Uploadtabs.css'; 

const UploadTabs = ({ children, onTabChange }) => {
  const childrenArray = Children.toArray(children);

  const [activeTab, setActiveTab] = useState(
    childrenArray.length > 0 ? childrenArray[0].props.label : null
  );

  const handleTabClick = (tabLabel) => {
    setActiveTab(tabLabel);
    if (onTabChange) onTabChange();
  };

  const UploadTab = ({ label }) => {
    return (
      <div
        className={`Uploadtab ${activeTab === label ? 'active' : ''}`}
        onClick={() => handleTabClick(label)}
      >
        {label}
      </div>
    );
  };

  return (
    <div className="Uploadtabs">
      <div className="Uploadtab-buttons">
        {childrenArray.map((child) => (
          <UploadTab key={child.props.label} label={child.props.label} />
        ))}
      </div>
      <div className="Uploadtab-content">
        {childrenArray.map((child) =>
          child.props.label === activeTab ? child.props.children : null
        )}
      </div>
    </div>
  );
};

export default UploadTabs;