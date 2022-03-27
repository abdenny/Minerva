import { ErrorMessage } from '@hookform/error-message';
import type { FieldErrors } from 'react-hook-form';

interface Props {
  errors: FieldErrors;
  name: string;
}

interface ErrorMessageContainerProps {
  children?: React.ReactNode;
}

const ErrorMessageContainer = ({ children }: ErrorMessageContainerProps) => (
  <div className="flex items-center mt-1">
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M0.935222 8.74935C0.74224 9.08269 0.98277 9.49987 1.36794 9.49987H10.6335C11.0187 9.49987 11.2592 9.08269 11.0662 8.74935L6.43342 0.747284C6.24084 0.414641 5.76058 0.414643 5.568 0.747285L0.935222 8.74935ZM6.50071 7.74987C6.50071 7.88794 6.38878 7.99987 6.25071 7.99987H5.75071C5.61264 7.99987 5.50071 7.88794 5.50071 7.74987V7.24987C5.50071 7.1118 5.61264 6.99987 5.75071 6.99987H6.25071C6.38878 6.99987 6.50071 7.1118 6.50071 7.24987V7.74987ZM6.50071 5.74987C6.50071 5.88794 6.38878 5.99987 6.25071 5.99987H5.75071C5.61264 5.99987 5.50071 5.88794 5.50071 5.74987V4.24987C5.50071 4.1118 5.61264 3.99987 5.75071 3.99987H6.25071C6.38878 3.99987 6.50071 4.1118 6.50071 4.24987V5.74987Z"
        fill="#F03738"
      />
    </svg>
    <span className="pl-2 text-sm text-gray-700">{children}</span>
  </div>
);

const CustomErrorMessage = ({ errors, name }: Props): JSX.Element => (
  <ErrorMessage
    errors={errors}
    name={name}
    render={({ message }) => <ErrorMessageContainer>{message}</ErrorMessageContainer>}
  />
);

ErrorMessageContainer.defaultProps = {
  children: <></>,
};

export default CustomErrorMessage;
