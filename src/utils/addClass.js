export function addClass(el, className) {
  // 判断class是否存在
  if (_hasClassName(el, className)) return;
  // 不存在添加
  const newClassNameArr = el.className.split(" ");
  newClassNameArr.push(className);
  const newClassNameStr = newClassNameArr.join(" ");
  el.className = newClassNameStr;
}

function _hasClassName(el, className) {
  const reg = new RegExp(`(^|\\s)${className}(\\s|$)`);
  return reg.test(el.className);
}
