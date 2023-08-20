import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="parent">
      <span>{percent.toFixed()}%</span>
      <div
        className="progress"
        style={{ width: `${percent}%`, transition: "width 0.2s ease" }}
      />
    </div>
  );
};

export default ProgressBar;
