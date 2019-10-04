import * as React from 'react'
import Types from './Types'

interface IIconProps {
  size?: string
}

type IconComponent = React.SFC<IIconProps>

interface IIconComponentProps extends IIconProps {
  iconComponent: IconComponent
}

const Icon = ({ iconComponent, size }: IIconComponentProps) => {
  if (!iconComponent) {
    return null
  }
  const Component = iconComponent
  return <Component size={size || '1.5em'} />
}

export const IconTypes = Types
export default Icon
