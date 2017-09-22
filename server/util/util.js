let NODE_ENV = (process.env.NODE_ENV || 'development');
let ENV_CONFIG = JSON.stringify(require('../../config/' + NODE_ENV + '.config'));

function getEnvConfig() {
	return JSON.parse(ENV_CONFIG);
}
module.exports.getEnvConfig = getEnvConfig;
