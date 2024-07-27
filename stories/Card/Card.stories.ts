import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { cardFooterContent } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
    content: "Lorem ipsum dolor sit amet",
  },
}

export const WithImage: Story = {
  args: {
    ...Default.args,
    image: "https://via.placeholder.com/150",
  },
}

export const WithFooter: Story = {
  args: {
    ...Default.args,
    footer: cardFooterContent,
  },
}
