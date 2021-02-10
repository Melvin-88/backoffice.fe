import React from 'react';
import { Select, IFormFieldProps, ISelectProps } from 'arcadia-common-fe';
import { monitoringModeOptions } from './constants';

interface IMonitoringModeFieldProps extends IFormFieldProps, Partial<ISelectProps> {
}

export const MonitoringModeField: React.FC<IMonitoringModeFieldProps> = ({ className, label = 'Mode', ...restProps }) => (
  <Select
    {...restProps}
    className={className}
    name="mode"
    label={label}
    isClearable
    options={monitoringModeOptions}
  />
);
