import FooterComp from './index.vue'

export default {
  title: 'components',
  component: FooterComp,
}

export const FooterContent = () => ({
  components: { FooterComp },
  template: `
  <footer-comp />
  `,
})
