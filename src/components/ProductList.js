import React from 'react'
import PropTypes from 'prop-types'
import {Table, Popconfirm, Button} from 'antd';
import DocumentTitle from 'react-document-title';
import pathToRegexp from 'path-to-regexp'

//location:{pathname}
const ProductList = ({onDelete, products,location}) => {
    const columns = [{
        title: 'Name',
        dataIndex: 'name',
    }, {
        title: 'Actions',
        render: (record) => {
            return (
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                    <Button>Delete</Button>
                </Popconfirm>
            )
        }
    }]
    function getPageTitle() {
        let title = `产品${location.pathname}`;
        const isMatch = pathToRegexp('/products').test('/products')
        console.log('path-to-regexp',isMatch)

        // this.routeList.forEach(item => {
        //     if (pathToRegexp(item.path).test(pathname)) {
        //         title = item.name || title;
        //     }
        // });
        return title;
    }
    return (
        <DocumentTitle title={getPageTitle()}>
            <Table
                rowKey={record=>record.id}
                dataSource={products}
                columns={columns}
            />
        </DocumentTitle>

    )
}

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
}

export default ProductList
