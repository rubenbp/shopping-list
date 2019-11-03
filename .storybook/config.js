import { configure } from '@storybook/react'

configure(require.context('../src/ui/views', true, /\.stories\.tsx?$/), module)
