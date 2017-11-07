const ENV = (process.env.ENV || 'development');
const ENV_CONFIG = JSON.stringify(require('../../config/' + ENV + '.config'));

export const envConfig = JSON.parse(ENV_CONFIG);
export default envConfig;
