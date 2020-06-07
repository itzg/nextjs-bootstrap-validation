import {Card, Table} from "react-bootstrap";

export default function SubmittedValues({values}) {
  return (
      <Card className="mt-3">
        <Card.Header>Submitted</Card.Header>
        <Card.Body>
          <Table borderless size="sm">
            <tbody>
            {Object.entries(values).map(([k, v]) =>
                <tr key={k}>
                  <th>{k}</th>
                  <td>{v}</td>
                </tr>
            )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
  )
}
