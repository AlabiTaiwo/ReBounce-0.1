import { FormFieldProps } from "./type"

export const FormField: React.FC<FormFieldProps> = ({label, type,  Name, register, icon, minL, maxL, valueAsNumber, Errors}) => {
    return (
        <>
            <div>
            <label htmlFor="">{ label}</label>
            <input
                type={type}
                aria-invalid={Errors ? "true" : "false"}
            {...register( Name, {
              required: `${label} is required`,
              min: minL,
              max: maxL,
              valueAsNumber,
            })} />
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
    )
}