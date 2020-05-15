import LogoComp from './index.vue'

export default {
  title: 'components',
  component: LogoComp,
}

export const Logo = () => ({
  components: { LogoComp },
  template: `
  <logo-comp />
  `,
})
