import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Writing',
    Svg: require('@site/static/img/techwriting.svg').default,
    description: (
      <>
        Examples of my technical writing.
      </>
    ),
  },
  {
    title: 'Journalism',
    Svg: require('@site/static/img/journalism.svg').default,
    description: (
      <>
        Examples of my journalism work.
      </>
    ),
  },
  {
    title: 'Maker Blog',
    Svg: require('@site/static/img/maker.svg').default,
    description: (
      <>
        A blog detailing some of my maker projects.
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
