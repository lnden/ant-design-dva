import moment from 'moment';
import config from '../config/app.config';

moment.locale('zh-cn');

export const cookiesExpireTime = time => {
    let expireDate = new Date();
    expireDate = new Date(expireDate.getTime() + time || config.localCacheTime);
    return expireDate;
};

export const ago = date => {
    if (!date) {
        return null;
    }
    return moment(date).fromNow();
};

export default moment;
