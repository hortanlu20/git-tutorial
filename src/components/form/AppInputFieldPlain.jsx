const AppInputFieldPlain = ({
  type,
  placeholder,
  defaultValue,
  className,
  handleChange,
  error,
}) => {
  return (
    <div className={`flex flex-col w-full gap-1 ${className}`}>
      <div className="flex flex-col gap-2">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="primary-input w-full h-[35px] p-3"
        />
        {error && isInputTouched && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default AppInputFieldPlain;
