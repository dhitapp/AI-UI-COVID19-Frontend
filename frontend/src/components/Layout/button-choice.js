import React, { useEffect } from "react"
import {
  ButtonToolbar,
  Col,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap"
import usePredictionForm from "./form-predict"

function ButtonChoice({ name, setValue }) {
  const handleChange = val => setValue(name, val)

  return (
    <Col xs="12" lg="2" className="pl-lg-5">
      <ButtonToolbar toggle="true">
        <ToggleButtonGroup type="radio" name={name} onChange={handleChange}>
          <ToggleButton value={true} size="lg" data-testid={"ya-" + name}>
            Ya
          </ToggleButton>
          <ToggleButton value={false} size="lg" data-testid={"tidak-" + name}>
            Tidak
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    </Col>
  )
}

export default ButtonChoice
