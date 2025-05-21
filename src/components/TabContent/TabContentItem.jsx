import { useState } from "react";

function TabContentItem({title, text}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="tab-content__block">
        <div className="tab-content__header">
          <div
            className="tab-content__title"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="title">{title}</div>
          </div>
          <i
            className={"tab-content__icon" + (isOpen ? " open-content" : "")}
          ></i>
        </div>
        <div
          // className="tab-content__body"
          className={"tab-content__body" + (isOpen ? " open-content" : "")}
        >
          <p>{text}</p>
        </div>
      </div>
    );
}

export default TabContentItem