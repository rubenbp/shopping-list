import { useRef } from 'react'

const useCancellablePromises = () => {
  const pendingPromises = useRef<CancellablePromise[]>([])

  const appendPendingPromise = (promise: CancellablePromise) =>
    (pendingPromises.current = [...pendingPromises.current, promise])

  const removePendingPromise = (promise: CancellablePromise) =>
    (pendingPromises.current = pendingPromises.current.filter(
      p => p !== promise,
    ))

  const clearPendingPromises = () =>
    pendingPromises.current.map(p => p.cancel())

  const api = {
    appendPendingPromise,
    removePendingPromise,
    clearPendingPromises,
  }

  return api
}

interface CancellablePromise {
  promise: Promise<any>
  cancel: () => void
}

export const buildCancellablePromise = (
  promise: Promise<any>,
): CancellablePromise => {
  let isCanceled = false

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      value => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
      error => reject({ isCanceled, error }),
    )
  })

  return {
    promise: wrappedPromise,
    cancel: () => (isCanceled = true),
  }
}

export default useCancellablePromises
