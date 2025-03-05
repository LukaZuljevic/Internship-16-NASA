import "./ErrorFallback.css";

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return (
    <div id="error-page">
      <h1 className="error-background">ERROR</h1>
      <div className="error-content">
        <h2>🛑Something went wrong🛑</h2>
        <p>Error: {error.message}</p>
        <button onClick={resetErrorBoundary}>Try Again</button>
      </div>
    </div>
  );
};
