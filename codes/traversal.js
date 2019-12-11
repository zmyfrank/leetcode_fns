const tree = [
  {
    value: '1',
    key: 'one',
    children: [
      {
        value: '1-1',
        key: 'one-one',
        children: [
          {value: '1-1-1', key: 'one-one-one', children: []},
          {value: '1-1-2', key: 'one-one-two', children: []}],
      },
      {
        value: '1-2',
        key: 'one-two',
        children: [{value: '1-2-1', key: 'one-two-one', children: []}],
      },
    ],
  },
  {
    value: '2',
    key: 'two',
    children: [
      {
        value: '2-1',
        key: 'two-one',
        children: [
          {value: '2-1-1', key: 'two-one-one', children: []},
          {value: '2-1-2', key: 'two-one-two', children: []}],
      },
      {
        value: '2-2',
        key: 'two-two',
        children: [{value: '2-2-1', key: 'two-two-one', children: []}],
      },
    ],
  },
]

// 广度优先，一排一排的搜索下来
function breathTraversal (source, goal) {
  const dataSource = JSON.parse(JSON.stringify(source))
  const res = []
  const result = []

  function findParent (data) {
    result.unshift(data.key)
    if (data.parent) {
      findParent(data.parent)
    }
  }

  res.push(...dataSource)
  for (let i = 0; i < res.length; i++) {
    const value = res[i]
    if (value.value === goal) {
      findParent(value)
      return result
    }
    if (value.children && value.children.length > 0) {
      res.push(...value.children.map(childValue => {
        childValue.parent = value
        return childValue
      }))
    }
  }
  return result
}

// 深度优先，先遍历完一条再遍历另外一条
function deepTraversal (source, goal) {
  const deepSource = JSON.parse(JSON.stringify(source))
  const result = []

  function findParent (data) {
    result.unshift(data.key)
    if (data.parent) {
      findParent(data.parent)
    }
  }

  function searchDeep (value, parent) {
    console.log(value.value)
    // 添加parent，方便追踪
    if (parent) {
      value.parent = parent
    }
    // 找到目标则通过parent找到所有的目标
    if (value.value === goal) {
      findParent(value)
      return result
    }
    // 没有找到到，就递归调用，继续查找
    const childData = value.children
    if (childData && childData.length > 0) {
      return childData.some(childData => searchDeep(childData, value))
    }
  }

  // some方法碰到返回为true的时候会自动停止
  deepSource.some(deepValue => searchDeep(deepValue))

  return result
}

console.log(deepTraversal(tree, '8'))
