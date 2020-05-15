import { configure, addParameters, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import { withA11y } from '@storybook/addon-a11y'
import { themes } from '@storybook/theming'
import Decorator from './Decorator.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '~/plugins/code-snippets'

// Decorator

addDecorator(story => ({
  components: { Decorator },
  render(h) {
    return (
      <decorator>
        <story slot="story" />
      </decorator>
    )
  }
}))

addDecorator(withA11y)

// font-awesome

library.add(faMoon, faSun)
Vue.component('fa', FontAwesomeIcon)

// viewport

const customViewports = {
  iPhone5: {
    name: 'iPhone5',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  iPhone6: {
    name: 'iPhone6,7,8',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  iPhoneX: {
    name: 'iPhoneX',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPhoneXsMax: {
    name: 'iPhoneXsMax',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
};

addParameters({
  viewport: { viewports: customViewports },
  backgrounds: [
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' }
  }
});

configure(require.context('../components', true, /\.stories\.js$/), module)