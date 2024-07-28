// eslint-disable-next-line node/prefer-global/process
const isProd = Boolean(process.env.REACT_APP_ENV === 'prod');
// 1c0bbce296db4f528a0b7dcf3d8feb6b
// 5d3b122e45754fb49a3f20a5653b3176
const config = {
  API_KEY: isProd ? 'production key here!' : '1c0bbce296db4f528a0b7dcf3d8feb6b',
};

export {
  config,
};

