import Swal from 'sweetalert2';

// 성공 알림
export const alertSuccess = (title: string, text: string) => {
  return Swal.fire({
    icon: 'success',
    title: title,
    html: text,
  });
};

// 실패 알림
export const alertError = (title: string, text: string) => {
  return Swal.fire({
    icon: 'error',
    title: title,
    html: text,
  });
};

// 성공 확인 질문
export const confirmSuccess = async (title: string, text: string, confirmText: string, denyText: string, imgSrc?: string) => {
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
    denyButtonColor: '#d33',
    imageUrl: imgSrc?imgSrc:""
  });
};

// 성공 알림
export const alertImage = (title: string, src:string) => {
  return Swal.fire({
    title: title,
    imageUrl: src,
    imageWidth: 400,
    imageAlt: title,
  });
};

export const confirmThumbnail =async ( ) => {
  const { value: file } = await Swal.fire({
    title: "Select image",
    input: "file",
    inputAttributes: {
      "accept": "image/*",
      "aria-label": "Upload your profile picture"
    }
  });

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      Swal.fire({
        title: "Your uploaded picture",
        imageUrl: e.target.result.toString(),
        imageAlt: "The uploaded picture"
      });
    };
    reader.readAsDataURL(file);
  }
}
