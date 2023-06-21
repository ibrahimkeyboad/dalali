interface props {
  type?: string;
  name: string;
  disabled?: boolean;
  formik: any;
  hint: string;
}

function InputAuth({ disabled, formik, hint, name, type = 'text' }: props) {
  return (
    <input
      className={`input input-bordered input-neutral w-full max-w-xs${
        formik.errors &&
        formik.touched[name] &&
        formik.errors[name] &&
        'border-error'
      }`}
      disabled={disabled}
      placeholder={hint}
      {...formik.getFieldProps(name)}
      type={type}
    />
  );
}

export default InputAuth;
