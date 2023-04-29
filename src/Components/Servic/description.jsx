import React, { useState } from "react";
import "./description.css";
import { Button } from "@chakra-ui/react";

function ModalDdescription(props) {
  console.log(props.des);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Button onClick={toggleModal} colorScheme="teal" size="sm" mt={"9px"}>
        Description
      </Button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h5>{props.sub}</h5>
            <table>
              <tr>
                <th>Start Time</th>
                <td>{props.startTime}</td>
              </tr>

              <tr>
                <th>Speed</th>
                <td>{props.speed}</td>
              </tr>

              <tr>
                <th>Refill</th>
                <td>{props.refill}</td>
              </tr>

              <tr>
                <th>Quality</th>
                <td>{props.quality}</td>
              </tr>

              <tr>
                <th>Props</th>
                <td>{props.props}</td>
              </tr>


            </table>
            <Button colorScheme="teal" size="sm" onClick={toggleModal}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalDdescription;
