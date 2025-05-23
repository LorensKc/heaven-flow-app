import './MainContent.scss'
import FAQ from '../FAQ/FAQ'
import Advantage from '../Advantage/Advantage';
import textImage from '../../assets/images/img_seo_text_1.png'
import textImage2 from '../../assets/images/img_seo_text_2.png'
import textImage3 from '../../assets/images/img_seo_text_3.png'
import BlockContent from './BlockContent';
import Button from '../Button/Button';
import TabContent from '../TabContent/TabContent';

function MainContent() {
    return (
      <section className="main-content">
        <TabContent />

        <BlockContent identify="chapter-1" title="Tools and Platforms for Implementing Gamification">
          <p>
            Have you ever wondered how to make your website not only functional
            but also engaging? Game design is the art of transforming
            interaction with digital products into a true adventure. In this
            webinar, we will show you how to use gamification elements and game
            design principles to create interfaces that not only capture
            attention but also hold it.
          </p>
        </BlockContent>

        <BlockContent identify="chapter-2" title="Gamification as a Key Element" image={textImage}>
          <p>
            In this webinar, we will focus on how gamification elements can be
            integrated into different types of websites. We’ll explore how
            principles like rewards, points, levels, and progress bars can
            become powerful tools to boost user engagement. Gamification allows
            you to turn your website into more than just an information tool but
            into a place where users want to spend more time. In this webinar,
            we will focus on how gamification elements can be integrated into
            different types of websites. We’ll explore how principles like
            rewards, points, levels, and progress bars.
          </p>
        </BlockContent>

        <BlockContent identify="chapter-3" title="Key Takeaways and Recommendations for Successful Gamification on Your Website">
          <p>
            After participating in the webinar, you will be ready to integrate
            gamification into your website, creating a more engaging and
            interactive user experience. You’ll be able to use game mechanics
            like achievements, points, and levels to enhance user engagement and
            improve navigation. Additionally, you will learn how to adapt these
            principles to the unique characteristics of your website and its
            audience, giving you a competitive edge. After participating in the
            webinar, you will be ready to integrate gamification into your
            website, creating a more engaging and interactive user experience.
            You’ll be able to use game mechanics like achievements, points, and
            levels to enhance user engagement and improve navigation.
            Additionally, you will learn how to adapt these principles to the
            unique characteristics of your website and its audience, giving you
            a competitive edge.
          </p>
        </BlockContent>

        <Button lnk={"https://google.com"} title="Register Now" cls="bg-green button__regular" />

        <BlockContent identify="chapter-4" title="Advantages and Disadvantages">
          <Advantage />
        </BlockContent>

        <BlockContent identify="chapter-5" title="Theoretical and Practical Aspects">
          <p>
            We offer not only theoretical knowledge but also real-world examples
            from sites that successfully use gamification. You will see how
            these elements work in practice and how to adapt them to suit your
            project’s needs. We offer not only theoretical knowledge but also
            real-world examples from sites that successfully use gamification.
            You will see how these elements work in practice and how to adapt
            them to suit your project’s needs.
          </p>
        </BlockContent>

        <BlockContent identify="chapter-6" title="Adapting to Different Niches">
          <img className="block-content__image" src={textImage2} alt="img_seo_text_2" srcset="" />
          <p>
            Gamification can be adapted to various fields — from personal blogs
            to large corporate sites and online stores. In the webinar, we’ll
            show you how gamification approaches can be customized based on the
            site’s theme and audience. Gamification can be adapted to various
            fields — from personal blogs to large corporate sites and online
            stores. In the webinar, we’ll show you how gamification approaches
            can be customized based on the site’s theme and audience.
          </p>
          <p>
            Gamification can be adapted to various fields — from personal blogs
            to large corporate sites and online stores. In the webinar, we’ll
            show you how gamification approaches can be customized based on the
            site’s theme and audience. Gamification can be adapted to various
            fields — from personal blogs to large corporate sites and online
            stores. In the webinar, we’ll show you how gamification approaches
            can be customized based on the site’s theme and audience.
            Gamification can be adapted to various fields — from personal blogs
            to large corporate sites and online stores. In the webinar, we’ll
            show you how gamification approaches can be customized based on the
            site’s theme and audience.
          </p>
        </BlockContent>

        <Button lnk={"https://google.com"} title="Register Now" cls="bg-green button__regular" />

        <BlockContent identify="chapter-7" title="Long-Term Results" image={textImage3} imgCls="unic">
          <p>
            Gamification implementation is not just a trend. We will show you
            how to integrate these elements so they bring long-term results,
            increase user loyalty, and build a positive brand image.
            Gamification implementation is not just a trend. We will show you
            how to integrate these elements so they bring long-term results,
            increase user loyalty, and build a positive brand image.
            Gamification implementation is not just a trend. We will show you
            how to integrate these elements so they bring long-term results,
            increase user loyalty, and build a positive brand image.
            Gamification implementation is not just a trend. We will show you
            how to integrate these elements so they bring long-term results,
            increase user loyalty, and build a positive brand image.
            Gamification implementation is not just a trend. We will show you
            how to integrate these elements so they bring long-term results,
            increase user loyalty, and build a positive brand image.
            Gamification implementation is not just a trend. We will show you
            how to integrate these elements so they bring long-term results,
            increase user loyalty, and build a positive brand image.
          </p>
        </BlockContent>

        <BlockContent identify="chapter-8" title="Key Takeaways and Recommendations for Successful">
          <p>
            After participating in the webinar, you will be ready to integrate
            gamification into your website, creating a more engaging and
            interactive user experience. You’ll be able to use game mechanics
            like achievements, points, and levels to enhance user engagement and
            improve navigation. Additionally, you will learn how to adapt these
            principles to the unique characteristics of your website and its
            audience, giving you a competitive edge.
          </p>
          <p>
            Implementing gamification will not only improve the user experience
            but also increase visitor retention, enhancing engagement and
            interaction with your content. You will also gain tools to evaluate
            the effectiveness of these elements and optimize their performance
            on your site.
          </p>
        </BlockContent>

        <Button lnk={"https://google.com"} title="Register Now" cls="bg-green button__regular" />

        <BlockContent identify="faq" title={"FAQ"}>
          <FAQ />
        </BlockContent>
      </section>
    );
}

export default MainContent