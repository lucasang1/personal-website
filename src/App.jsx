import Header from './components/Header'
import Intro from './components/Intro'
import GridShowcase from './components/GridShowcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <div>
      <Header />
      <main>
        <Intro/>
        <GridShowcase/>
      </main>
      <Footer />
      </div>
    </div>
  );
}