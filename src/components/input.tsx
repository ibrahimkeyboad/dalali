interface props {
  id: string;
  type?: string;
  label: string;
  disabled?: boolean;
  formatPrice?: boolean;
  name: string;
  register?: any;
  errors: any;
}

function TextField({
  errors,
  id,
  label,
  register,
  disabled,
  formatPrice,
  type = 'text',
}: props) {
  return (
    <input
      className={`border-b-2 outline-none p-2   py-1 px-2 focus:border-[#098366] outline-none; dark:bg-[#112240] w-[100%] ${
        errors.errorsrors &&
        errors.touched[id] &&
        errors.errors[id] &&
        'border-red-400'
      }`}
      placeholder={label}
      {...register(id)}
      type={type}
    />
  );
}

export default TextField;
