import React from 'react';
import {connect} from 'dva'
import ProductList from '../components/ProductList'


//React 子组件向父组件传值--------start
class Son extends React.Component {
    render() {
        return (
            <div style={{border:'1px solid #909'}}>
                儿子组件：<input onChange={this.props.handleChange}/>
            </div>
        )
    }
}

class Father extends React.Component {
    state = {
        msg: 'test'
    }
    handleChange = (e) => {
        this.setState({
            msg: e.target.value
        })
    }

    render() {
        return <div style={{border:'1px solid #f00'}}>
            父亲组件
            <div>
                <Son handleChange={this.handleChange}/>
                <p>这里显示Son组件的内容 <span style={{color: 'red'}}>{this.state.msg}</span></p>
            </div>
        </div>
    }
}

//-------------------------------end


const Products = ({dispatch, products,location}) => {
    function handleDelete(id) {
        dispatch({
            type: 'products/delete',
            payload: id
        })
    }

    return (
        <div>
            <h2>List of Products</h2>
            <ProductList onDelete={handleDelete} products={products} location={location}/>
            <Father/>
        </div>
    )
};

export default connect(({products}) => ({products}))(Products)
