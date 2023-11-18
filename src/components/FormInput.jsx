const FormInput = ({
  placeholder,
  value,
  type,
  label,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  return (
    <div className="form-control">
      <label htmlFor={label} className="label label-text capitalize">
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        id={label}
        className={error ? "input input-bordered input-gray-300 input-error" :"input input-bordered input-gray-300"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error ? (
        <label className="label text-red-600">{error}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
