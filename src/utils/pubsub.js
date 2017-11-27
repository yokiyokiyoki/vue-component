//自己写的订阅/发布模式(有缺陷，只能先发布，再订阅)
let pubsub = function () {
  this.handlers = {}
}
pubsub.prototype.$on = function (eventType, handler) {
  let pub = this
  if (!(eventType in pub.handlers)) {
    pub.handlers[eventType] = []
  }
  pub.handlers[eventType].push(handler)
  return pub //返回该实例，可以链式调用
}
pubsub.prototype.$emit = function (eventType) {
  let sub = this
  let handlerArg = [...arguments]
  sub.handlers[eventType].length && sub.handlers[eventType].forEach((fn) => {
    fn.apply(null, handlerArg)
  });
  return sub //返回该实例，可以链式调用
}

pubsub.prototype.$off = function (eventType) {
  let pb = this
  if (!pb.handlers[eventType]) throw new Error('没有发布该事件，无法删除')
  delete pb.handlers[eventType]
}

export default pubsub
