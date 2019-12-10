const dom = {
  tagName: 'ul',
  props: {
    id: 'list',
    class: 'ul-wrapper'
  },
  children: [
    {tagName: 'li', props: {class: 'li-item'}, children: ['一段文本1']},
    {tagName: 'li', props: {class: 'li-item'}, children: ['一段文本2']},
    {tagName: 'li', props: {class: 'li-item'}, children: ['一段文本3']},
    {tagName: 'li', props: {class: 'li-item'}, children: ['一段文本4']}
  ]
}

const elDom = el('ul',{id: 'list', class: 'ul-wrapper'},[
    el('li',)
])
function Element(tag, props, children) {
  this.tagName = tag
  this.props = props
  this.children = children
}

Element.prototype.render = function () {
  // 新建元素
  const ele = document.createElement(this.tagName)
  // 插入class id等
  Object.keys(this.props).forEach(propsName => {
    ele.setAttribute(propsName, this.props[propsName])
  })
  // 处理children
  this.children.forEach(childItem => {
    const childEle =  (childItem instanceof Element)?childItem.render():document.createTextNode(childItem)
    console.log(this.tagName)
    console.log(childEle)
    ele.appendChild(childEle)
  })
}

function el(tagName,props,children) {
  return new Element(tagName, props, children)
}

function setDom(arr){
  arr.
}

document.body.append(ul)


