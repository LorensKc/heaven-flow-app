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
  }, [defaultText]); // Перезапускати, якщо defaultText змінився


  useEffect(() => {
    // Функція для обробки кліку поза компонентом
    const handleClickOutside = (event) => {
      // Перевіряємо, чи існує ref і чи клік був поза елементом, на який вказує ref
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOptionList(false); // Приховуємо список опцій
      }
    };

    // Додаємо слухача, якщо список опцій відображається
    // (або можна додати завжди, як у класовому компоненті, і він просто нічого не робитиме, якщо список прихований)
    // Для точної відповідності класовому компоненту, додаємо завжди:
    document.addEventListener("mousedown", handleClickOutside);

    // Функція очищення, яка викликається при розмонтуванні компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Пустий масив залежностей означає, що ефект виконається лише при монтуванні та розмонтуванні

  // Обробник для відображення/приховування списку опцій
  const handleListDisplay = () => {
    setShowOptionList((prevShowState) => !prevShowState);
  };

  // Обробник кліку по опції
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
                // Для доступності
                role="option"
                tabIndex={0}
                aria-selected={currentSelectedText === option.name}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && handleOptionClick(e)
                } // Потрібно передати подію, бо handleOptionClick її очікує
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
