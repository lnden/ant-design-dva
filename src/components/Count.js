import React, {Component} from 'react'
import lodash from 'lodash';
import cloneDeep from 'lodash/cloneDeep';

export default class Count extends Component {
    render() {
        const newObj = {
            name: 'lily',
            age: 16
        };
        const obj = cloneDeep(newObj)

        obj.name = 'lucy'
        console.log('深拷贝对象：', obj)
        console.log(newObj)
        console.log('深比较：', lodash.isEqual(newObj, obj))
        return (
            <span>{this.props.count}</span>
        )
    }
}
