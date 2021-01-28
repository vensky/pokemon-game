import Header from './components/Header/Header.js';
import Layout from './components/Layout/Layout.js';
import Footer from './components/Footer/Footer.js';

import layoutBg from './assets/bg3.jpg';
const COLOR_BG = '#202736';

function App() {
  return (
    <>
        <Header />
        <Layout urlBg={layoutBg} />
        <Layout colorBg={COLOR_BG} />
        <Layout urlBg={layoutBg} />
        <Footer />
    </>
  );
}

export default App;
