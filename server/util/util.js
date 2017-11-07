const NODE_ENV = (process.env.NODE_ENV || 'development');
const ENV_CONFIG = JSON.stringify(require('../../config/' + NODE_ENV + '.config'));

export const envConfig = JSON.parse(ENV_CONFIG);
export default envConfig;
