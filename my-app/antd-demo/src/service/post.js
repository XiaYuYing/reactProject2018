import 'whatwg-fetch';
import 'es6-promise';
// const HOST_URL = 'http://clickplus-crmtest.clickplus.cn';

function obj2params (obj) {
    var result = '';
    var item;
    for (var item in obj) {
        result += '&' + item + '=' +encodeURIComponent(obj[item]);
    }
    if (result) {
        result = result.slice(1);
    }
    return result;
}
export function post (url, paramsObj) {
    var result = fetch(url, {
        method: 'post',
        // mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
            // 'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    });
    return result;
}