import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';


const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleChange = () => {
  console.log("Input changed");
};

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Text",
    aria_label: "Text",
    onChange: handleChange,
  }
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
    aria_label: "Password",
    onChange: handleChange,
  }
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Number",
    aria_label: "Number",
    onChange: handleChange,
  }
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "I'm locked",
    aria_label: "Locked",
    locked: true,
    onChange: handleChange,
  }
}