import { toast } from 'react-toastify';

export const notify = (msg: string) => {
  toast.success(msg, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    progress: undefined,
  });
};
