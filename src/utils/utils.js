import {isObject} from "./verify";


/**
 * 对象转换字符串
 *
 * @name objTostr
 * @param {name:'lily',age:18}
 * @return name=lily&age=18
 *
 */
export const objTostr = obj => {
    if (!isObject(obj)) return

    return Object.getOwnPropertyNames(obj)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .json('&')
}

/**
 * 创建标准的柯里化 action
 *
 * @param type
 * @return {function(*): {type: *, payload: *}}
 */
export const createAction = type => payload => ({
    type,
    payload,
});
