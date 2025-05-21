import { useState } from "react";

function FAQItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq__accordeon-block">
      <div className="faq__accordeon-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="faq__accordeon-title">
          <div className="title">{title}</div>
        </div>
        <i className={"faq__accordeon-icon" + (isOpen ? " open-content" : "")}></i>
      </div>
      <div
        // className="faq__accordeon-body"
        className={"faq__accordeon-body" + (isOpen ? " open-content" : "")}
      >
        <p>{text}</p>
      </div>
    </div>
  );
}
export default FAQItem;
