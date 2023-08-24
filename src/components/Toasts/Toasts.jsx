import { Toast, ToastContainer } from "react-bootstrap";
import { useMetaMask } from "../../hooks/useMetamask";

export default function Toasts() {
  const { error, toastMessages, clearToastMessage } = useMetaMask();

  return (
    <ToastContainer className="p-3">
      {error &&
        toastMessages.map((toast) => {
          return (
            <Toast
              key={toast.id}
              onClose={() => clearToastMessage(toast.id)}
              delay={5000}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto text-uppercase">{toast.type}</strong>
              </Toast.Header>
              <Toast.Body>{toast.message}</Toast.Body>
            </Toast>
          );
        })}
    </ToastContainer>
  );
}
