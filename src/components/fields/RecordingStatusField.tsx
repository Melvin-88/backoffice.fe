import React from 'react';
import { Select, IFormFieldProps } from 'arcadia-common-fe';
import { recordingStatusOptions } from './constants';

export const RecordingStatusField: React.FC<IFormFieldProps> = ({ className }) => (
  <Select
    className={className}
    name="recordingStatus"
    label="Recording Status"
    isClearable
    options={recordingStatusOptions}
  />
);
