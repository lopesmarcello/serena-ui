import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  it('renders the project card', () => {
    render(
      <ProjectCard
        imageUrl="https://via.placeholder.com/300"
        imageAlt="Test Image"
        dropdownOptions={['Edit', 'Delete']}
      />
    );
    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(screen.getByText('Project Title')).toBeInTheDocument();
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
});
