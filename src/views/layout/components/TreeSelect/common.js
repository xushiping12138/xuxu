import {
  isArray,
  cloneDeep
} from 'lodash'
export function treeFormat(list, key = 'id', parentKey = 'parentId', childKey = 'children') {
  const sNodes = cloneDeep(list)
  let ii, i, j, k, l, len, len1, r, tmpMap
  if (isArray(sNodes)) {
    r = []
    tmpMap = []
    for (k = 0, len = sNodes.length; k < len; k++) {
      i = sNodes[k]
      // i.text = i.label
      tmpMap[i[key]] = i
    }

    for (l = 0, len1 = sNodes.length; l < len1; l++) {
      j = sNodes[l]
      // 父元素存在 且 父元素ID与子元素不相等
      if (tmpMap[j[parentKey]] && j[key] !== j[parentKey]) {
        if (!tmpMap[j[parentKey]][childKey]) {
          tmpMap[j[parentKey]][childKey] = []
        }
        tmpMap[j[parentKey]][childKey].push(j)
      } else {
        r.push(j)
      }
    }
    // 拼接 子元素的数量
    const reset = function(val) {
      for (let q = 0, len = val.length; q < len; q++) {
        ii = val[q]
        // val[q].collected = false
        if (ii.children && ii.children.length) ii.alias = ii.alias + ' [' + ii.children.length + ']'
        if (ii.children) reset(ii.children)
      }
      return val
    }

    return reset(r)
  } else {
    return [sNodes]
  }
}

export function zeroTime(time) {
  if (time) {
    const today = new Date(time)
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
    return today
  } else {
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
    return today
  }
}
