let timerInterval
Swal.fire({
  icon: 'error',
  title: 'Producto no encontrado!',
  html: 'Seras redireccionado en <b></b> millisegundos.',
  timer: 5000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
    window.location.href = '../';    
  }
})