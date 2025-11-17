import { ProgressBarRound } from "@carbon/icons-react";

function Spinner() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-background-1">
      <ProgressBarRound
        fill="var(--color-icons)"
        size={40}
        className="animate-spin"
      />
    </div>
  );
}

export default Spinner;
