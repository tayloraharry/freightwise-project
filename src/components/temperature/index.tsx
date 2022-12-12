const Temperature: React.FC<{ value?: number }> = ({ value }) => {
  if (!value) return <></>;
  return <>{Math.round(value)}°</>;
};

export default Temperature;
