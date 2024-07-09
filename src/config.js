// eslint-disable-next-line node/prefer-global/process
const isProd = Boolean(process.env.REACT_APP_ENV === 'prod');

const config = {
  API_KEY: isProd ? 'production key here!' : 'XTr394A1as2ZAxWjTklQpaAGsyVKCcq1',
};

export {
  config,
};

