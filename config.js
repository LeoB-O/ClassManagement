const config = {
  production: {
    baseURL: 'http://47.102.144.176:3000'
  },
  development: {
    baseURL: 'http://127.0.0.1:3000'
  }
}

export default process.env.NODE_ENV=='production'?config.production:config.development;