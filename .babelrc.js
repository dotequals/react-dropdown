module.exports = {
  presets: [
    "@babel/env",
    "@babel/react",
  ],
  plugins: [
    ['prismjs', {
      languages: ['javascript', 'css', 'html', 'bash', 'shell-session', 'json', 'jsx'],
      plugins: ['line-numbers', 'show-language'],
      theme: 'tomorrow',
      css: true,
    }]
  ],
};