/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  withKnobs,
  array,
  boolean,
  number,
  text,
} from '@storybook/addon-knobs';
import Pagination from '../Pagination';
import PaginationV2 from '../PaginationV2';

const props = () => ({
  disabled: boolean('Disable backward/forward buttons (disabled)', false),
  page: number('The current page (page)', 1),
  totalItems: number('Total number of items (totalItems)', 103),
  pagesUnknown: boolean('Total number of items unknown (pagesUnknown)', false),
  pageInputDisabled: boolean('Disable page input (pageInputDisabled)', false),
  isLastPage: boolean('At the last page (isLastPage)', false),
  backwardText: text(
    'The description for the backward icon (backwardText)',
    'Backward'
  ),
  forwardText: text(
    'The description for the backward icon (forwardText)',
    'Forward'
  ),
  pageSize: number('Number of items per page (pageSize)', 10),
  pageSizes: array('Choices of `pageSize` (pageSizes)', [10, 20, 30, 40, 50]),
  itemsPerPageText: text(
    'Label for `pageSizes` select UI (itemsPerPageText)',
    'Items per page:'
  ),
  onChange: action('onChange'),
});

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <div style={{ width: '800px' }}>{story()}</div>)
  .add('v2', () => <PaginationV2 {...props()} />, {
    info: {
      text: `
            V2 version of the Pagination
          `,
    },
  })
  .add('v1', () => <Pagination {...props()} />, {
    info: {
      text: `
            The pagination component is used to paginate through items.
          `,
    },
  })
  .add(
    'multipe pagination components',
    () => {
      return (
        <div>
          <Pagination {...props()} />
          <Pagination {...props()} />
        </div>
      );
    },
    {
      info: {
        text: `Showcasing unique ids for each pagination component`,
      },
    }
  );
