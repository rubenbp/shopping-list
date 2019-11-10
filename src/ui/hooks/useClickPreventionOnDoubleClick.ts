import useCancellablePromises, {
  buildCancellablePromise,
} from './useCancellablePromises'

import { delay } from '../utils'

const useClickPreventionOnDoubleClick = (onClick: any, onDoubleClick: any) => {
  const api = useCancellablePromises()

  const handleClick = () => {
    api.clearPendingPromises()
    const waitForClick = buildCancellablePromise(delay(400))
    api.appendPendingPromise(waitForClick)

    return waitForClick.promise
      .then(() => {
        api.removePendingPromise(waitForClick)
        onClick()
      })
      .catch(errorInfo => {
        api.removePendingPromise(waitForClick)
        if (!errorInfo.isCanceled) {
          throw errorInfo.error
        }
      })
  }

  const handleDoubleClick = () => {
    api.clearPendingPromises()
    onDoubleClick()
  }

  return [handleClick, handleDoubleClick]
}

export default useClickPreventionOnDoubleClick
