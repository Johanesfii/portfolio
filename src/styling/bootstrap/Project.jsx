import { Col, Container, Row } from "react-bootstrap";
import "./project.scss";


export default function Project() {
  return (
      <div className="Project" id="project">
    <Container>
  <Row>
    <Col>
    <h2>My Bio</h2>
    </Col>
  </Row>
  <Row>
    <Col>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat quos temporibus accusantium ratione cupiditate ex architecto corrupti debitis alias corporis distinctio, deserunt, necessitatibus eveniet quae sit tenetur harum. Nihil ut assumenda dolores! In omnis pariatur aliquam, facere aperiam cupiditate!</p>
    </Col>
  </Row>
  <Row>
    <Col>
    <h3>HTML</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ab!</p>
    </Col>
    <Col>
    <h3>CSS</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sunt ratione expedita dolorem nulla fugiat?</p>
    </Col>
    <Col>
    <h3>BOOTSTRAP</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam modi voluptas beatae.</p>
    </Col>
  </Row>
</Container>
</div>
    );
  }


  
