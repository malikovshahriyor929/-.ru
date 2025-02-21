const CustomInput = ({
  label,
  type = "text",
  placeholder,
  register,
  name,
  error,
}) => {
  return (
    <div className="flex flex-col w-full max-w-md">
      <label className="text-gray-600 text-sm font-medium mb-1">{label}</label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none  transition"
      />
      <p className="text-red-500">{error !== "undefined" && error}</p>
    </div>
  );
};
export default CustomInput;
