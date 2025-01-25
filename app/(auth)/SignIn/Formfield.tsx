import { FormFieldProps } from "./type";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  register,
  Errors,
  Invalid,
  icon,
}) => {
  return (
    <>
      <label
        htmlFor={label}
        className="text-[14px] font-medium text-neutral-900 dark:text-neutral-700"
      >
        {label}
      </label>
      <div className="w-fit h-fit flex items-center relative gap-1">
        <input
          type={type}
          aria-invalid={Errors ? "true" : "false"}
          {...register(name, {
            required: `${label} is required`,
          })}
          className="GlassInput text-neutral-400 shadow-lg dark:shadow-neutral-950 shadow-neutral-600 dark:text-neutral-400 font-medium  rounded-lg w-[300px] h-[30px]"
        />
        <span className="w-fit h-fit">
          <>{icon}</>
        </span>
      </div>
      {Errors && (
        <span role="alert" className="text-[12px] text-red-900">
          {Errors.message}
        </span>
      )}
    </>
  );
};
