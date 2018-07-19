'use strict'

import Pusher from 'pusher-js'
// import Echo from 'laravel-echo'
/*
var echo = new Echo({
  broadcaster: 'pusher',
  key: '1a7c234fb4766066b053',
  cluster: 'us2',
  encrypted: true
})
*/

var pusher = new Pusher('1a7c234fb4766066b053', {
  cluster: 'us2',
  encrypted: true
})

// export default echo
export default pusher
