import React from "react";
import PropTypes from "prop-types";

interface Props {
  className?: string;
}

function ChevronDown({ className }: Props) {
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
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

ChevronDown.defaultProps = {
  className: "h-6 w-6",
};

ChevronDown.propTypes = {
  className: PropTypes.string,
};

export default ChevronDown;
