import { useState } from "react";

function FAQItem({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq__accordeon-block">
      <div className="faq__accordeon-header">
        <div
          className="faq__accordeon-title"
          onClick={() => setIsOpen(!isOpen)}
        >
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
