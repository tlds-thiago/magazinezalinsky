import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initGA } from "./lib/analytics";

// Initialize Google Analytics
if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
  console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
} else {
  initGA();
}

createRoot(document.getElementById("root")!).render(<App />);
