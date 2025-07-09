import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    imageUrl: 'https://via.placeholder.com/300',
    imageAlt: 'Placeholder image',
    dropdownOptions: ['Edit', 'Delete'],
  },
};
