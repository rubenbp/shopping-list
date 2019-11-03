import * as React from 'react'
import { GlobalStyles } from '../src/ui/theme/GlobalStyles'

export const appDecorator = storyFunction => (
  <>
    <GlobalStyles />
    {storyFunction()}
  </>
)
