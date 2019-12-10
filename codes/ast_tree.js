const esprima = require('esprima')
const estraverse = require('estraverse')
const escodegen = require('escodegen')

let code = 'const a = 1'
// 输入，转换为语法树
const ast = esprima.parseScript(code)
// 解析中，加入kind，定义const let 为var
estraverse.traverse(ast, {
  enter: function (node) {
    node.kind = 'var'
  },
})
// 将树变为我们想要的代码
const transformCode = escodegen.generate(ast)

console.dir(ast, {depth: null})
console.dir(transformCode, {depth: null})

