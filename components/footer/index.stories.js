import FooterComp from './index.vue'

export default {
  title: 'components',
  component: FooterComp,
}

export const Footer = () => ({
  components: { FooterComp },
  template: `
  <footer-comp />
  `,
})
