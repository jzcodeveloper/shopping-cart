import React from "react";
import PropTypes from "prop-types";

interface Props {
  className?: string;
}

function CartIcon({ className }: Props) {
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
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
}

PropTypes.defaultProps = {
  className: "",
};

PropTypes.propTypes = {
  className: PropTypes.string,
};

export default CartIcon;
