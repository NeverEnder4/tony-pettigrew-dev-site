import BGSvg from '../components/bgSvg/BGSvg';
import Layout from '../components/Layout/Layout';

import '../scss/pages/index.scss';

const index = () => (
  <Layout isLanding={true}>
    <main className="landing-page">
      <BGSvg />
      <div className="landing-page__content">
        <h1 className="landing-page__headline slide-in-top">Tony Pettigrew</h1>
        <h2 className="landing-page__sub-headline slide-in-top">
          Full Stack Web Developer
        </h2>
        <p className="landing-page__intro slide-in-left">
          I build custom web solutions for your business and personal needs
          using Javascript. Want help with a project? Let’s talk!
        </p>
        <a
          href="mailto:get@tonypettigrew.dev?subject=I need a website!"
          className="landing-page__email slide-in-bot"
        >
          get@tonypettigrew.dev
        </a>
      </div>
    </main>
  </Layout>
);

export default index;
