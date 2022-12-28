import { BooleanField as MuiBooleanField, BooleanFieldProps } from '@pankod/refine-mui';
import { FaCheck } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';

interface Props extends Omit<BooleanFieldProps, 'trueIcon' | 'falseIcon'> {
  enableColors?: boolean;
}

export const BooleanField = ({ enableColors = true, ...rest }: Props) => {
  return (
    <MuiBooleanField
      {...rest}
      trueIcon={<FaCheck size="20" color={enableColors ? 'green' : 'inherit'} />}
      falseIcon={<BsXLg size="15" color={enableColors ? 'red' : 'inherit'} />}
    />
  );
};
