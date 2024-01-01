import { Modal, useModal, Text, Link, Grid, Card } from "@nextui-org/react";

export default function DescriptionPopupFull({title, description}) {
  const { setVisible, bindings } = useModal();
  const setTitle = title
  const setDescription = description

  return (
    <div>
      
      <Link css={{fontWeight:'$bold'}} onPress={() => setVisible(true)}>SEE MORE &nbsp;<i class="fa-solid fa-arrow-right-long"></i></Link>
    
      <Modal
        closeButton
        scroll
        width="50%"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        css={{height:'70vh'}}
      >
        <Modal.Header>
          <Text 
            id="modal-title" 
            h3
            css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            {setTitle}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description" css={{textAlign:'justify'}}>
            {setDescription}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          
            {setTitle === 'Full Stack Web Development' &&
              <Grid.Container justify="center">
                <Grid >
                  <Link>
                    <Card css={{background:'transparent'}}>
                      <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                        <iconify-icon icon="bxl:mongodb"></iconify-icon>
                      </Card.Body>
                    </Card>
                  </Link>
                </Grid>
                <Grid >
                <Link>
                  <Card css={{background:'transparent'}}>
                    <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                    <i class="fa-brands fa-react"></i>
                    </Card.Body>
                  </Card>
                </Link>
              </Grid>
              
              <Grid >
                <Link>
                  <Card css={{background:'transparent'}}>
                    <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                    <i class="fa-brands fa-node-js"></i>
                    </Card.Body>
                  </Card>
                </Link>
              </Grid>
              <Grid >
                <Link>
                  <Card css={{background:'transparent'}}>
                    <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                    <iconify-icon icon="file-icons:jsx-alt"></iconify-icon>
                    </Card.Body>
                  </Card>
                </Link>
              </Grid>
              </Grid.Container>
            }
            
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}
