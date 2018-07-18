'use strict'

import Echo from 'laravel-echo'

var echo = new Echo({
  broadcaster: 'pusher',
  key: 'your-pusher-key',
  cluster: 'eu',
  encrypted: true
})

module.exports = echo