import VueSvg from '@site/static/svg/logos--vue.svg'
import ReactSvg from '@site/static/svg/logos--react.svg'
import NodeSvg from '@site/static/svg/logos--nodejs-icon.svg'
import NextSvg from '@site/static/svg/ri--nextjs-fill.svg'
import TSSvg from '@site/static/svg/logos--typescript-icon.svg'
import WebpackSvg from '@site/static/svg/logos--webpack.svg'
import TWSvg from '@site/static/svg/devicon--tailwindcss.svg'
import ESLintSvg from '@site/static/svg/logos--eslint.svg'
import Translate, { translate } from '@docusaurus/Translate'

export type FeatureItem = {
  title: string
  text: JSX.Element
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.vue',
      message: '深度使用',
    }),
    text: (
      <Translate>
        熟练运用 Vue 的组件化开发理念，以及其响应式数据绑定机制，确保应用的高效性和可维护性。
      </Translate>
    ),
    Svg: VueSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.react',
      message: '深度使用',
    }),
    text: (
      <Translate>
        深入理解React生态系统，灵活运用React生态系统中的各种工具和库。 擅长组件化开发、状态管理、React生命周期和钩子函数。
      </Translate>
    ),
    Svg: ReactSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.nodejs',
      message: '持续学习',
    }),
    text: (
      <Translate>
         熟悉 Express.js 框架，能够利用其搭建 RESTful API，并且熟练使用 MongoDB、MySQL 等数据库进行数据存储和管理。
      </Translate>
    ),
    Svg: NodeSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.nextjs',
      message: '拥抱变化',
    }),
    text: (
      <Translate>
        熟悉Next.js 的路由、数据获取和页面预渲染等特性，能够应用在项目中实现性能优化和 SEO，构建高性能页面。
      </Translate>
    ),
    Svg: NextSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.typescript',
      message: '严格要求',
    }),
    text: (
      <Translate>
        熟练使用 TypeScript，为项目提供类型安全的保障，提高代码质量和开发效率。
      </Translate>
    ),
    Svg: TSSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.webpack',
      message: '注重性能',
    }),
    text: (
      <Translate>
        专注于前端工程化和构建优化，能够根据项目需求进行灵活配置。
      </Translate>
    ),
    Svg: WebpackSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.tailwind',
      message: '高效还原',
    }),
    text: (
      <Translate>
        偏爱原子类，高效地利用 Tailwind 的原子类来构建响应式、现代化的用户界面，并且熟悉其配置和自定义，以及响应式设计模式的应用。
      </Translate>
    ),
    Svg: TWSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.webpack',
      message: '质量把控',
    }),
    text: (
      <Translate>
       注重代码质量，能够使用 ESLint 和 Prettier 进行代码检查和格式化，确保代码易读、易于维护，并符合最佳实践。
      </Translate>
    ),
    Svg: ESLintSvg,
  },

]

export default FEATURES
