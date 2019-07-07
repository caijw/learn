module.exports = {
  title: '编译原理',
  description: '编译原理实践',
  head: [
    ['link', {
      rel: 'stylesheet',
      href: `/css/katex.min.css`
    }],
    ['link', {
      rel: 'stylesheet',
      href: `/css/github-markdown.css`
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
    }],

  ],
  themeConfig: {
    navbar: false,
    sidebar: [
      {
        title: '绪论',
        collapsable: true,
        children: [
          ['/01/01_whatIsCompiler', '什么是编译'],
          ['/01/02_compilerSystem', '编译系统的结构'],
          ['/01/03_lexicalAnalysis', '词法分析'],
          ['/01/04_syntaxAnalysis.md', '语法分析'],
          ['/01/05_semanticAnalysis.md', '语义分析'],
          ['/01/06_midCode_backend.md', '中间代码生成和后端'],
        ]
      },
      {
        title: '程序设计语言及其文法',
        collapsable: true,
        children: [
          ['/02/01_basic', '基本概念'],
          ['/02/02', '文法的定义'],
          ['/02/03', '语言的定义'],
        ]
      }
    ],
  },
  markdown: {
    config: md => {
      md.set({
        html: true
      })
      md.use(require("markdown-it-katex"))
    }
  }
}