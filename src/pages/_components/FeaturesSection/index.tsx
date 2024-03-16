import React from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
import styles from './styles.module.scss'
import features, { type FeatureItem } from '@site/data/features'
import SectionTitle from '../SectionTitle'

const skills = [
  {
    name: 'Vue',
    icon: 'logos:vue',
    desc: '',
  },
  {
    name: 'React',
    icon: 'logos:react',
    desc: '',
  },
  {
    name: 'Node.js',
    icon: 'logos:nodejs-icon',
    desc: '',
  },
  {
    name: 'Next.js',
    icon: 'logos:nextjs-icon',
    desc: '',
  },
  {
    name: 'JavaScript',
    icon: 'logos:javascript',
    desc: '',
  },
  {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
    desc: '',
  },
  {
    name: 'Webpack',
    icon: 'logos:webpack',
    desc: '',
  },
  {
    name: '部署',
    icon: 'logos:vercel-icon',
    desc: '',
  },
  {
    name: 'WebStorm',
    icon: 'logos:webstorm',
    desc: '',
  },
  {
    name: 'tailwindcss',
    icon: 'devicon:tailwindcss',
    desc: '',
  },
  {
    name: '测试',
    icon: 'logos:jest',
    desc: '',
  },
  {
    name: 'ESLint',
    icon: 'logos:eslint',
    desc: '',
  },
  {
    name: 'Prettier',
    icon: 'logos:prettier',
    desc: '',
  },
]

function Feature({ title, Svg, text }: FeatureItem) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3 className={styles["feature-tag"]}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default function FeaturesSection(): JSX.Element {
  return (
    <section
      className={clsx(styles.featureContainer, 'container padding-vert--sm')}>
      <SectionTitle icon={'ri:map-pin-user-line'}>
        <Translate id="homepage.feature.title">个人特长</Translate>
      </SectionTitle>
      <div className={clsx("row", styles["row-gap"])}>
        {features.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}



