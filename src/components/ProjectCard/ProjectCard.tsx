import React from 'react';
import { Card } from '../Card';
import { Image } from '../Image';
import { Dropdown } from '../Dropdown';

export interface ProjectCardProps {
  imageUrl: string;
  imageAlt: string;
  dropdownOptions: string[];
}

export const ProjectCard = ({ imageUrl, imageAlt, dropdownOptions }: ProjectCardProps) => {
  return (
    <Card>
      <Image src={imageUrl} alt={imageAlt} />
      <div className="sui:p-4">
        <h3 className="sui:text-lg sui:font-bold">Project Title</h3>
        <p className="text-sm text-gray-600">Project description.</p>
        <div className="mt-4">
          <Dropdown options={dropdownOptions} />
        </div>
      </div>
    </Card>
  );
};
