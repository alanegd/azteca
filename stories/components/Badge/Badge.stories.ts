import {Meta, StoryObj} from '@storybook/react';
import {Badge} from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
    label: 'Badge'
  }
};

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Badge'
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Badge'
  },
};