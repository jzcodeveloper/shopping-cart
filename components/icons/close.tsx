import React from "react";
import PropTypes from "prop-types";

interface Props {
  className?: string;
}

function CloseIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

CloseIcon.defaultProps = {
  className: "h-6 w-6",
};

CloseIcon.propTypes = {
  className: PropTypes.string,
};

export default CloseIcon;
