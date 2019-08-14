/**
 *  @author Lnden
 *  @date 2019/8/14
 *  @desc const 定义常量
 *
 */

//create user info
export const GENDER_OPTIONS = Object.freeze([
    {label: '男', value: 1},
    {label: '女', value: 2},
]);

export const EMPLOYEE_STATUS_OPTIONS = Object.freeze([
    {label: '在职', value: 1},
    {label: '离职', value: 2},
]);

export const CONTRAACT_TYPE_OPTIONS = Object.freeze([
    {label: '正式', value: 1},
    {label: '使用', value: 2},
    {label: '实习', value: 3},
])

export const STATUS_OPTIONS = Object.freeze([
    {label: '启用', value: 1},
    {label: '禁用', value: 2},
]);

export const SYSTEM_MESSAGE_TYPE_OPTIONS = Object.freeze([
    {label: '普通', value: 1},
    {label: '重要', value: 2}
]);

export const POST_OPTIONS = Object.freeze([
    {label: '正式', value: 1},
    {label: '外派', value: 2},
    {label: '兼职', value: 3},
    {label: '校企', value: 4},
]);

export const EDUCATION_OPTIONS = Object.freeze([
    {label: '本科以上', value: 1},
    {label: '本科', value: 2},
    {label: '大专', value: 3},
    {label: '大专一下', value: 4},
]);

export const MARITAL_STATUS_OPTIONS = Object.freeze([
    {label: '未婚', value: 1},
    {label: '已婚', value: 2},
]);

export const VIDEO_QUALITY_OPTIONS = Object.freeze([
    {label: '超清', value: 1},
    {label: '清晰', value: 2},
    {label: '一般', value: 3},
    {label: '模糊', value: 4},
    {label: '非常模糊', value: 5},
])

export const PAY_METHOD_OPTIONS = Object.freeze([
    {label: '现金', value: 1},
    {label: 'POS机', value: 2},
    {label: '微信转账(个人收款码)', value: 3},
    {label: '微信支付', value: 4},
    {label: '支付宝转账(个人收款码)', value: 5},
    {label: '支付宝付款', value: 6},
]);


export const ARREARS_STATUS_OPTIONS = Object.freeze([
    {label: '否', value: 1},
    {label: '是', value: 2},
]);

export const EXAM_RESULT_OPTIONS = Object.freeze([
    {label: '未考试', value: 1},
    {label: '已通过', value: 2},
    {label: '未通过', value: 3},
]);

export const QUIT_SCHOOL_OPTIONS = Object.freeze([
    {label: '是', value: 2},
    {label: '否', value: 1},
]);

export const FEEDBACK_TYPE_OPTIONS = Object.freeze([
    {label: '问题', value: 1},
    {label: '需求', value: 2},
    {label: '投诉', value: 3},
]);

export const COACH_GRADE_OPTIONS = Object.freeze([
    {label: '一级', value: 1},
    {label: '二级', value: 2},
    {label: '三级', value: 3},
    {label: '四级', value: 4},
]);

export const TEACH_PLAN_STATUS_OPTIONS = Object.freeze([
    {label: '上线', value: 1},
    {label: '下线', value: 2},
]);

export const RESERVATION_STATUS_OPTIONS = Object.freeze([
    {label: '已提交', value: 1},
    {label: '已受理', value: 2},
    {label: '已完成', value: 3},
    {label: '用户取消', value: 4},
    {label: '系统取消', value: 5},
]);

export const LIB_ORDER_STATUS_OPTIONS = Object.freeze([
    {label: '已支付', value: 1},
    {label: '未支付', value: 2},
]);


export const DELAY_ACCEPT_TYPE_OPTIONS = Object.freeze([
    {label: '手动处理', value: 1},
    {label: '系统自动处理', value: 2},
]);


export const ATTEND_CHECK_TYPE_OPTIONS = Object.freeze([
    {label: '上班', value: 'OnDuty'},
    {label: '下班', value: 'OffDuty'},
]);

export const ATTEND_LOCATION_RESULT_OPTIONS = Object.freeze([
    {label: '范围内', value: 'Normal'},
    {label: '范围外', value: 'Outside'},
    {label: '未打卡', value: 'NotSigned'},
]);

export const ATTEND_TIME_RESULT_OPTIONS = Object.freeze([
    {label: '正常', value: 'Normal'},
    {label: '早退', value: 'Early'},
    {label: '迟到', value: 'Late'},
    {label: '严重迟到', value: 'SeriousLate'},
    {label: '旷工迟到', value: 'Absenteeism'},
    {label: '未打卡', value: 'NotSigned'},
]);

export const OPEN_REMIND_STATUS_OPTIONS = Object.freeze([
    {label: '开启', value: true},
    {label: '关闭', value: false},
]);

export const EXAM_ORDER_OPTIONS = Object.freeze([
    {label: '上午', value: '上午'},
    {label: '下午', value: '下午'},
]);

export const SYSLOG_TYPE_OPTIONS = Object.freeze([
    {label: '操作日志', value: 0},
    {label: '异常日志', value: 1},
]);
