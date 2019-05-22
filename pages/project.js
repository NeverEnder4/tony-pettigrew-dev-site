import Link from 'next/link';

import Layout from '../components/Layout/Layout';

import '../scss/pages/single-project.scss';

const project = ({ project }) => {
  const { data } = project[0];

  return (
    <Layout isLanding={false}>
      <main className="single-project">
        <h2 className="sub-headline">
          <span />
          {` `}
          {data.project_name[0].text}
        </h2>
        <div className="single-project__content">
          <p className="paragraph--lg">{data.full_description[0].text}</p>
          <img
            src={data.display_image.url}
            alt=""
            className="single-project__img"
          />
        </div>
        <div className="single-project__links">
          <a
            href={data.project_link.url || '#'}
            className="single-project__link"
          >
            <img
              src="/static/svg/link-icon.svg"
              alt="link icon"
              className="single-project__link-icon"
            />
            <span>Visit Site</span>
          </a>
          <Link href="#">
            <a className="single-project__link">
              {' '}
              <img
                src="/static/svg/next-project-icon.svg"
                alt="next project icon"
                className="single-project__link-icon"
              />
              <span>Next Project</span>
            </a>
          </Link>
          <Link href="/work">
            <a className="single-project__link">
              {' '}
              <img
                src="/static/svg/back-icon.svg"
                alt="back icon"
                className="single-project__link-icon"
              />
              <span>Work</span>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

project.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const response = await fetch(`http://localhost:3000/api/project/${slug}`);
  const { project } = await response.json();

  return { project };
};

export default project;