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
      className={`border-b-2 outline-none p-2   py-1 px-2 focus:border-[#098366] outline-none; dark:bg-[#112240] w-[100%] ${
        formik.errors &&
        formik.touched[name] &&
        formik.errors[name] &&
        'border-red-400'
      }`}
      disabled={disabled}
      placeholder={hint}
      {...formik.getFieldProps(name)}
      type={type}
    />
  );
}

export default InputAuth;
