const app = getApp()

const request = (url, options) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${app.globalData.host}${url}`,
            method: options.method,
            data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
            header: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            success(res) {
                res.data.statusCode === 200 ? resolve(res.data.result) : reject(res.data.result)

            },
            fail(error) {
                reject(error)
            }
        })
    })
}

const get = (url, options = {}) => {
    return request(url, { method: 'GET', data: options })
}

const post = (url, options) => {
    return request(url, { method: 'POST', data: options })
}



module.exports = {
    get,
    post
}