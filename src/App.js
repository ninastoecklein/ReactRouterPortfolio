import { HashRouter, Routes, Route } from 'react-router-dom';
import './css/variables.css';
import './css/base.css';
import './css/nav.css';
import './css/hero.css';
import './css/sections.css';
import './css/animations.css';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import useScrollReveal from './hooks/useScrollReveal';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import References from './pages/References';
import Contact from './pages/Contact';
import DesignNavigator from './pages/projects/designnavigator';
import GoCloud from './pages/projects/gocloud';
import MinistryRuby from './pages/projects/ministryruby';
import Ministry from './pages/projects/ministry';
import Upstock from './pages/projects/upstock';
import FastlaneCLI from './pages/projects/gocloud';

function AppContent() {
  useScrollReveal();

  return (
    <>
      <NavBar />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/designnavigator" element={<DesignNavigator />} />
          <Route path="/projects/ministryruby" element={<MinistryRuby />} />
          <Route path="/projects/ministry" element={<Ministry />} />
          <Route path="/projects/upstock" element={<Upstock />} />
          <Route path="/projects/gocloud" element={<GoCloud />} />
          <Route path="/projects/fastlane-cli" element={<FastlaneCLI />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
