import React, { useEffect } from "react"
import { Form, Row, Col, Button, Container } from "react-bootstrap"
import { useForm, Controller } from "react-hook-form"
import Dropzone from "react-dropzone-uploader"
import "react-dropzone-uploader/dist/styles.css"
import { MAX_IMAGE_SIZE } from "./validation-schema"
function PredictWithXray({ control, register, setValue, errors }) {
  return (
    <div>
      <Form.Group as={Row} controlId="formSex">
        <Col xs={6}>
          <Form.Label>Sex</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col xs={6}>
              <label className="radio" htmlFor="male-sex">
                <input
                  value="Laki-laki"
                  type="radio"
                  name="jenis_kelamin"
                  placeholder="1"
                  id="male-sex"
                  ref={register}
                />
                <span className="mx-2">Male</span>
              </label>
            </Col>
            <Col xs={6}>
              <label className="radio" htmlFor="female-sex">
                <input
                  value="Perempuan"
                  type="radio"
                  name="jenis_kelamin"
                  placeholder="2"
                  id="female-sex"
                  ref={register}
                />
                <span className="mx-2">Female</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.jenis_kelamin?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formUmur">
        <Col xs={6}>
          <Form.Label>Age</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Control
                type="number"
                maxLength="3"
                size="lg"
                style={{ height: "100%", width: "100%" }}
                name="umur"
                placeholder="Patient's age"
                ref={register}
              />
            </Col>
          </Row>
          <Row className="warning-text">{errors.umur?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formDemam">
        <Col xs={6}>
          <Form.Label>Fever</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-demam">
                <input
                  value="Iya"
                  type="radio"
                  name="demam"
                  placeholder="1"
                  id="iya-demam"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-demam">
                <input
                  value="Tidak"
                  type="radio"
                  name="demam"
                  placeholder="2"
                  id="tidak-demam"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.demam?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formSuhu">
        <Col xs={6}>
          <Form.Label>Temperature</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Control
                type="number"
                maxLength="3"
                size="lg"
                name="suhu"
                placeholder="Fever's temperature"
                ref={register}
              />
            </Col>
          </Row>
          <Row className="warning-text">{errors.suhu?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBatuk">
        <Col xs={6}>
          <Form.Label>Cough</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-batuk">
                <input
                  value="Iya"
                  type="radio"
                  name="batuk"
                  placeholder="1"
                  id="iya-batuk"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-batuk">
                <input
                  value="Tidak"
                  type="radio"
                  name="batuk"
                  placeholder="2"
                  id="tidak-batuk"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.batuk?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPilek">
        <Col xs={6}>
          <Form.Label>Flu</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-pilek">
                <input
                  value="Iya"
                  type="radio"
                  name="pilek"
                  placeholder="1"
                  id="iya-pilek"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-pilek">
                <input
                  value="Tidak"
                  type="radio"
                  name="pilek"
                  placeholder="2"
                  id="tidak-pilek"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.pilek?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formSakitTenggorokan">
        <Col xs={6}>
          <Form.Label>Sore Throat</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-tenggorokan">
                <input
                  value="Iya"
                  type="radio"
                  name="sakit_tenggorokan"
                  placeholder="1"
                  id="iya-tenggorokan"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-tenggorokan">
                <input
                  value="Tidak"
                  type="radio"
                  name="sakit_tenggorokan"
                  placeholder="2"
                  id="tidak-tenggorokan"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">
            {errors.sakit_tenggorokan?.message}
          </Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formMenggigil">
        <Col xs={6}>
          <Form.Label>Shiver</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-menggigil">
                <input
                  value="Iya"
                  type="radio"
                  name="menggigil"
                  placeholder="1"
                  id="iya-menggigil"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-menggigil">
                <input
                  value="Tidak"
                  type="radio"
                  name="menggigil"
                  placeholder="2"
                  id="tidak-menggigil"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.menggigil?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formSakitKepala">
        <Col xs={6}>
          <Form.Label>Headache</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-kepala">
                <input
                  value="Iya"
                  type="radio"
                  name="sakit_kepala"
                  placeholder="1"
                  id="iya-kepala"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-kepala">
                <input
                  value="Tidak"
                  type="radio"
                  name="sakit_kepala"
                  placeholder="2"
                  id="tidak-kepala"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.sakit_kepala?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formLemah">
        <Col xs={6}>
          <Form.Label>Faint</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-lemah">
                <input
                  value="Iya"
                  type="radio"
                  name="lemah"
                  placeholder="1"
                  id="iya-lemah"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-lemah">
                <input
                  value="Tidak"
                  type="radio"
                  name="lemah"
                  placeholder="2"
                  id="tidak-lemah"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.lemah?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formSesak">
        <Col xs={6}>
          <Form.Label>Hard to Breathe</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-sesak">
                <input
                  value="Iya"
                  type="radio"
                  name="sesak"
                  placeholder="1"
                  id="iya-sesak"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-sesak">
                <input
                  value="Tidak"
                  type="radio"
                  name="sesak"
                  placeholder="2"
                  id="tidak-sesak"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.sesak?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formMual">
        <Col xs={6}>
          <Form.Label>Nausea</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-mual">
                <input
                  value="Iya"
                  type="radio"
                  name="mual"
                  placeholder="1"
                  id="iya-mual"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-mual">
                <input
                  value="Tidak"
                  type="radio"
                  name="mual"
                  placeholder="2"
                  id="tidak-mual"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.mual?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formDiare">
        <Col xs={6}>
          <Form.Label>Diarrhea</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-diare">
                <input
                  value="Iya"
                  type="radio"
                  name="diare"
                  placeholder="1"
                  id="iya-diare"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-diare">
                <input
                  value="Tidak"
                  type="radio"
                  name="diare"
                  placeholder="2"
                  id="tidak-diare"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.diare?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formNyeriOtot">
        <Col xs={6}>
          <Form.Label>Muscleache</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-otot">
                <input
                  value="Iya"
                  type="radio"
                  name="nyeri_otot"
                  placeholder="1"
                  id="iya-otot"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-otot">
                <input
                  value="Tidak"
                  type="radio"
                  name="nyeri_otot"
                  placeholder="2"
                  id="tidak-otot"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.nyeri_otot?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formNyeriAbdomen">
        <Col xs={6}>
          <Form.Label>Abdominal Pain</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <label className="radio" htmlFor="iya-abdomen">
                <input
                  value="Iya"
                  type="radio"
                  name="nyeri_abdomen"
                  placeholder="1"
                  id="iya-abdomen"
                  ref={register}
                />
                <span className="mx-2">Yes</span>
              </label>
            </Col>
            <Col>
              <label className="radio" htmlFor="tidak-abdomen">
                <input
                  value="Tidak"
                  type="radio"
                  name="nyeri_abdomen"
                  placeholder="2"
                  id="tidak-abdomen"
                  ref={register}
                />
                <span className="mx-2">No</span>
              </label>
            </Col>
          </Row>
          <Row className="warning-text">{errors.nyeri_abdomen?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formLainnya">
        <Col xs={6}>
          <Form.Label>Others</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Control
                as="textarea"
                rows={5}
                size="lg"
                name="lainnya"
                placeholder="Other patient's conditions"
                ref={register}
              />
            </Col>
          </Row>
          <Row className="warning-text">{errors.lainnya?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPenyerta">
        <Col xs={6}>
          <Form.Label>Comorbidities</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Control
                as="textarea"
                rows={5}
                size="lg"
                name="penyerta"
                placeholder="Patient's comorbidities"
                ref={register}
              />
            </Col>
          </Row>
          <Row className="warning-text">{errors.penyerta?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formImage">
        <Col xs={6}>
          <Form.Label>Image</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <Controller
                as={
                  <Dropzone
                    maxFiles={1}
                    multiple={false}
                    autoUpload={false}
                    onChangeStatus={({ file }) => setValue("image", file)}
                    accept="image/*"
                    maxSizeBytes={MAX_IMAGE_SIZE}
                    inputProps={{ id: "formImg" }}
                    inputRef={register}
                    styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                  />
                }
                name="image"
                control={control}
              />
            </Col>
          </Row>
          <Row className="warning-text">{errors.image?.message}</Row>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formInterpret">
        <Col xs={6}>
          <Form.Label>Interpretation</Form.Label>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Control
                as="textarea"
                rows={5}
                size="lg"
                name="interpret"
                placeholder="X-Ray imaging's interpretation"
                ref={register}
              />
            </Col>
          </Row>
          <Row className="warning-text">{errors.interpret?.message}</Row>
        </Col>
      </Form.Group>
    </div>
  )
}

export default PredictWithXray
