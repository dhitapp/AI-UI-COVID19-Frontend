import React, { useState, useEffect } from "react"
import { useQuery } from "react-query"
import { navigate } from "gatsby"
import { getPredictionXray } from "../api"
import Layout from "../components/Layout/layout"
import { Col, Container, Row, Spinner } from "react-bootstrap"

import xray from "../images/xray.jpeg"

function PredictionResultPage() {
  const { status, error, data, refetch } = useQuery(
    "predictResult",
    getPredictionXray
  )
  const prediction = status === "success" ? data.data : {}
  console.log(prediction)
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
        <h1 className="subtitle">Result</h1>
        {status === "loading" ? (
          <Spinner />
        ) : (
          <Container className="justify-content-center choose-modal">
            <Row className="show-result">
              <Col xs={6} md={6} lg={6}>
                <img
                  src={prediction[0].image}
                  className="rounded image-result"
                />
              </Col>
              <Col xs={6} md={6} lg={6} className="vertical-center">
                <h2>{prediction[0].prediction}</h2>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </Layout>
  )
}
export default PredictionResultPage
