import { ClipLoader } from "react-spinners";
import "./Spinner.css";

function Spinner({ loading }) {
  if (!loading) return null;

  return (
    <div className="loading-overlay">
      <ClipLoader
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;
