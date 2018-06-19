import 'whatwg-fetch';
import 'es6-promise';
// const HOST_URL = 'clickplus-crm.clickplus.cn';

export function get (url) {
    var result = fetch(url, {
        credentials: 'include',
        mode: 'cors',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    return result;
}