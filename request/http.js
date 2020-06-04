const request = (path, options) => {
    return new Promise((resolve, reject) => {
        wx.request({
            url: path,
            method: options.method,
            data: options.method === 'GET' ? options.data : JSON.stringify(options.data),
            header: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': wx.getStorageSync('token')//请求头携带token
            },
            success(res) {
                if (res.statusCode === 200) {
                    if (res.data.result.Code === '400') {
                        wx.reLaunch({
                            url: '/pages/acc/acc'
                        })
                    } else {
                        resolve(res.data.result)
                    }
                } else {
                    reject(res.data.result)
                }
            },
            fail(err) {
                console.log(err);
                reject(err)
            }
        })
    })
}

const get = (path, params = {}) => {
    return request(path, { method: 'GET', data: params })
}

const post = (path, params) => {
    return request(path, { method: 'POST', data: params })
}


module.exports = {
    get,
    post
}