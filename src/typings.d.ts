type SVGComponent = import('react').FunctionComponent<React.SVGProps>

declare module '*.svg' {
  const value: string
  export default value
  export const ReactComponent: SVGComponent
}
