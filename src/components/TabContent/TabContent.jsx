import './TabContent.scss';
import TabContentItem from './TabContentItem';

function TabContent() {
    return (
      <div className="tab-content">
        <TabContentItem title="table of contents">
          <ul>
            <li>
              <a href="#chapter-1">1. Tools and Platforms for Implementing Gamification</a>
            </li>
            <li>
              <a href="#chapter-2">2. Gamification as a Key Element</a>
            </li>
            <li>
              <a href="#chapter-3">
                3. Key Takeaways and Recommendations for Successful Gamification on
                Your Website
              </a>
            </li>
            <li>
              <a href="#chapter-4">4. Advantages and Disadvantages</a>
            </li>
            <li>
              <a href="#chapter-5">5. Theoretical and Practical Aspects</a>
            </li>
            <li>
              <a href="#chapter-6">6. Adapting to Different Niches</a>
            </li>
            <li>
              <a href="#chapter-7">7. Long-Term Results</a>
            </li>
            <li>
              <a href="#chapter-8">8. Key Takeaways and Recommendations for Successful</a>
            </li>
            <li>
              <a href="#faq">9. FAQ</a>
            </li>
          </ul>
        </TabContentItem>
      </div>
    );
}

export default TabContent