export const projects: Project[] = [
  {
    title: 'Jerry Yang的小站',
    description: '🦖 基于 Docusaurus 静态网站生成器实现个人博客',
    preview: '/img/project/blog.png',
    website: 'https://github.com/ylc6223/blog',
    source: 'https://github.com/ylc6223/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: 'Express-vben-admin',
    description: ' Express + Vben Admin 编写的一款前后端分离的权限管理系统',
    preview: '/img/project/nest-vben-admin.png',
    website: '',
    source: '',
    tags: ['opensource', 'favorite', 'product', 'large'],
    type: 'web',
  },
  {
    title: '二师兄管家',
    description: '🌟扫码水电表专业管理平台。',
    preview: '/img/project/chaoxing-sign.png',
    website: '',
    source: '',
    tags: ['product','design'],
    type: 'web',
  },
  {
    title: 'DailyCheckin',
    description: '🌟 公司内用于上班在线打卡的小程序，摆脱额外安装App的烦恼，并自动向打卡用户发放现金红包。',
    preview: '/img/project/chaoxing-sign.png',
    website: '',
    source: '',
    tags: ['favorite', 'product','design'],
    type: 'web',
  },
  {
    title: 'Vue3数据大屏',
    description: '🌟 帮助公司销售和运营人员进行数据决策分析的大屏项目，能够实时监控公司产品动态',
    preview: '/img/project/big_screen.png',
    website: 'https://ylc6223.site/chart',
    source: '',
    tags: ['product','design'],
    type: 'web',
  },
  {
    title: 'ZeerUI',
    description: '👽 仿 ThorUI和TaroUI 风格的Uniapp组件库',
    preview: '',
    website: 'https://www.npmjs.com/package/zeerui-uni?activeTab=readme',
    source: 'https://github.com/ylc6223/zeerui-uniapp',
    tags: ['opensource','favorite', 'product','design'],
    type: 'toy',
  },
  {
    title: '前端示例代码库',
    description: '📦 整理前端样式和功能的实现代码，可以用来寻找灵感或直接使用示例中的代码',
    preview: '/img/project/example-website.png',
    website: 'https://example.kuizuo.cn',
    source: 'https://github.com/ylc6223/example',
    tags: ['opensource', 'design'],
    type: 'other',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'large' | 'personal'

export type ProjectType = 'web' | 'app' | 'commerce' | 'personal' | 'toy' | 'other'

export const projectTypeMap = {
  web: '网站',
  app: '应用',
  commerce: '商业项目',
  personal: '个人',
  toy: '玩具',
  other: '其他',
}

export type Project = {
  title: string
  description: string
  preview?: string
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce(
  (group, project) => {
    const { type } = project
    group[type] = group[type] ?? []
    group[type].push(project)
    return group
  },
  {} as Record<ProjectType, Project[]>,
)
