import React, { useEffect, useState } from "react"
import PredictWithXray from "./predict-with-xray"
import { Container, Modal, Button } from "react-bootstrap"

function PredictionForm({ formXray, setShowXray, showXray }) {
  const [page, setPage] = useState(null)
  useEffect(function persistForm() {
    formXray ? setPage(<PredictWithXray />) : setPage(null)
  })
  const handleCloseXray = () => setShowXray(false)

  return (
    <div>
      <Modal show={showXray} onHide={handleCloseXray} size="lg">
        <Modal.Header closeButton>
          <Container>
            <Modal.Title>
              <h1 className="text-center">Isi Data</h1>
            </Modal.Title>
          </Container>
        </Modal.Header>
        <Modal.Body>{page}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseXray}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseXray}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default PredictionForm
