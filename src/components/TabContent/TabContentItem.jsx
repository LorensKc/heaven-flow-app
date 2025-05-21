import { useState } from "react";

function TabContentItem({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="tab-content__block">
        <div className="tab-content__header" onClick={() => setIsOpen(!isOpen)}>
          <div className="tab-content__title">
            <div className="title">{title}</div>
          </div>
          <i className={"tab-content__icon" + (isOpen ? " open-content" : "")}></i>
        </div>
        <div className={"tab-content__body" + (isOpen ? " open-content" : "")}>
          {children}
        </div>
      </div>
    );
}

export default TabContentItem