import { Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';

  // ModalFooter,
  // ModalBody,
  // Image,
  // Link,

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return(
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay/>
      <ModalContent
        maxW='900px'
        w='auto'
        h='auto'
        bg='#353431'
      >
        <ModalBody p='0'>
          <Image
            src={imgUrl}
            maxW='900px'
            maxH='600px'
            w='auto'
            h='auto'
          />
        </ModalBody>
        <ModalFooter justifyContent='left'>
          <Link target='_blank' href={imgUrl}>Abrir original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
