import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import AboutPage from '../pages/about';
import Header from '../components/header/header';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path='/AboutPage'>
        <AboutPage />
      </ComponentPreview>
      <ComponentPreview path='/Header'>
        <Header />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;