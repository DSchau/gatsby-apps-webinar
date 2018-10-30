import React from 'react'
import Emojify from 'react-emojione';

export default ({ children, size = 72 }) => <Emojify style={{ height: size, width: size }}>{children}</Emojify>
