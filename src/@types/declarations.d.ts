declare module '*.scss'

declare module '*.jpeg'
declare module '*.jpg'

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.webp' {
  const ref: string
  export default ref
}

declare module 'uuid'

declare module 'react-slick'
