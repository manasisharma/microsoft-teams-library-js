import './Button.css';
export type ButtonProps = {
  onClick: (e) => void;
  label: string;
};

export const Button = (props: ButtonProps) => {
  const { label, onClick } = props;

  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  );
};
