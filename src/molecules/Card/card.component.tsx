import styled from '@emotion/styled'
import * as React from 'react'
import Text from '../../atoms/Text'

interface IImageProps {
  image?: string
  altImage?: string
}

interface ICardWrapperProps {
  width?: string
  backgroundColor?: string
}

interface IBodyProps {
  header?: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
}

interface ICardProps extends IImageProps, IBodyProps, ICardWrapperProps {}

const Card = ({
  image,
  altImage,
  header,
  body,
  footer,
  children,
  width = '300px',
}: ICardProps) => (
  <CardWrapper width={width}>
    {image ? <CardImage src={image} alt={altImage} /> : null}
    <div>
      {header ? <Text type="h3">{header}</Text> : null}
      <Text type="span">{children || body}</Text>
      {footer ? <>{footer}</> : null}
    </div>
  </CardWrapper>
)

const CardWrapper = styled.div`
  width: ${({ width }: ICardWrapperProps) => (width ? width : '300px')};
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${({ backgroundColor }: ICardWrapperProps) =>
    backgroundColor ? backgroundColor : '#fff'};
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  > div {
    flex: 1 1 auto;
    padding: 1.25rem;
  }
`
const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
`
export default Card
