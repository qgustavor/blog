import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import neostandard from 'neostandard'

export default createConfigForNuxt()
  .prepend(neostandard({ ts: true }))
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  })
  .append({
    rules: {
      '@stylistic/comma-dangle': ['error', 'never']
    }
  })
