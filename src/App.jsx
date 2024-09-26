import React, { Suspense } from 'react';
import Navbar from '../src/Components/Navbar'; // Navbar is loaded immediately
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy-loaded components
const Home = React.lazy(() => import('../src/Components/Home'));
const About = React.lazy(() => import('../src/Components/About'));
const SocailLinks = React.lazy(() => import('./Components/SocailLinks'));
const Skills = React.lazy(() => import('./Components/Skills'));
const Projects = React.lazy(() => import('./Components/Projects'));
const Spinner = React.lazy(()=> import('./Components/Spinner'))

function App() {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div>
      <Navbar showForm={showForm} setShowForm={setShowForm} />
      <Suspense fallback={<Spinner/>}>
        <Home showForm={showForm} setShowForm={setShowForm} />
        <About />
        <SocailLinks />
        <Skills />
        <Projects />
      </Suspense>

      <ToastContainer />
    </div>
  );
}

export default App;
