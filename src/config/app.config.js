const config = {};

config.dev = {
    apiDomain: 'http://localhost:8000',
    apiPath: '/api',
};

config['dev-online'] = {
    apiDomain: 'http://localhost:8000',
    apiPath: '/api',
};

config.prod = {
    apiDomain: 'http://localhost:8000',
    apiPath: '/api',
};

const common = {
    localCacheAlias: {
        token: 'token'
    },
    localCacheTime: 1000 * 3600 * 12,
    rootParentId: '1'
};

let env = '';
if (process.env.NODE_ENV === 'production') {
    env = 'prod';
} else if (process.env.NODE_ENV === 'dev-online') {
    env = 'dev-online';
} else {
    env = 'dev';
}

export default Object.freeze({...config[env], ...common});
