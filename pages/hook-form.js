import Head from 'next/head'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {useState} from "react";
import {useForm} from "react-hook-form";
import Header from "../components/header";
import SubmittedValues from "../components/submittedValues";
import LinkNewTab from "../components/linkNewTab";

export default function HookForm() {
  const {register, handleSubmit, formState, errors} = useForm();
  const [submitted, setSubmitted] = useState({});

  return (
      <>
        <Head>
          <title>Hook Form</title>
          <link rel="icon" href="/favicon-32x32.png"/>
        </Head>
        <Header/>
        <Container>
          <h1>
            Form Validation with <LinkNewTab
              href="https://react-hook-form.com/hook-form.js">React Hook
            Form</LinkNewTab>
          </h1>
          <Form onSubmit={handleSubmit(setSubmitted)}>
            <Form.Group controlId="yourName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name"
                            name="yourName"
                            ref={register({
                              required: "Required",
                              minLength: {value: 3, message: "Too short"}
                            })}
                            isInvalid={errors.yourName}
              />
              <Form.Control.Feedback
                  type="invalid">{errors.yourName?.message}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="favoriteNumber">
              <Form.Label>Favorite number</Form.Label>
              <Form.Control
                  type="number"
                  placeholder="Enter your favorite positive number"
                  defaultValue={42}
                  name="favoriteNumber"
                  ref={register({
                    required: "Required",
                    min: {value: 0, message: "Must be positive"}
                  })}
                  isInvalid={errors.favoriteNumber}
              />
              {errors.favoriteNumber && <Form.Control.Feedback
                  type="invalid">{errors.favoriteNumber.message}</Form.Control.Feedback>}
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
          <SubmittedValues values={submitted}/>
          <Card className="mt-3">
            <Card.Header>Form State</Card.Header>
            <Card.Body>
              {JSON.stringify(formState)}
            </Card.Body>
          </Card>
        </Container>
      </>
  );
}
