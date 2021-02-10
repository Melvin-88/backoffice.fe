import React, { useMemo } from 'react';
import { action } from '@storybook/addon-actions';
import { AddIcon, CommandBar, ICommandBarItems } from 'arcadia-common-fe';

export default {
  component: CommandBar,
  title: 'CommandBar',
};

const items: ICommandBarItems = useMemo(() => [
  { text: 'Add', Icon: AddIcon, onClick: action('onAdd') },
  { text: 'Register', onClick: action('onRegister') },
], []);

export const Sandbox = () => (
  <CommandBar items={items} />
);
