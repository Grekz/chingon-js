import styled from '@emotion/styled'
import * as React from 'react'
import Text from '../../atoms/Text'

interface IModalProps {
  header?: string
  children: React.ReactNode
  footer?: React.ReactNode
  isShown?: boolean
}

const Modal = ({ header, children, footer }: IModalProps) => {
  return (
    <ModalWrapper>
      <ModalOverlay />
      <ModalContent
        aria-modal={true}
        aria-hidden={true}
        tabIndex={-1}
        role="dialog"
      >
        <ModalHeader>
          <Text type="h3">{header}</Text>
          <button type="button" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {footer ? <ModalFooter>{footer}</ModalFooter> : null}
      </ModalContent>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  z-index: 100;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.3);
`

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
`

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  h3 {
    margin: 0;
  }
  button {
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
    padding: 0;
    background-color: transparent;
    border: 0;
    appearance: none;
  }
`

const ModalBody = styled.div`
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
`

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
`

export default Modal
