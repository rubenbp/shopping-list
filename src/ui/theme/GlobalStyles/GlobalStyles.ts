import { createGlobalStyle } from 'styled-components';

import { fontFaces } from './fontFaces';
import { reboot } from './reboot';
import { reset } from './reset';

export { GlobalStyles }

const GlobalStyles = createGlobalStyle`
  ${reset};
  ${reboot};
  ${fontFaces};
`
