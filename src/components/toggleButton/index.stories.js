import ToggleButtonComp from './index.vue'

export default {
  title: 'components',
  component: ToggleButtonComp,
}

export const ToggleButton = () => ({
  components: { ToggleButtonComp },
  template: `
  <toggle-button-comp />
  `,
})
