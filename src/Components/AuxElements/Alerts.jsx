import Swal from 'sweetalert2'

const Alerts = (type, headligth, paragraph, time) => {  
     
    let timerInterval
    Swal.fire({
      icon: type,
      title: headligth,
      html: paragraph,
      timer: time,
      timerProgressBar: true,
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
}

export default Alerts