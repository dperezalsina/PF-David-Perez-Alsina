Swal.fire({
    icon: 'success',
    title: 'Compra realizada',
    text: 'Gracias por elegirnos',
  })

  let btn_volver = document.getElementById("volver");



  btn_volver.addEventListener("click", ()=> location.href = "../index.html");