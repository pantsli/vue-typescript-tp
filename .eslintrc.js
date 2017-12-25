// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off'
  }
};
// module.exports = {
//     extends: [
//         'eslint-config-alloy/typescript',
//     ],
//     parserOptions: {
//       "ecmaVersion": 8,
//       "ecmaFeatures": {
//         "experimentalObjectRestSpread": true,
//         "jsx": false
//       },
//       "sourceType": "module"
//     },
//     globals: {
//         // 这里填入你的项目需要的全局变量
//         // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
//         //
//         // jQuery: false,
//         // $: false
//     },
//     rules: {
//         // 这里填入你的项目需要的个性化配置，比如：
//
//         // @fixable 一个缩进必须用两个空格替代
//         'indent': [
//             'error',
//             2,
//             {
//                 SwitchCase: 1,
//                 flatTernaryExpressions: true
//             }
//         ],
//       "no-multi-spaces":'off'
//     }
// };

