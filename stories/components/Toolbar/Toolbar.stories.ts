import { Meta, StoryObj } from '@storybook/react';
import { Icon1, Icon2, Toolbar, toolbarLogo } from './Toolbar';

const meta = {
  title: 'Components/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Toolbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: toolbarLogo,
    links: [
      { label: 'Inicio', href: '#' },
      { label: 'Productos', href: '/products' },
      { label: 'Contacto', href: '/contact' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    ...Default.args,
    icons: [Icon1, Icon2],
  },
};
