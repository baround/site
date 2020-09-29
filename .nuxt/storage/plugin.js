import Storage from './storage'

export default function nuxtUniversalStorage(ctx, inject) {
  const options = {
  "vuex": {
    "namespace": "storage"
  },
  "cookie": {
    "prefix": "",
    "options": {
      "path": "/"
    }
  },
  "localStorage": {
    "prefix": ""
  },
  "ignoreExceptions": false
}

  // Create new instance of Storage class
  const storage = new Storage(ctx, options)

  // Inject into context as $storage
  ctx.$storage = storage
  inject('storage', storage)
}
