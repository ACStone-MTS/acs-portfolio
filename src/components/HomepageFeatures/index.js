import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Writing',
    Svg: require('@site/static/img/techwriting.svg').default,
    description: (
      <>
        I've worked as a full-time technical writer and lead technical writer for the past three years.
        <br></br>
        <br></br>
        Here are few <b><a href="https://acstone-mts.github.io/acs-portfolio/docs/category/technical-writing">Examples</a></b>.
      </>
    ),
  },
  {
    title: 'Journalism',
    Svg: require('@site/static/img/journalism.svg').default,
    description: (
      <>
        Prior to my current career, I worked as a freelance journalist.
        <br></br>
        <br></br>
        You can find a few select examples <b><a href="https://acstone-mts.github.io/acs-portfolio/docs/category/journalism">Here</a></b>.
      </>
    ),
  },
  {
    title: 'Docusaurus',
    Svg: require('@site/static/img/maker.svg').default,
    description: (
      <>
        This portfolio is built with <b><a href="https://docusaurus.io/">Docusaurus</a></b>. It showcases my ability to work in a docs-as-code environment,
        leveraging Github Pages to work with Markdown files in a Github native environment.
        <br></br>
        <br></br>
        The hosting repository can be found <b><a href="https://github.com/ACStone-MTS/acs-portfolio">Here</a></b>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
