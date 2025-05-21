import './FAQ.scss'
import FAQItem from './FAQItem';



function FAQ() {
    return (
      <div className="faq__content-wrapper">
        <FAQItem
          title="Is gamification suitable for all types of websites?"
          text="You can use both ready-made solutions (plugins for WordPress, Shopify, etc.) and develop custom game mechanics using JavaScript, CSS, and other technologies. The choice depends on your goals and technical expertise."
        />
        <FAQItem
          title="How long does it take to implement gamification on a website??"
          text="You can use both ready-made solutions (plugins for WordPress,
                Shopify, etc.) and develop custom game mechanics using JavaScript,
                CSS, and other technologies. The choice depends on your goals and
                technical expertise."
        />
        <FAQItem
          title="What tools and platforms are best for gamifying websites?"
          text="You can use both ready-made solutions (plugins for WordPress,
                Shopify, etc.) and develop custom game mechanics using JavaScript,
                CSS, and other technologies. The choice depends on your goals and
                technical expertise."
        />
        <FAQItem
          title="How do you measure the success of gamification implementation?"
          text="You can use both ready-made solutions (plugins for WordPress,
                Shopify, etc.) and develop custom game mechanics using JavaScript,
                CSS, and other technologies. The choice depends on your goals and
                technical expertise."
        />
      </div>
    );
}

export default FAQ