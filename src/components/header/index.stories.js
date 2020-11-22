import HeaderComp from './index.vue'

export default {
  title: 'components',
  component: HeaderComp,
}

export const Header = () => ({
  components: { HeaderComp },
  template: `
  <header-comp />
  `,
})
