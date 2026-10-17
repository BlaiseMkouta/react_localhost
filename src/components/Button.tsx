type VariantTypes = "primary" | "outlined" | "disabled";
type ButtonType = "submit" | "button";

interface ButtonProps {
  label: string;
  isLoading?: boolean;
  variant?: VariantTypes;
  type?: ButtonType;
  action?: () => void;
    className?: string

}

export const Button = ({
  label,
  isLoading = false,
  type = "button",
  action,
  className
}: ButtonProps) => {
  return (
    <button
      onClick={action}
      type={type}
      className={`px-12 py-2 bg-light-blue text-white  font-semibold rounded-xl ${className}`}
    >
      {isLoading ? "chargement.." : label}
    </button>
  );
};
