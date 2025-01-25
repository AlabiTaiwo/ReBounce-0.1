import { FormFieldProps } from "./type";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  register,
  Errors,
  minL,
  maxL,
  valueAsNumber,
  icon,
}) => {
  return (
    <div className="flex flex-col gap-1 w-full h-[80px]">
      <>
        <label
          htmlFor={label}
          className="text-[14px] font-medium text-neutral-700 dark:text-neutral-500"
        >
          {label}
        </label>
        <div className="w-fit h-fit flex items-center relative gap-2">
          <input
            type={type}
            aria-invalid={Errors ? "true" : "false"}
            {...register(name, {
              required: `${label} is required`,
              min: minL,
              max: maxL,
              valueAsNumber,
            })}
            className=" GlassInput text-neutral-400 shadow-lg dark:shadow-neutral-950 px-[5px]  shadow-neutral-600 dark:text-neutral-400 font-medium  rounded-lg w-[300px] h-[30px]"
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
    </div>
  );
};
