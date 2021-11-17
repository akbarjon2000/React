import { Wrapper, AntModal, Container, ModalClose } from './style';
import React from 'react';

export default function TripModal({
    drawerOpen,
    closeDrawer,
    children,
    width,
    position,
    placement,
}) {
    return (
        <Container position={position}>
            <AntModal
                visible={drawerOpen}
                width={width || '55vw'}
                size={width || '55vw'}
                placement={placement || 'right'}
                onClose={() => closeDrawer()}
                destroyOnClose
                headerStyle={{
                    display: 'none',
                }}
                contentWrapperStyle={{
                    padding: '0',
                }}
                bodyStyle={{
                    padding: '0',
                    position: 'relative',
                }}
            >
                <ModalClose onClick={() => closeDrawer()} width={width || '55vw'}>
                    <ModalClose.Close />
                </ModalClose>
                <Wrapper>{children}</Wrapper>
            </AntModal>
        </Container>
    );
}