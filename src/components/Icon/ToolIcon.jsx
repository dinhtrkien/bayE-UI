/* eslint-disable react/react-in-jsx-scope */

import { memo } from 'react';

const ToolIcon = () => (
  <img src="src/mock/Tool.png" alt="tool" className="w-auto align-bottom h-7" />
);

const Memo = memo(ToolIcon);
export { Memo as ToolIcon };
