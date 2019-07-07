module.exports = {
  title: '编译原理',
  description: '编译原理实践',
  head: [],
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
        ]
      }

      
      
    ]
  }
}