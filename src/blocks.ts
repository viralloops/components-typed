import type { Editor } from 'grapesjs';
import { RequiredPluginOptions } from '.';
import { cmpId } from './utils';

export default (editor: Editor, opts: RequiredPluginOptions) => {
  const bm = editor.BlockManager;
  const { block } = opts;

  block && bm.add(cmpId, {
    label: 'Typed',
    media: `
      <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4205 12.6L24.6765 34.68V35H21.7005L19.5885 29.144H9.7965L7.6845 35H4.7725V34.68L12.9965 12.6H16.4205ZM10.6925 26.648H18.6925L14.7565 15.704H14.6285L10.6925 26.648ZM32.921 35.288C29.369 35.288 27.225 33.08 27.225 30.232C27.225 27.48 29.177 25.112 33.977 25.112C35.705 25.112 36.985 25.4 38.009 25.688V24.056C38.009 22.232 36.889 20.664 34.233 20.664C31.833 20.664 30.649 22.008 30.617 23.576H28.025C28.025 20.44 30.649 18.36 34.233 18.36C38.425 18.36 40.633 20.888 40.633 23.992V35H38.361L38.169 32.696H38.041C37.049 34.36 35.225 35.288 32.921 35.288ZM33.401 33.048C36.185 33.048 38.009 31.032 38.009 28.664V27.832C36.665 27.416 35.417 27.256 33.977 27.256C31.321 27.256 29.945 28.28 29.945 30.2C29.945 31.832 31.033 33.048 33.401 33.048Z" fill="#D9D9D9"/>
<line x1="46" y1="8" x2="46" y2="40" stroke="white"/>
</svg>
    `,
    content: { type: cmpId },
    select: true,
    ...block,
  });
}
