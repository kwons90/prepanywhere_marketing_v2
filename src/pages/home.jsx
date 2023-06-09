import PrepBoxSection from '../components/sections/PrepBox-section';
import TestimonialsSection from '../components/sections/testimonials-section';
import HeroSection from '../components/sections/hero-section';
import ProductSection from '../components/sections/product-section';
import HowItWorksSection from '../components/sections/howitworks-section';
import PricingSection from '../components/sections/about-section';

const Home = () => {
    return (
        <>
            <main>
                <section id='product-section'>
                    <HeroSection />
                    <HowItWorksSection />
                    <TestimonialsSection />
                    <PrepBoxSection />
                    <ProductSection />
                </section>
            </main>
        </>
    );
};

export default Home;
