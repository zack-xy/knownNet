class TrackablePromise extends Promise {
  constructor(executor) {
    const notifyHandlers = [];

    super((resolve, reject) => {
      return executor(resolve, reject, (status) => {
        notifyHandlers.map((hanlder) => hanlder(status))
      })
    })

    this.notifyHandlers = notifyHandlers
  }

  notify (notifyHandler) {
    this.notifyHandlers.push(notifyHandler)
    return this
  }
}

// 实例化一个promise
let p = new TrackablePromise((resolve, reject, notify) => {
  function countdown (x) {
    if (x > 0) {
      notify(`${20 * x}% remaining`)
      setTimeout(() => countdown(x - 1), 1000)
    } else {
      resolve()
    }
  }

  countdown(5)
})