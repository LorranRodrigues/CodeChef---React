import { CardBody,CardTitle,Card,CardText, } from "reactstrap"
function ItemCardapio({titulo,texto,img}) {
    return (
        <div>

            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src="https://picsum.photos/300/200"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {titulo}
                    </CardTitle>
                  
                    <CardText>
                        {texto}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default ItemCardapio