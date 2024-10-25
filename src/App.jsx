import { Suspense } from 'react';
import Hero from './components/Hero';
import Layout from './components/Layout';
import './styles/globals.css';

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Hero />
      </Suspense>
    </Layout>
  );
}

export default App;
