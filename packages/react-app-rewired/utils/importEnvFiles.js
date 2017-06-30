const path = require('path');

const dotEnvPath = path.resolve(__dirname, '.env')

// Use same algorithme to load .env files then create-react-app
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/config/env.js#L28
var dotenvFiles = [
  `${dotEnvPath}.${process.env.NODE_ENV}.local`,
  `${dotEnvPath}.${process.env.NODE_ENV}`,
  // Don't include `.env.local` for `test` environment
  // since normally you expect tests to produce the same
  // results for everyone
  process.env.NODE_ENV !== 'test' && `${dotEnvPath}.local`,
  dotEnvPath,
].filter(Boolean);

// Load environment variables from .env* files. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile,
    });
  }
});
