import { SxProps, FormControl, InputLabel, Select as MuiSelect, SelectProps } from '@mui/material';

type ISelect = SelectProps & {
  label: string;
  name: string;
  options: string[];
  multiple?: boolean;
  defaultValue?: string | string[];
  sx?: SxProps;
};

export default function Select({
  label,
  name,
  options,
  multiple = false,
  defaultValue,
  size = 'medium',
  sx,
  ...inputProps
}: ISelect) {
  return (
    <FormControl size={size} sx={sx}>
      <InputLabel htmlFor={name} shrink>
        {label}
      </InputLabel>
      <MuiSelect
        {...inputProps}
        defaultValue={
          inputProps.value ? undefined : defaultValue || (multiple && options) || options[0]
        }
        id={name}
        label={label}
        multiple={multiple}
        name={name}
        native
      >
        {options.map((option, index) => (
          <option key={`option-${option}-${index}`} value={option}>
            {option}
          </option>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
