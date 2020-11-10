import React, { useState, useEffect } from "react"
import Layout from "../components/Layout/layout"
import PredictWithXray from "../components/Layout/predict-with-xray"

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { postPredictWithXray } from "../api"
import { Col, Container, Row, Modal, Button, Form } from "react-bootstrap"
import { navigate } from "gatsby"

import xray from "../images/xray.jpeg"
import ctscan from "../images/ctscan.jpeg"

import { PredictSubmissionSchema } from "../components/Layout/validation-schema"

function IndexPage() {
  const [showXray, setShowXray] = useState(false)
  const [showCT, setShowCT] = useState(false)

  const handleCloseXray = () => setShowXray(false)
  const handleShowXray = () => setShowXray(true)
  const handleCloseCT = () => setShowCT(false)
  const handleShowCT = () => setShowCT(true)

  const { control, handleSubmit, register, setValue, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(PredictSubmissionSchema),
  })
  const onSubmit = async data => {
    const formData = new FormData()
    Object.keys(data).forEach(key => {
      if (typeof data[key] != "undefined") formData.append(key, data[key])
    })
    console.log(formData)
    await postPredictWithXray(formData)
      .then(() => {
        handleCloseXray()
        navigate("/predict-result/")
      })
      .catch(error => {
        if (error.response) {
          window.alert(JSON.stringify(error.response.data))
        } else {
          window.alert(error.message)
        }
      })
  }

  useEffect(() => {
    register({ name: "image" })
  }, [register])

  useEffect(() => {
    document.title = "COVID-19 - Artificial Intelligence"
  }, [])

  return (
    <Layout page={"home"}>
      <h1 className="title">Hello! I'm an Artificial Intelligence system.</h1>
      <div className="home-main">
        <div className="text">
          Hello! I'm an Artificial Intelligence system to help you predict
          COVID-19. We're on a mission to to help you predict COVID-19 given
          Chest X-Ray or CT-Scan images as well as patients clinical dataset.
          Please prepare your data beforehand.
        </div>
        <div className="divider"></div>
        <h2 className="subtitle">Choose One</h2>
        <Container className="justify-content-center choose-modal">
          <Row className="justify-content-center row-modal">
            <Col>
              <img
                src={xray}
                className="rounded choose-image"
                onClick={handleShowXray}
              />
            </Col>
            <Col>
              <img
                src={ctscan}
                className="rounded choose-image"
                onClick={handleShowCT}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={showXray} onHide={handleCloseXray} size="lg">
        <Modal.Header closeButton>
          <Container>
            <Modal.Title>
              <h1 className="text-center">Data Form</h1>
            </Modal.Title>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <PredictWithXray
              errors={errors}
              control={control}
              register={register}
              setValue={setValue}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseXray}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Predict
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCT} onHide={handleCloseCT} size="lg">
        <Modal.Header closeButton>
          <Container>
            <Modal.Title>
              <h1 className="text-center">Data Form</h1>
            </Modal.Title>
          </Container>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCT}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseCT}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  )
}
export default IndexPage
