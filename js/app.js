if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js')
  .then(r => console.log('Registro exitoso ', r))
  .catch(err => console.warn('error ', err))
}