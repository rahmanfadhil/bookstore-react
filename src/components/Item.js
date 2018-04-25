import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Item = (props) => {
  return (
    <div>
      <Card style={{ width: '250px', marginTop: 10 }}>
        <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Learn Javascript</CardTitle>
          <CardSubtitle>Rp100.000</CardSubtitle><br/>
          <CardText>This is a short description of this book</CardText>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button color="info">More</Button>
            <Button color="success">Add To Cart</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item;
