//自己写的订阅/发布模式
let pubsub = function () {
  this.handlers = {}
}
pubsub.prototype.on = function (eventType, handler) {
  let pub = this
  if (!(eventType in pub.handlers)) {
    pub.handlers[eventType] = []
  }
  pub.handlers[eventType].push(handler)
  return pub //返回该实例，可以链式调用
}
pubsub.prototype.emit = function (eventType) {
  let sub = this
  let handlerArg = [...arguments]
  if (!(eventType in sub.handlers)) { //如果实例里面没有这个类型,先把这个类型声明为数组
    sub.handlers[eventType] = []
  }
  sub.handlers[eventType].length && sub.handlers[eventType].forEach((fn) => {
    fn.apply(null, handlerArg)
  });
  return sub //返回该实例，可以链式调用
}

pubsub.prototype.off = function (eventType) {
  let pb = this
  if (!pb.handlers[eventType]) throw new Error('没有发布该事件，无法删除')
  delete pb.handlers[eventType]
}

export default pubsub
