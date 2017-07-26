//自己写的订阅/发布
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
  //   sub.handlers[eventType]()
  if (!sub.handlers[eventType]) throw new Error('没有发布该事件，无法订阅')
  let handlerArg = Array.prototype.slice.call(arguments, 1)
  console.log(arguments)
  sub.handlers[eventType].forEach(function (item, index) {
    item.apply(null, handlerArg)
  });
  return sub //返回该实例，可以链式调用
}

pubsub.prototype.off = function (eventType) {
  let pb = this
  if (!pb.handlers[eventType]) throw new Error('没有发布该事件，无法删除')
  delete pb.handlers[eventType]
}

export default pubsub
