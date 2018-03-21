import 'whatwg-fetch'

// 设定一个symbol类型做为唯一的属性名
export const CALL_API = Symbol('call_api')

const API_HOST = process.env.API_HOST || 'http://localhost:8080/pc'

export default store => next => action => {
  const callApi = action[CALL_API]
  if (typeof callApi === 'undefined') {
    return next(action)
  }

  // 获取action中参数
  let { endpoint,
        types: [requestType, successType, failureType],
        method,
        body,
        ...options
      } = callApi
  let finalBody = body

  if (method) {
    options.method = method.toUpperCase()
  }
  if (typeof body === 'function') {
    finalBody = body(store.getState())
  }
  if (finalBody) {
    options.body = JSON.stringify(finalBody)
    options.headers = { 'content-type': 'application/json', 'agent': 'pc' }
  } else {
    options.headers = { 'cache-control': 'no-cache', 'agent': 'pc' }
  }
  // 替换action标记方法
  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  next(actionWith({ type:requestType }))

  return fetch(`${API_HOST}${endpoint}`,{
    credentials: 'include',
    ...options,
  })
  .then(response => {
    if (response.status === 204) {
      return { response }
    }
    const type = response.headers.get('content-type')
    if (type && type.split(';')[0] === 'application/json') {
      return response.json().then(json => ({ json, response }))
    }
    return response.text().then(text => ({ text, response }))
  })
  .then(({ json, text, response }) => {
    if (response.ok) {
      if (json) {
        if (json.status === 200 && json.data) {
          next(actionWith({ type: successType, payload: json.data }))
        } else if (json.status === 500) {
          next(actionWith({ type: successType, payload: json.msg }))
        } else {
          next(actionWith({ type: successType }))
        }
      }
    } else {
      if (json) {
        let error = { status: response.status }
        if (typeof json === 'object') {
          error = { ...error, ...json }
        } else {
          error.msg = json
        }
        throw error
      }
      const error = {
        name: 'FETCH_ERROR',
        status: response.status,
        text,
      }
      throw error
    }
  })
  .catch((error) => {
    next(actionWith({ type: failureType, error }))
    handleError(error)
  })
}
