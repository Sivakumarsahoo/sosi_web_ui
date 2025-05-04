import React, { InputHTMLAttributes, useEffect, useState } from "react";

const ErrorBoundary: React.FC<Props> = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const ErrorMsg = () => {
    return (
      <pre>Sorry.. for the inconvenience. Please contact the adminstrator</pre>
    );
  };

  const errorHandler = (error: Error, errorLocation: string) => {
    console.log(error, errorLocation);
    setHasError(true);
  };

  useEffect(() => {
    const errorHandle = (error: ErrorEvent) => {
      errorHandler(new Error(error.message), error.filename);
    };
    window.addEventListener("error", errorHandle);
    return () => {
      window.removeEventListener("error", errorHandle);
    };
  }, []);

  if (hasError) return ErrorMsg();
  return <>{children}</>;
};
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: any;
}
export default ErrorBoundary;
