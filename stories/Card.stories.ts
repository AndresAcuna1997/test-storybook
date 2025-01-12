// Card.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

export default {
	title: 'Example/Card',
	component: Card,
} as Meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		title: 'Hello World',
	},
};
