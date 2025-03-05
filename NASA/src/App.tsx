import "./App.css";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "./contexts/theme-context";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./components/ErrorFallback";

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
