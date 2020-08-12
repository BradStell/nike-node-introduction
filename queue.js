const Queue = () => {
  const queue = []
  const QUEUE_PROCESS_SIZE = 10

  const processsQueue = () => {
    const copy = [...queue]
    queue.splice(0, copy.length)

    while (copy.length) {
      const item = copy.shift()
      // Process item
      item()
    }
  }

  const push = (...item) => {
    queue.push(...item)
    if (queue.length >= QUEUE_PROCESS_SIZE) processsQueue()
  }

  const flush = () => {
    processsQueue()
  }

  const isEmpty = () => queue.length === 0

  return {
    push,
    flush,
    isEmpty
  }
}

const queue = Queue()

const wrapInFn = item => () => {
  if (item % 2 === 0)
    console.log(item)
  else
    queue.push(wrapInFn(item))
}

const start = async () => {
  const results = await Promise.allSettled([
    new Promise((resolve) => {
      for (let i = 0; i < 15; i++) {
        queue.push(wrapInFn(i))
      }
      if (!queue.isEmpty()) {
        queue.flush()
      }
    }),
    new Promise((resolve) => {
      for (let i = 15; i < 22; i++) {
        queue.push(wrapInFn(i))
      }
      if (!queue.isEmpty()) {
        queue.flush()
      }
    })
  ])

  console.log(results)
}
start()
