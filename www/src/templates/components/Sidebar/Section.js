/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails react-core
 */

'use strict';

import React from 'react';
import {colors, media} from 'theme';
import MetaTitle from '../MetaTitle';
import ChevronSvg from '../ChevronSvg';

// TODO Update isActive link as document scrolls past anchor tags
// Maybe used 'hashchange' along with 'scroll' to set/update active links

const Section = ({createLink, isActive, location, onClick, section}) => (
  <div>
    <MetaTitle
      onClick={onClick}
      cssProps={{
        marginTop: 10,

        [media.greaterThan('small')]: {
          color: isActive ? colors.text : colors.subtle,

          ':hover': {
            color: colors.text,
          },
        },
      }}>
      {section.title}
      <ChevronSvg
        cssProps={{
          marginLeft: 7,
          transform: isActive ? 'rotateX(180deg)' : 'rotateX(0deg)',
          transition: 'transform 0.2s ease',

          [media.lessThan('small')]: {
            display: 'none',
          },
        }}
      />
    </MetaTitle>
    <ul
      css={{
        marginBottom: 10,

        [media.greaterThan('small')]: {
          display: isActive ? 'block' : 'none',
        },
      }}>
      {section.items.map(item => (
        <li
          key={item.id}
          css={{
            marginTop: 5,
          }}>
          {createLink(location, section, item)}

          {item.subitems &&
            <ul css={{marginLeft: 20}}>
              {item.subitems.map(subitem => (
                <li key={subitem.id}>
                  {createLink(location, section, subitem)}
                </li>
              ))}
            </ul>}
        </li>
      ))}
    </ul>
  </div>
);

export default Section;
