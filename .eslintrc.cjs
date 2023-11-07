/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    },
    {
      // 错误页面不需要遵循组件命名规则
      files: ['src/views/errors/*.vue'],
      rules: {
        "vue/multi-word-component-names": "off"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
