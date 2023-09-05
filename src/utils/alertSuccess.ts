import Swal from 'sweetalert2';

export const alertSuccess = (title: string, text: string) => {
  return Swal.fire({
    icon: 'success',
    title: title,
    html: text,
  });
};