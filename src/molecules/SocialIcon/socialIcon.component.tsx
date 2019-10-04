import * as React from 'react'

import Icon, { IconTypes } from '../../atoms/Icon'

interface ISocialIconProps {
  type: SocialIconType
  size?: string
}

type SocialIconType = 'Facebook' | 'Twitter' | 'LinkedIn' | 'Instagram'

const SocialIcon = ({ type, size }: ISocialIconProps) => (
  <Icon iconComponent={IconTypes[type]} size={size} />
)

export default SocialIcon
