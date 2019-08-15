# ant-design-dva

该项目使用dva-cli脚手架搭建而成 [dvajs](https://dvajs.com/guide/getting-started.html#%E5%AE%89%E8%A3%85-dva-cli)

根据dvajs执行的一些example

## Content main

- products  [dva示例]
- delaylist [延迟执行delay]
- loading   [全局dva-loading]
- count     [计数器]

## Record submission

### Cagalogue

- mock
- public
- src
    - aasets
    - components    //操作组件
    - models        //dva model文件
    - routes        //Container Components，在dva中我们通常将其约束为Route Components
    - services      //请求封装
    - utils         //工具箱,工具类
    - index.css
    - index.js
    - router.js
  
- .editorconfig
- .eslintrc
- .gitignore
- .roadhogrc.mock.js
- .webpackrc
- package.json
- README.md

### Dva概念

- Models
    - State
    
        state是存放状态的容器
    - Action
    
        Action 是一个普通 javascript 对象，它是改变 State 的唯一途径。
        ```
            {
                type:'add',
                payload: 'params'
            }

        ```
    - Dispatch
    
        dispatching function 是一个用于触发 action 的函数，action 是改变 State 的唯一途径，但是它只描述了一个行为，而 dipatch 可以看作是触发这个行为的方式，而 Reducer 则是描述如何改变数据的。
        ```
            dispatch({
                type:'user/add',    //如果在model外调用，需要添加 namepsce
                payload:{}          //需要传递的信息
            })
        ```
    - Reducers
    
        reducer纯函数接受两个参数(previousState,state)返回一个新的return state
    - Effects
        
        Effect被称为副作用，在我们的应用中，最常见的就是异步操作。底层引入了redux-sagas做异步流程控制
    - Subscriptions
    
        Subscriptions是一种从源获取数据的方法，数据源可以是当前的时间、keyboard、history路由变化等。

Models示例：
```
export default {
    namespace: 'example',    
    state: {},    
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },
    effects: {
        * fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },   
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    }
};

```

### dva同步异步执行顺序

view组件执行dispatch方法
```angular2html
    dispatch({
        type:'delete',
        payload:id
    })
```
models里面异步同步都有这个delete方法，此时先执行同步，在执行异步

```angular2html
const models = {
    namespace:'test',
    state:{},
    subscriptions:{},
    effects:{
        *delete(action,{call,put,select}){}
    },
    reducers:{
        delete(state,action){}
    }
}
```

### 版本介绍
npm i dva-cli -g 全局按照dva-cli版本
```$xslt
    dva-cli version 1.0.0-beta.4
```

npm i dva-cli@next -g 全局安装dva-cli@next版本[此版本dva介入umi]
```$xslt
    dva-cli version 0.10.1
```

### 项目工程化

- 添加utils/filter.js
- 添加utils/cookies.js
- 添加utils/verify.js

### Plugin

- yarn add dva-loading -S
- yarn add react-document-title -S
- yarn add react-document-title -S
