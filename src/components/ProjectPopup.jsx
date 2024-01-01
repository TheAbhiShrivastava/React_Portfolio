import { Modal, useModal, Button, Text, Link, Grid, Image, Spacer } from "@nextui-org/react";
import {useState, useEffect} from "react";

export default function ProjectPopup({title, description, githubLink, linkedinLink, logoPath, isDark}) {
  const { setVisible, bindings } = useModal();
  const setTitle = title
  const setDescription = description
  const setGithubLink = githubLink
  const setLinkedinLink = linkedinLink
  const setLogoPath = logoPath

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
      
      <Link css={{fontWeight:'$bold'}} onPress={() => setVisible(true)}>SEE MORE &nbsp;<i class="fa-solid fa-arrow-right-long" ></i></Link>
    
      <Modal
        closeButton
        scroll
        width="85%"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
        css={{height:'100%'}}
        blue
      >
        <Modal.Header css={{paddingBottom:'$10'}}>
          <Grid.Container justify="center" gap={0}>
            <Grid md={3}>
              <Text 
                id="modal-title" 
                h3
                css={{
                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                textAlign:'center'
                }}
                weight="bold"
              >
                {setTitle}
              </Text>
            </Grid>
            <Grid md={3} xs={0}>
              {(setDescription === '4' || setDescription ==='5' || setDescription === '3') &&
                <Image width={100} src={setLogoPath}/>              
              }
              {(setDescription === '1' || setDescription === '2' || setDescription ==='6') &&
                <Image width={100} src={setLogoPath}/>              
              }
              
            </Grid>
          </Grid.Container>
          
          
        </Modal.Header>
        <Modal.Body>
          {/*<Image src="/under-construction.gif"/>*/}
          <Grid.Container justify="space-between" gap={2} className={containerStyle}>
            {/*<Grid md={4} xs={12} css={{overflow:'hidden'}}> 
              <Card css={{height:'30vh'}}>
                <Card.Body css={{height:'50px'}}>
                  <Image src={setLogoPath}/>
                </Card.Body>
              </Card>
              
              <Card css={{height:'30vh'}}>
                <Card.Body css={{height:'50px'}}>
                  <Image src={setLogoPath}/>
                </Card.Body>
              </Card>
            
              
              
            </Grid>*/}
          <Grid  md={12} xs={12} css={{paddingTop:'$0'}}>
              
              {setDescription === '1' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                
Developing a chess game involves several components, from the game logic to the user interface
                  <Spacer/>
                  Functions that I implemeted in chess game Development 
                  <br/>
                  🔗 Represent the chessboard using a data structure (commonly a 2D array or matrix)<br/>
                  🔗 Check and validate legal moves for each piece considering the current board state.<br/>
                  🔗 Implement algorithms to detect if a player is in check or checkmate.<br/>
                  🔗  Create a visual representation of the chessboard using HTML/CSS (or a game framework like React)<br/>
                  🔗 Use images or icons to represent different chess pieces on the board.<br/>
                  🔗 Show game information like whose turn it is, previous moves, and game status (check, checkmate, stalemate)<br/>
                  🔗 Handling Users<br/>
                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <iconify-icon icon="ph:stack"></iconify-icon>&nbsp;&nbsp;&nbsp;MERN Stack<br/>
                  <iconify-icon icon="bxl:mongodb"></iconify-icon>&nbsp;&nbsp;&nbsp;MongoDB<br/>
                  <iconify-icon icon="simple-icons:react"></iconify-icon>&nbsp;&nbsp;&nbsp;React js<br/>
                  <iconify-icon icon="akar-icons:node-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Node js<br/>
                  <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:vscode-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;VS Code<br/>
                 <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                </Text>
              }
              {setDescription === '2' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                  I Building a weather application can be a great way to learn about API integration, user interface design, and handling real-time data. Start by creating a simple version and gradually add more features based on user feedback or your learning goals
                   <Spacer/>
                  Functions that I implemeted in Purchasing Management Subsytem:-
                  <br/>
                  🔗 Show current weather conditions (temperature, humidity, wind speed, etc.).<br/>
                  🔗 Use icons, images, or animations to represent weather conditions (sunny, rainy, cloudy, etc.).<br/>
                  🔗 Ensure the UI adapts well to different devices (desktop, mobile, tablet).<br/>
                  🔗  Connect to a weather data provider's API (like OpenWeatherMap, WeatherAPI, etc.) to fetch weather information.<br/>
                  🔗 HTML, CSS, JavaScript (or frameworks like React)<br/>
                  🔗 Read the API documentation to understand how to make requests and handle responses. <br/>
                  🔗 Create wireframes/mockups to plan the layout and design.<br/>

                
                  <Spacer/>

                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <iconify-icon icon="ph:stack"></iconify-icon>&nbsp;&nbsp;&nbsp;MERN Stack<br/>
                  <iconify-icon icon="bxl:mongodb"></iconify-icon>&nbsp;&nbsp;&nbsp;MongoDB<br/>
                     <iconify-icon icon="simple-icons:react"></iconify-icon>&nbsp;&nbsp;&nbsp;React js<br/>
                  <iconify-icon icon="akar-icons:node-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Node js<br/>
                  <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:vscode-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;VS Code<br/>
                      <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                  
                </Text>
              }
              {setDescription === '3' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
               
                I Developing a blog website involves creating a platform for publishing articles, managing content, and engaging with readers

                   <Spacer/>
                  Functions that I implemeted in Purchasing Management Subsytem:-
                  <br/>
                  🔗  HTML, CSS, JavaScript (possibly with a framework like React)<br/>
                  🔗  Choose a server-side language (Node.js, express.js)<br/>
                  🔗  Code the UI components, navigation, and interactivity <br/>
                  🔗  Ensure the website is responsive and works well across devices (desktop, tablet, mobile).<br/>
                 
                  <Spacer/>

                   <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <iconify-icon icon="simple-icons:react"></iconify-icon>&nbsp;&nbsp;&nbsp;react<br/>
                     <iconify-icon icon="simple-icons:firebase"></iconify-icon>&nbsp;&nbsp;&nbsp;Firebase<br/>
                    <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:vscode-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;VS Code<br/>
                      <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma      
                  <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                       </Text>
              }
              {setDescription === '4' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
                    Building a visit planning web app requires a mix of frontend Allow users to create accounts or log in to save and access their travel plans.

                    <Spacer/>
                      
                  🔗 Integration with maps (like Google Maps API) to visualize planned locations and routes. <br/>
                  🔗  HTML, CSS, JavaScript (possibly with a framework like React)<br/>
                  🔗  Code the UI components, forms, and interactive features for creating and managing trips.<br/>
                  🔗 <br/>
                
                  <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <i class="fa-brands fa-html5"></i>&nbsp;&nbsp;&nbsp;HTML5<br/>
                  <i class="fa-brands fa-css3-alt"></i>&nbsp;&nbsp;&nbsp;CSS<br/>
                  <iconify-icon icon="fa6-brands:square-js"></iconify-icon>&nbsp;&nbsp;&nbsp;JavaScript<br/>
                  <iconify-icon icon="simple-icons:react"></iconify-icon>&nbsp;&nbsp;&nbsp;react<br/>
                    <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                    <iconify-icon icon="akar-icons:figma-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;Figma
                  <Spacer/>

                   </Text>
              }
              {setDescription === '5' && 
                <Text size={18} css={{textAlign:'justify', paddingTop:'$0'}}>
               I Building a filtering system for web development involves allowing users to refine and sort through a dataset or content based on specific criteria. Here's a breakdown of content and steps involved in creating a filtering mechanism:   
                     <Spacer/>
                   <Spacer/>

                  Used Technologies & Tools:
                  <br/>

                  <i class="fa-brands fa-html5"></i>&nbsp;&nbsp;&nbsp;HTML5<br/>
                  <i class="fa-brands fa-css3-alt"></i>&nbsp;&nbsp;&nbsp;CSS<br/>
                  <iconify-icon icon="fa6-brands:square-js"></iconify-icon>&nbsp;&nbsp;&nbsp;JavaScript<br/>
                   <iconify-icon icon="bi:git"></iconify-icon>&nbsp;&nbsp;&nbsp;Git<br/>
                  <iconify-icon icon="bi:github"></iconify-icon>&nbsp;&nbsp;&nbsp;GitHub<br/>
                  <iconify-icon icon="akar-icons:vscode-fill"></iconify-icon>&nbsp;&nbsp;&nbsp;VS Code<br/>
                   <Spacer/>

                  </Text>
              }
           
              
            </Grid>
          </Grid.Container>
          
        </Modal.Body>
        <Modal.Footer>
            <Grid.Container gap={1} justify="center">
                <Grid>
                <Link href={"https://www.linkedin.com/in/abhishek-kumar852126/"}>
                    <Button href={setLinkedinLink} shadow color='warning' auto iconRight={<iconify-icon icon="mdi:linkedin"></iconify-icon>}>
                        More Details
                    </Button>
                    </Link>
                </Grid>
                <Grid>
                  <Link href={"https://github.com/TheAbhiShrivastava"}>
                    <Button href={setGithubLink} shadow color='warning' auto iconRight={<iconify-icon icon="mdi:github"></iconify-icon>}>
                        Source Code
                    
                    </Button>
                  </Link>
                </Grid>
            </Grid.Container>
        </Modal.Footer>
  
      </Modal>
    </div>
  );
}
