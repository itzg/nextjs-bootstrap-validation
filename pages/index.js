import Head from 'next/head'
import {Button, Col, Container, Row} from 'react-bootstrap'
import Link from "next/link";
import LinkNewTab from "../components/linkNewTab";
import SourceCodeLink from "../components/sourceCodeLink";

export default function Home() {
  return (
      <>
        <Head>
          <title>NextJS Bootstrap Validation Approaches</title>
          <link rel="icon" href="/favicon-32x32.png"/>
        </Head>
        <Container>
          <h1>NextJS Bootstrap Validation Approaches</h1>
          <p>
            This application tries out two different ways of doing form
            validation with <LinkNewTab href="https://react-bootstrap.github.io/">React Bootstrap</LinkNewTab>.
            One combines <LinkNewTab href="https://react-hook-form.com/">React Hook Form</LinkNewTab> and
            the other leverages just <LinkNewTab href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation">HTML5 native validation</LinkNewTab>.
          </p>
          <p>
            <Container>
              <Row>
                <Col md className="my-3">
                  <Link href="/hook-form">
                    <Button size="lg" block>Hook Form</Button>
                  </Link>
                </Col>
                <Col md className="my-3">
                  <Link href="/bs-native-html5">
                    <Button size="lg" block>Bootstrap Native HTML5</Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </p>
          <p className="text-center">
            <SourceCodeLink/>
          </p>
        </Container>
      </>
  )
      ;
}
