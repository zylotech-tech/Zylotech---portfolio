import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Credentials from './components/Credentials'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App