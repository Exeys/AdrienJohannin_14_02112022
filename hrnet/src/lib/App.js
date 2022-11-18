
import useModal from "./useModal";
import Modal from "./modal";



function App() {
  const { isShowing: showModal, toggle: toggleModal } = useModal();
  
  return (
    <div className="App">
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isShowing={showModal}
        hide={toggleModal} 
        text="Texte"/>
    </div>
  );
}

export default App;
