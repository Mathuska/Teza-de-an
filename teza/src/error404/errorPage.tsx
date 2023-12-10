import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = (location.state as any)?.error;

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Scuze, a apărut o eroare neașteptată.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
