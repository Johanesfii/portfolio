import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./contact.scss";



export default function Contact() {
  return (
    <div className="Contact" id="contact">
      <Container>
  <Row>
    <Col>
    <h2>Contact Me</h2>
    </Col>
  </Row>
    {/* <Col> */}
    <div className="kontak">
    <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Nama Lengkap</Form.Label>
    <Form.Control type="email" placeholder="..." />
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Pesan</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary">Kirim</Button>{' '}
</Form>
</div>
    {/* </Col> */}
</Container>
    </div>
  )
}
