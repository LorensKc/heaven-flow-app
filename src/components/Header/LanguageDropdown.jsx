import React, { useState, useEffect, useRef } from "react";

function LanguageDropdown({ defaultText, optionsList = []}) {

  const [currentSelectedText, setCurrentSelectedText] = useState(
    defaultText || "EN"
  );

  const [showOptionList, setShowOptionList] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    if (defaultText) {
      setCurrentSelectedText(defaultText);
    }
  }, [defaultText]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptionList(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleListDisplay = () => {
    setShowOptionList((prevShowState) => !prevShowState);
  };

  const handleOptionClick = (event) => {
    const selectedName = event.target.getAttribute("data-name");
    setCurrentSelectedText(selectedName);
    setShowOptionList(false);
  };

  return (
    <div className="custom-select-container" ref={wrapperRef}>
      <div
        className={`selected-text ${showOptionList ? "active" : ""}`}
        onClick={handleListDisplay}
        // Для доступності
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={showOptionList}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && handleListDisplay()
        }
      >
        {currentSelectedText}
      </div>
      {showOptionList && (
        <ul className="select-options" role="listbox">
          {optionsList.map((option) => {
            return (
              <li
                className="custom-select-option"
                data-name={option.name}
                key={option.id}
                onClick={handleOptionClick}
                role="option"
                tabIndex={0}
                aria-selected={currentSelectedText === option.name}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && handleOptionClick(e)
                } 
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default LanguageDropdown;
