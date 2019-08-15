import {isObject} from "./verify";

/**
 * 对象转换字符串
 *
 * @name objTostr
 * @param objTostr({name:'lily',age:18})
 * @return name=lily&age=18
 *
 */
export const objTostr = obj => {
    if (!isObject(obj)) return '';

    return Object.getOwnPropertyNames(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&');
}

/**
 * 字符串转对象[类似query-string]
 *
 * @param strToobj
 * @param strToobj('name=lily&age=18')
 * @return {name:'lily',age:18}
 */
export const query = str => {
    // Creator an object with no prototype
    // https://github.com/sindresorhus/query-string/issues/47
    const ret = Object.create(null);

    if (typeof str !== 'string') {
        return ret;
    }

    // eslint-disable-next-line no-param-reassign
    str = str.trim().replace(/^(\?|#|&)/, '');

    if (!str) {
        return ret;
    }

    str.split('&').forEach(param => {
        const parts = param.replace(/\+/g, ' ').split('=');
        // Firefox (pre 40) decodes `%3D` to `=`
        // https://github.com/sindresorhus/query-string/pull/37
        let key = parts.shift();
        let val = parts.length > 0 ? parts.join('=') : undefined;

        key = decodeURIComponent(key);

        // missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        val = val === undefined ? null : decodeURIComponent(val);

        if (ret[key] === undefined) {
            ret[key] = val;
        } else if (Array.isArray(ret[key])) {
            ret[key].push(val);
        } else {
            ret[key] = [ret[key], val];
        }
    });

    return ret;
};

/**
 * 创建标准的柯里化 action
 *
 * @param objTostr
 * @return {function(*): {type: *, payload: *}}
 */
export const createAction = type => payload => ({
    type,
    payload,
});
