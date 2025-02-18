import PropTypes from "prop-types";

// wrapper
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  // underlying element
  return <button>{children}</button>;
}

// you apply the custom validator to specific keys
Button.propTypes = {
  // why not outline/rounded?
  // ah bc those are separate, they could both be true and it would make sense.
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    // values will be true or undefined for variation props
    // assign numbers to true and undefined, and add them up accordingly
    // Number(true) --> returns 1
    // Number(undefined) --> NaN
    // Number(!!undefined) --> 0
    // !undefined --> true
    // !!undefined --> false
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error(
        "Only one of (primary, secondary, success, warning, danger) can be true "
      );
    }
  },
};

export default Button;
