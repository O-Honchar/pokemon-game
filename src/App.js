import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import BgImage1 from './assets/bg1.jpg';
import BgImage2 from './assets/bg2.jpg';

const App = () => {
  return (
    <>
      <Header
        title="This is title"
        descr="This is Description!"
      />
      <Layout
        title="This is title"
        descr="This is Description!"
        urlBg={BgImage1}
      />
      <Layout
        title="This is title"
        descr="This is Description!"
        colorBg="#e2e2e2"
      />
      <Layout
        title="This is title"
        descr="This is Description!"
        urlBg={BgImage2}
      />
      <Footer />
    </>
  );
}

export default App;
