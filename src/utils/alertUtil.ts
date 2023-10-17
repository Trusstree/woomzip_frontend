import Swal from 'sweetalert2';

// 성공 알림
export const alertSuccess = (title: string, text: string) => {
  return Swal.fire({
    icon: 'success',
    title: title,
    html: text,
  });
};

// 성공 확인 질문
export const confirmSuccess = async (title: string, text: string, confirmText: string, denyText: string) => {
  return Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    allowOutsideClick: false,
    showCloseButton: true,
    showDenyButton: true,
    confirmButtonText: confirmText,
    confirmButtonColor: '#81c147',
    denyButtonText: denyText,
    denyButtonColor: '#d33'
  });
};