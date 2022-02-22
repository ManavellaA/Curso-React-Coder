import Swal from 'sweetalert2'

const Alerts = (type, headligth, paragraph, time) => {  
     
    Swal.fire({
      position: 'top',
      icon: type,
      title: headligth,
      text: paragraph,
      showConfirmButton: false,
      timer: time,
      timerProgressBar: true
    })
}

export default Alerts