function    Chardchild(props) { 
  let Name = "Html CSS JS";
  let Title = "React developer";
  let Desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.";
    return (
             <Card>
            <Card.Header as="h5">
                {props.Name}
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                   {props.Desc}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
