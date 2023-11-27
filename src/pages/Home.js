import { Row, Col } from "reactstrap";
import CarouselInicio from "../components/CarouselInicio";
import ItemCardapio from "../components/ItemCardapio";

function Home() {
    return (
        <div>
            <Row>
                <Col>
                    {/* Aqui vai o Carousel */}
                    <CarouselInicio />
                </Col>
            </Row>
            <Row>
                <Col className="text-center my-3">
                    <h1>Mais pedidos</h1>
                </Col>
            </Row>
            <Row className="p-5" >
                <Col className="d-flex justify-content-center">
                    <ItemCardapio titulo="Picanha"/>
                </Col>

                <Col  className="d-flex justify-content-center">
                <ItemCardapio titulo="Hamburguer"/>

                </Col>

                <Col  className="d-flex justify-content-center">
                <ItemCardapio/>

                </Col>

                <Col  className="d-flex justify-content-center">
                <ItemCardapio/>

                </Col>
            </Row>
        </div>
    )
}

export default Home