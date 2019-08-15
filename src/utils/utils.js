import {isObject} from "./verify";
import cloneDeep from 'lodash/cloneDeep';

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

/**
 * 获取路由All对象
 *
 * @param getPlainRoute(routers.children)
 * @return route.children list
 *
 * Explain
 *  该方法为回调
 *  回调修改path、exact的值，并且返回一个新的children list
 *
 */
const getPlainRoute = (routes, parentPath = '') => {
    const arr = [];
    routes.forEach(route => {
        const item = route;
        item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
        item.exact = true;
        if (item.children && !item.component) {
            arr.push(...getPlainRoute(item.children, item.path));
        } else {
            if (item.children && item.component) {
                item.exact = false;
            }
            arr.push(item);
        }
    });
    return arr;
};

/**
 * 获取路由对象
 *
 * @param getRouteData(routers,'UserLayout')
 * @return route.children list
 *
 * @Explain
 *  该方法获取（路由集合，路由名称），深拷贝名称相等的Route
 *  调用回调方法获取所有路由
 *
 * Routers
 *
 */
export const getRouteData = (navData, layoutName) => {
    if (
        !navData.some(item => item.layout === layoutName) ||
        !navData.filter(item => item.layout === layoutName)[0].children
    ) {
        return null;
    }
    const route = cloneDeep(navData.filter(item => item.layout === layoutName)[0]);
    return getPlainRoute(route.children);
};



const routers = [
    {
        "layout":"UserLayout",
        "children":[
            {
                "path":"user",
                "children":[
                    {
                        "path":"login",
                        "name":"登录"
                    },
                    {
                        "path":"resetPassword",
                        "name":"重置密码"
                    },
                    {
                        "path":"register",
                        "name":"注册"
                    }
                ]
            }
        ],
        "path":"/",
        "exact":false
    }
]
