import {Meta, StoryObj} from '@storybook/react';
import {ToggleSwitch} from './ToggleSwitch';

const meta = {
  title: 'Components/Toggle Switch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const On: Story = {
  args: {
    initialOn: true,
  },
};

export const Off: Story = {
  args: {
    initialOn: false,
  },
};

export const Locked: Story = {
  args: {
    initialOn: true,
    locked: true
  }
};

