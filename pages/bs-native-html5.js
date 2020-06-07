import Head from 'next/head'
import {Button, Container, Form} from 'react-bootstrap'
import {useContext, useState} from "react";
import Header from "../components/header";
import SubmittedValues from "../components/submittedValues";
import LinkNewTab from "../components/linkNewTab";
import FormContext from "react-bootstrap/cjs/FormContext";

/**
 * Encapsulates a Form.Control and a Form.Control.Feedback that displays
 * the validation error message for the field, when invalid.
 * @param value the controlled value
 * @param onChange passed the changed value of the input and the control's name (or controlId)
 * @param props all other props get passed to the Form.Control
 */
function ValidatedFormControl({
  value,
  onChange,
  ...props
}) {
  const [message, setMessage] = useState();
  const { controlId } = useContext(FormContext);

  return (
      <>
        <Form.Control {...props}
                      value={value}
                      onChange={event => {
                        onChange(event.target.value, event.target.name || controlId);
                        event.target.checkValidity();
                      }}
                      onInvalid={event => setMessage(
                          event.target.validationMessage)}
        />
        <Form.Control.Feedback type="invalid">
          {message}
        </Form.Control.Feedback>
      </>
  )
}

export default function BsNativeHtml5() {
  const [values, setValues] = useState({
    yourName: "",
    favoriteNumber: 42
  });
  const [submitted, setSubmitted] = useState({});
  const [validated, setValidated] = useState(false);

  function handleSubmit(event) {
    console.log(event);
    event.preventDefault();

    if (event.currentTarget.checkValidity()) {
      setSubmitted(values);
    }

    setValidated(true);
  }

  function handleChange(value, name) {
    setValues(values => ({...values, [name]: value}))
  }

  return (
      <>
        <Head>
          <title>Bootstrap Native HTML5</title>
          <link rel="icon" href="/favicon-32x32.png"/>
        </Head>
        <Header/>
        <Container>
          <h1>
            Form Validation with <LinkNewTab
              href="https://react-bootstrap.github.io/components/forms/#forms-validation-native">
            Bootstrap's Native HTML5</LinkNewTab>
          </h1>
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Form.Group controlId="yourName">
              <Form.Label>Name</Form.Label>
              <ValidatedFormControl onChange={handleChange}
                                    value={values.yourName}
                                    name="yourName"
                                    type="text" placeholder="Enter your name"
                                    required
                                    minLength={3}
              />
            </Form.Group>
            <Form.Group controlId="favoriteNumber">
              <Form.Label>Favorite number</Form.Label>
              <ValidatedFormControl onChange={handleChange}
                                    value={values.favoriteNumber}
                                    name="favoriteNumber"
                                    type="number"
                                    placeholder="Enter your favorite positive number"
                                    required
                                    min={0}
              />
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
          <SubmittedValues values={submitted}/>
        </Container>
      </>
  );
}
