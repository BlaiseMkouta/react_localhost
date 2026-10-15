type VariantTypes = "primary" | "outlined" | "disabled";
type ButtonType = "submit" | "button";

interface ButtonProps {
  label: string;
  isLoading?: boolean;
  variant?: VariantTypes;
  type?: ButtonType ;
}

export const Button = ({
  label,
  isLoading = false,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className="px-12 py-2 bg-light-blue text-white font-semibold rounded-xl"
    >
      {isLoading ? "chargement.." : label}
    </button>
  );
};
