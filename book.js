let plugins = [
  '-lunr',
  '-sharing',
  '-search',
  '-favicon',
  '-accordion',
  '-katex',
  '-simple-mind-map',
  '-expandable-chapters',
  'theme-lou',
  'back-to-top-button',
  'search-pro',
  'flexible-alerts',
  '-code',
];
if (process.env.NODE_ENV == 'dev') plugins.push('livereload');

module.exports = {
  title: '光之年智能科技',
  author: '光之年智能科技',
  lang: 'zh-cn',
  description: '光之年智能科技',
  plugins,
  pluginsConfig: {
    code: {
      copyButtons: true,
    },
    'flexible-alerts': {
      style: 'flat',
      note: {
        label: 'Note',
        icon: 'fa fa-info-circle',
        className: 'info',
      },
      tip: {
        label: 'Tips',
        icon: 'fa fa-lightbulb-o',
        className: 'tip',
      },
      warning: {
        label: 'Warning',
        icon: 'fa fa-exclamation-triangle',
        className: 'warning',
      },
      danger: {
        label: 'Danger',
        icon: 'fa fa-ban',
        className: 'danger',
      },
      comment: {
        label: 'Comment',
        icon: 'fa fa-commenting',
      },
      question: {
        label: 'Question',
        icon: 'fa fa-question-circle',
      },
    },
    'theme-lou': {
      color: '#303F9F', // 主题色
      favicon: 'assets/favicon.ico',
      logo: 'assets/logo.png',
      autoNumber: 3, // 自动编号到几级标题
      titleColor: {
        h1: '#303F9F',
        h2: '#2196F3',
        h3: '#5C6BC0',
      },
      copyrightLogo1: 'assets/copyright-aigc.png',
      forbidCopy: process.env.NODE_ENV != 'dev',
      appleTouchIconPrecomposed152:
        'assets/apple-touch-icon-precomposed-152.png',
      'hide-elements': ['.summary .gitbook-link'],
      copyright1: {
        author: '苏州光之年智能科技优先公司',
      },
      imgStyle: {
        isCenter: true, // 是否居中(默认为true)
        isBox: true, // 是否有边框(默认为true)
        otherStyle: 'max-width: 500px;',
      },
    },
    'simple-mind-map': {
      type: 'Txtmap',
      preset: 'colorful',
      linkShape: 'diagonal',
    },
  },
  variables: {
    themeLou: {
      footer: {
        copyright: true, // 显示版权
      },
    },
  },
};
