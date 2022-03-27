interface Props {
  className?: string;
  height?: string;
  width?: string;
  fill?: string;
}

const Hamburger = ({ className, height, width, fill }: Props): JSX.Element => {
  return (
    <svg
      className={className}
      height={height}
      width={width}
      fill={fill}
      viewBox="0 0 24 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
        fill={fill}
      />
      <path
        d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
};

Hamburger.defaultProps = {
  className: '',
  style: {},
  height: '16',
  width: '16',
  fill: '#052948',
};

export default Hamburger;
