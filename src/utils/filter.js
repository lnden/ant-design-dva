/**
 * @author Lnden
 * @date 2019/8/14
 * @desc 一些字典的过滤方法
 *
 * @Parse
 *     optionsFilter 为柯里化函数
 *     调用该函数两次返回不同结果
 *     1、调用函数传递options返回对象
 *     2、调用函数传递value值返回对应label
 *
 *
 * @Translation
 *     var optionsFilter = function optionsFilter(OPTIONS) {
 *         return function (value) {
 *             return OPTIONS.find(function (item) {
 *                 return item.value === value;
 *             }).label || '';
 *         };
 *     };
 *
 * @Use     genderFilter(item?.gender)
 *
 */

import {
    GENDER_OPTIONS
} from '../config/constant';

const optionsFilter = OPTIONS => value => OPTIONS.find(item => item.value === value)?.label || '';

export const genderFilter = optionsFilter(GENDER_OPTIONS);
export const feedbackStatusFilter = status => ['', '已提交', '已受理', '已完成'][status || 0];
