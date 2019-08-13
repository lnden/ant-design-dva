/**
 *  @author Lnden
 *  @date 2019/8/13
 *  @desc verify[核实；查证]
 *  @name getType
 *      isObject
 *      isArray
 *      isString
 *      isBoolean
 *      isNumber
 *      isUndefined
 *      isNull
 *      isFunction
 *      isChinese
 *      isEmail
 *      isIDCard
 *      isMoney
 *      isPhone
 *      isUrl
 *      isServer
 *      isWeChat
 */


/**
 * 获取值的类型
 *
 * @name getType
 * @param 可以判断任js意类型
 * @return
 *      引用数据类型：Object、Array、Function
 *      基本数据类型：Number、String、Null、Boolean、Undefined、[symbol]
 */
export const getType = o => {
    return Object.prototype.toString.call(o).slice(8, -1);
};

/**
 * 判断是否Object
 *
 * @name isObject
 * @param {Object} o 判断对象
 * @return {boolean} 是否Object
 *
 * js判断是否是对象的几种方式
 *      1、toString（推荐）  ==>  Object.prototype.toString.call(obj) === '[Object Object]'
 *      2、constructor      ==>  obj.constructor === Object
 *
 *      3、instanceof       ==>  obj instanceof Object
 *      4、typeof           ==>  typeof obj === Object
 *
 *      由于数组也是对象，instanceof、typeof 判断数组也是object， 故有缺陷
 */
export const isObject = o => {
    return (
        (o || false) &&
        (o.constructor === Object || Object.prototype.toString.call(o) === '[object Object]')
    );
};

/**
 * 判断是否数组
 *
 * @name isArray
 * @param {Object} o 判断对象
 * @return {boolean} 是否数组
 */
export const isArray = o => {
    return (
        (o || false) &&
        (o.constructor === Array || Object.prototype.toString.call(o) === '[object Array]')
    );
};

/**
 * @name isString
 * @param {Object} o 判断对象
 * @return {boolean} 是否字符串
 */
export const isString = o => {
    return (o === '' || o || false) && o.constructor === String;
};

/**
 * 判断是否布尔类型
 *
 * @name isBoolean
 * @param {Object} o 判断对象
 * @return {boolean} 是否布尔类型
 */
export const isBoolean = o => {
    return (o === false || o || false) && o.constructor === Boolean;
};

/**
 * 判断是否数值类型
 *
 * @name isNumber
 * @memberOf Verify
 * @param {Object} o 判断对象
 * @return {boolean} 是否数值类型
 */
export const isNumber = o => {
    return (o === 0 || o || false) && o.constructor === Number;
};

/**
 * 判断是否undefined
 *
 * @name isUndefined
 * @memberOf Verify
 * @param {Object} o 判断对象
 * @return {boolean} 是否undefined
 */
export const isUndefined = o => {
    return typeof o === 'undefined';
};

/**
 * 判断是否Null
 *
 * @name isNull
 * @memberOf Verify
 * @param {Object} o 判断对象
 * @return {boolean} 是否Null
 */
export const isNull = o => {
    return o === null;
};

/**
 * 判断是否function
 *
 * @name isFunction
 * @memberOf Verify
 * @param {Object} o 判断对象
 * @return {boolean} 是否function
 */
export const isFunction = o => {
    return (o || false) && o.constructor === Function;
};

/**
 * Check whether the o is Chinese
 *
 * @name isChinese
 * @memberOf Verify
 * @param {object} o
 * @return {boolean} 是否是汉字
 */
export const isChinese = o => {
    return /^[\u4e00-\u9fa5]+$/.test(o);
};

/**
 * Check whether the o is Email
 *
 * @name isEmail
 * @memberOf Verify
 * @param {object} o
 * @return {boolean} 是否是邮箱
 */
export const isEmail = o => {
    return /^[\w-_]+@[\w-_]+(?:\.\w+)+$/.test(o);
};

/**
 * Check whether the o is Email
 *
 * @name isIDCard
 * @memberOf Verify
 * @param {object} o
 * @return {boolean} 身份证号是否正确
 */
export const isIDCard = o => {
    return /(?:^\d{15}$)|(?:^\d{17}(?:[0-9]|X|x)$)/.test(o);
};

/**
 * Check whether the o is Money
 *
 * @name isMoney
 * @memberOf Verify
 * @param {object} o
 * @return {boolean}
 */
export const isMoney = o => {
    return /^(?:(?:0)|[^0]\d*)(\.\d+)?$/.test(o);
};

/**
 * Check whether the o is phone
 *
 * @name isPhone
 * @memberOf Verify
 * @param {object} o
 * @return {boolean}
 */
export const isPhone = o => {
    return /^1\d{10}$/.test(o);
};

/**
 * Check whether the o is url
 *
 * @name isUrl
 * @memberOf Verify
 * @param {object} o
 * @return {boolean}
 */
export const isUrl = o => {
    return /^(?:ht|f)tp(?:s)?:\/\/(?:[\w\-.]+)\.\w+/i.test(o);
};

/**
 * Check whether the platform is server
 *
 * @name isServer
 * @memberOf Verify
 * @return {boolean}
 */
export const isServer = () => {
    return (
        typeof process !== 'undefined' &&
        Object.prototype.toString.call(process) === '[object process]'
    );
};

/**
 * Check whether the platform is weChat
 *
 * @name isWeChat
 * @memberOf Verify
 * @return {boolean}
 */
export const isWeChat = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.match(/MicroMessenger/i) !== null;
};

