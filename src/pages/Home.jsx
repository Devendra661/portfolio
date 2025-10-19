import HomeSection from './HomeSection';
import About from './About';
import Feature from './Feature';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Skills from './Skills';

const Home = () => {
  return (
    <>
      <HomeSection />
      <hr className="border-t border-gray-700 my-12 w-11/12 mx-auto" />
      <About />
      <hr className="border-t border-gray-700 my-12 w-11/12 mx-auto" />
      <Feature />
      <hr className="border-t border-gray-700 my-12 w-11/12 mx-auto" />
      <Skills />
      <hr className="border-t border-gray-700 my-12 w-11/12 mx-auto" />
      <Portfolio />
      <hr className="border-t border-gray-700 my-12 w-11/12 mx-auto" />
      <Resume />
      <hr className="border-t border-gray-700 my-12 w-11/12 mx-auto" />
      <Contact />
    </>
  );
};

export default Home;
