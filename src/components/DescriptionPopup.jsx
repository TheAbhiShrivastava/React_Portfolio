import { Modal, useModal, Text, Link, Grid, Card } from "@nextui-org/react";
import {useEffect, useState} from "react";

export default function DescriptionPopup({title, description, isDark}) {
  const { setVisible, bindings } = useModal()
  const setTitle = title
  const setDescription = description

  const [containerStyle, setContainerStyle] = useState('')

  useEffect(() => {
    if(isDark === true){
      setContainerStyle('scrollable-container scrollable-container-light-popup')
    }
    if (isDark === false){
      setContainerStyle('scrollable-container scrollable-container-dark-popup')
    }
  },[isDark])


  return (
    <div>

      
      <Link css={{fontWeight:'$bold'}} onPress={() => {setVisible(true)}}>SEE MORE &nbsp;<i class="fa-solid fa-arrow-right-long"></i></Link>
      
      

    
      <Modal
        closeButton
        scroll
        width='75%'
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        css={{height:'70vh'}}
        blur
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
        <Modal.Body >
          <Grid.Container className={containerStyle} css={{paddingLeft:'$10', paddingRight:'$10'}}>
            <Text size={18} id="modal-description" css={{textAlign:'justify'}}>
            {setDescription}
          </Text>
          </Grid.Container>
          
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
            {setTitle === 'UI/UX Designing & Developing' &&
              <Grid.Container justify="center">
                <Grid >
                  <Link>
                    <Card css={{background:'transparent'}}>
                      <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                      <iconify-icon icon="solar:figma-linear"></iconify-icon>
                      </Card.Body>
                    </Card>
                  </Link>
                </Grid>
                <Grid >
                <Link>
                  <Card css={{background:'transparent'}}>
                    <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                    <i class="fa-brands fa-html5"></i>
                    </Card.Body>
                  </Card>
                </Link>
              </Grid>
              
              <Grid >
                <Link>
                  <Card css={{background:'transparent'}}>
                    <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                    <i class="fa-brands fa-css3-alt"></i>
                    </Card.Body>
                  </Card>
                </Link>
              </Grid>
              <Grid >
                <Link>
                  <Card css={{background:'transparent'}}>
                    <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                    <iconify-icon icon="simple-icons:androidstudio"></iconify-icon>
                    </Card.Body>
                  </Card>
                </Link>
              </Grid>
              <Grid >
                <Link>
                  <Card css={{background:'transparent'}}>
                    <Card.Body css={{fontSize:'$4xl', textAlign:'center'}}>
                    <iconify-icon icon="simple-icons:visualstudio"></iconify-icon>
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
