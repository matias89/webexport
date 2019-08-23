import '../../.storybook/config.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button/Button';

storiesOf('Button', module)
  .add('with text', () => (
    <Button />
  ))
  .add('with description', () => (
    <Button description="Hola a todos!!!!" />
  ))
