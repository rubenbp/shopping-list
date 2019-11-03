import { configure, addDecorator } from '@storybook/react'
import { appDecorator } from './AppDecorator'

configure(require.context('../src/ui/views', true, /\.stories\.tsx?$/), module)

addDecorator(appDecorator)
