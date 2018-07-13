const isDevEnv = process.env.ENVIRONMENT === 'local' || process.env.ENVIRONMENT === 'uat';

export default {
  allowExplorer: isDevEnv
}
