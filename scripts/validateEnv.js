const path = require("path");
const dotenv = require("dotenv");

const PRESET_KEYS = ["SPOKE_AUTH_SERVICE_URL", "SPOKE_API_URL"];

const ENV_FUNCTIONS_FILE_PATH = "../functions/.env";
const ENV_PLUGIN_FILE_PATH = "../.env";

const isExampleValue = ({ envKey, envValue, envExampleValue }) => {
  if (PRESET_KEYS.includes(envKey)) {
    return;
  }

  return envValue === envExampleValue;
};

const validateEnvVariable = (input) => {
  const { envKey, envValue, envFilePath } = input;

  if (!envValue || !envValue.trim() || isExampleValue(input)) {
    throw new Error(
      `Environment variable ${envKey} in ${envFilePath} has not been set or is using example value. Please refer to the README.md for more information.`
    );
  }
};

const validateEnv = () => {
  const envType = process.argv.slice(2)[0];
  const pathToEnv = envType === "function" ? ENV_FUNCTIONS_FILE_PATH : ENV_PLUGIN_FILE_PATH;

  const envFilePath = path.resolve(__dirname, pathToEnv);
  const envExampleFilePath = path.resolve(__dirname, `${pathToEnv}.example`);
  const env = dotenv.config({ path: envFilePath }).parsed;
  const envExample = dotenv.config({ path: envExampleFilePath }).parsed;

  if (!env) {
    throw new Error(
      `${envFilePath} file missing. Please refer to the README.md for more information.`
    );
  }

  Object.keys(envExample).forEach((envKey) => {
    validateEnvVariable({
      envKey,
      envValue: env[envKey],
      envExampleValue: envExample[envKey],
      envFilePath
    });
  });
  console.log(`Successfully validated ${envFilePath}`);
};

validateEnv();
