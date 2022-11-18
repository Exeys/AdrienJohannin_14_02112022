import React from "react";
import styled from "styled-components"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    font-family: Roboto;
`

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`

const ModalContent = styled.div`
    z-index: 1;
    background: #fff;
    position: relative;
    margin: auto;
    border-radius: 5px;
    max-width: 500px;
    width: 80%;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:${props => props.primary || "rgb(89, 111, 211)"};
`

const ModalTitle = styled.h1`
    font-size:20px;
    margin-left:16px;
    color:${props => props.secondary || "white"}
`

const ModalBtn = styled.div`
    position:relative;
    top:-25px;
    right:-10px;
    font-size: 1.4rem;
    cursor: pointer;
    width: 25px;
    height:25px;
    background-color:${props => props.primary || "rgb(89, 111, 211)"};
    border-radius:50%;
    display:flex;
    justify-content:center;
    color:${props => props.secondary || "white"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

const ModalBody = styled.div`
    min-height: 20px;
    overflow: hidden;
    padding: 1rem;
`

const Modal = ({ isShowing, hide, text, title, primary, secondary }) => {
    return (<div>
        {isShowing ? (
            <Overlay>
                <Wrapper>
                    <ModalContent>
                        <ModalHeader primary={primary}>
                            <ModalTitle secondary={secondary} >{title || "Titre"}</ModalTitle>
                            <ModalBtn primary={primary} secondary={secondary} onClick={hide}><span>&times;</span></ModalBtn>

                        </ModalHeader>
                        <ModalBody >{text || "Texte"}</ModalBody>
                    </ModalContent>
                </Wrapper>
            </Overlay >) : null}
    </div>
    )
}

export default Modal;


