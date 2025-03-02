import { twMerge } from "tailwind-merge";
import className from "classnames";

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
  const classes = twMerge(
    className("flex items-center px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-500 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline, // results in conflicting classnames, later classname will override the earlier ones
      "text-blue-500": outline && primary,
      "text-gray-500": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
    })
  );
  // underlying element
  return <button className={classes}>{children}</button>;
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
