import React from "react";
import styled from "styled-components"



const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1040;
    background-color: rgba(0, 0, 0, 0.5);
    font-family: Roboto;
`

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    display: flex;
    align-items: center;
`

const ModalContent = styled.div`
    z-index: 100;
    background: #fff;
    position: relative;
    margin: auto;
    border-radius: 5px;
    max-width: 500px;
    width: 80%;
    padding: 1rem;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ModalBtn = styled.div`
    font-size: 1.4rem;
    cursor: pointer;
    width: 25px;
    height:25px;
    background-color:rgb(89, 111, 211);
    border-radius:50%;
    display:flex;
    justify-content:center;
    color:white;
`

const Modal = ({ isShowing, hide, text,title }) => {
    return (<div>
        {isShowing ? (
            <Overlay>
                <Wrapper>
                    <ModalContent>
                        <ModalHeader>
                            <h4>{title}</h4>
                            <ModalBtn  onClick={hide}><span>&times;</span></ModalBtn>
                        
                        </ModalHeader>
                        <div className="modal-body">{text}</div>
                    </ModalContent>
                </Wrapper>
            </Overlay >) : null}
    </div>
    )
}

export default Modal;


