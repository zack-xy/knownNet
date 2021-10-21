import axios from 'axios'
export const postRequest = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      },
      transformRequest: [function (data) {
        data = JSON.stringify(data)
        return data
      }],
      data: params,
      crossDomain: true,
      cache: false
    }).then(res => {
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}
