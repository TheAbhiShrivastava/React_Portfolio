import React from 'react'
import {Card, Container, Grid, Text, Link, Image, Badge, Spacer} from '@nextui-org/react'
import DescriptionPopup from './DescriptionPopup'
import ProjectPopup from './ProjectPopup'
import AutoTypingField from './AutoTypingField'
import MessageSend from './MessageSend'

export default function Content({isDark}) {
    const cardStyles = {
        background: 'linear-gradient(to right, #FFB938 -20%, #f33d4e 100%)',
    }

    const webDebvelopment = "With expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), I offer comprehensive full-stack web development services. From designing and implementing efficient backend APIs using Node.js and Express.js to developing dynamic and interactive user interfaces with React, I can help bring your web application ideas to life. Leveraging MongoDB as the database, I ensure seamless data management and create scalable and performant web solutions tailored to your specific requirements. Whether it's building a responsive e-commerce platform or a modern web application, I am well-versed in the latest tools and technologies of the MERN stack to deliver high-quality and robust web solutions.Additionally,."
   const UIUXDesign = 'With expertise in UI/UX design, I create visually stunning and user-friendly interfaces. Using tools like Figma, I design intuitive and captivating user experiences that meet the needs of your target audience. From wireframing and prototyping to creating pixel-perfect designs, I strive to deliver interfaces that not only look great but also provide exceptional usability and user satisfaction.'
    
    const  email = 'ak2545307@gmail.com'
    const phone = '8521265701'

    return (
        <div>
            <section id='home' style={{top:'-400px'}}></section>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$8'}}>
                <Grid xs={12} md={8}>
                    <Container>
                        <Text
                            h4
                            weight="bold"
                        >
                            Hi There, {isDark && <span>Hello</span>}
                        </Text>
                        <Text
                            h1
                            size={50}
                            css={{
                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            }}
                            weight="bold"
                        >
                            I'm Abhishek kumar
                        </Text>
                        <Grid.Container>
                            <Grid>
                                <AutoTypingField/>
                            </Grid>
                        </Grid.Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Text css={{textAlign:'justify', paddingLeft:'$8', paddingRight:'$8'}} b>
                                CSE student who knows how to write an optimize code.
                                 A deep thinker and a quick learner who wants to help people and make an impact with my coding skills. 
                                 I am curious to learn new skills, always willing to improve the ones I have. 
                                 A passionate Full Stack Web Developer having an
                                    experience of building Web applications with
                                    JavaScript / Reactjs / Nodejs / Expressjs and some
                                    other cool libraries and frameworks.

                                </Text>
                            </Card.Body>
                        </Card>
                        <Text h4 css={{textAlign:'center'}}>
                            Connect Me
                        </Text>


                        <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                            <Grid >
                                <Link href='' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-github" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='https://www.linkedin.com/in/abhishek-kumar852126//' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-linkedin" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='https://www.instagram.com/abhishek_2545307/?next=%2F&hl=en/' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-instagram" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-twitter" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='/' target='_blank'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid.Container>

                        
                    </Container>

                </Grid>
                <Grid xs={12} md={4}>
                    <Container>
                        <Card  css={{ marginBottom:'$8', height:'fit-content'}}>
                            <Card.Body>
                                <Image
                                    height={300}
                                    width = {570} 
                                    src="/abhi.photo.jpg"
                                    alt="Default Image"
                                    objectFit="cover"
                                />
                            </Card.Body>
                        </Card>
                        
                        <Text h4 css={{textAlign:'center'}}>
                            Contact Me
                        </Text>

                        <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                            <Grid >
                                <Link href='/'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-phone" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='/'>
                                    <Card style={cardStyles}>
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-whatsapp" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                            <Grid >
                                <Link href='/'>
                                    <Card style={cardStyles} >
                                        <Card.Body css={{fontSize:'$3xl',color:'$white', width:'70px', textAlign:'center'}}>
                                            <i class="fa fa-envelope-o" aria-hidden="true" ></i>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Grid>
                        </Grid.Container>
                    </Container>
                    
                </Grid>
            </Grid.Container>
            <section id='skills'></section>
            <hr style={{border:'solid 1px', margin:'40px'}}/>
                            
            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}}>
                Skills
            </Text>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$8'}}>
                <Grid xs={12} md={4}>
                    <Container>
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
                            Programming Languages
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                            
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-java"></i>
                                                    <Text h3>Java</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-python"></i>
                                                    <Text h3>Python</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="file-icons:chai"></iconify-icon>
                                                    <Text h3>C</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="file-icons:c"></iconify-icon>
                                                    <Text h3>C++</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                  
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} md={3}>
                    <Container>
                        <Text
                            h5
                            size={15}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
                            Web Technologies
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-square-js"></i>
                                                    <Text h3>JavaScript</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-html5"></i>
                                                    <Text h3>HTML5</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-css3-alt"></i>
                                                    <Text h3>CSS</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} md={3}>
                    <Container>
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
                            Other Skills
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="bi:git"></iconify-icon>
                                                    <Text h3>Git</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="solar:figma-linear"></iconify-icon>
                                                    <Text h3>Figma</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="simple-icons:postman"></iconify-icon>
                                                    <Text h3>Postman</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2} justify="center" css={{marginTop:'$8'}}>
                <Grid xs={12} md={6}>
                    <Container>
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
                            Frameworks & Libraries
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-react"></i>
                                                    <Text h3>ReactJS</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <i class="fa-brands fa-node-js"></i>
                                                    <Text h3>ExpressJS</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="devicon:tailwindcss"></iconify-icon>
                                                    <Text h3>Tailwind CSS</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                   
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} md={6}>
                    <Container>
                        <Text
                            h5
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                marginTop:'$5'
                            }}
                        >
                            Databases
                        </Text>
                        <Card css={{marginTop:'$8', marginBottom:'$8'}}>
                            <Card.Body>
                                <Grid.Container gap={2} justify="center" css={{color:'$white'}}> 
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="devicon-plain:mysql"></iconify-icon>
                                                    <Text h3>MySQL</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="bxl:mongodb"></iconify-icon>
                                                    <Text h3>MongoDB</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid >
                                        <Link>
                                            <Card css={{background:'transparent'}}>
                                                <Card.Body css={{fontSize:'$7xl', textAlign:'center'}}>
                                                    <iconify-icon icon="mdi:firebase"></iconify-icon>
                                                    <Text h3>Firebase</Text>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Grid>
                                 
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
            </Grid.Container>


            <spin id='education'></spin>

            <hr style={{border:'solid 1px', margin:'40px'}}/>
            
            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}}>
                Education
            </Text>

            <Grid.Container gap={2} justify='space-between' css={{marginTop:'$8'}}>
                <Grid md={6} xs={12}>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Grid.Container justify='space-between'>
                                    <Grid md={4} xs={12}>
                                        <Container>
                                            <Image src='/cbse study.jpg' width={300} />
                                        </Container>
                                    </Grid>
                                    <Grid md={8} xs={12}>
                                        <Container>
                                            <Grid.Container justify='space-between'>
                                                <Grid>
                                                    <Text
                                                        h3
                                                        css={{
                                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                                        }}
                                                        weight="bold"
                                                    >
                                                        CBSE
                                                    </Text>
                                                </Grid>
                                                <Grid>
                                                    <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Saran</Badge>
                                                </Grid>
                                            </Grid.Container>
                                            <Text css={{fontWeight:'$semibold'}}>
                                                (2005- 2017)
                                            </Text>
                                            <Spacer/>
                                            <Text b css={{textAlign:'justify'}}>
                                                I'm done my education 1st to 10th Galaxy Residential Public School, Saran
                                            </Text>
                                        </Container>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
               
                <Grid md={6} xs={12}>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Grid.Container justify='space-between'>
                                    <Grid md={4} xs={12}>
                                        <Container>
                                            <Image src='/kameshwar narayan singh.jpeg' width={134} />
                                        </Container>
                                    </Grid>
                                    <Grid md={8} xs={12}>
                                        <Container>
                                            <Grid.Container justify='space-between'>
                                                <Grid>
                                                    <Text
                                                        h3
                                                        css={{
                                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                                        }}
                                                        weight="bold"
                                                    >
                                                        SBTE
                                                    </Text>
                                                </Grid>
                                                <Grid>
                                                    <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Samastipur</Badge>
                                                </Grid>
                                            </Grid.Container>
                                            <Text css={{fontWeight:'$semibold'}}>
                                                (2017 - 2020)
                                            </Text>
                                            <Spacer/>
                                            <Text b>
                                                I'm complete dipolma  Mechanical engineering in Kameshwar narayan singh polytechnic 
                                            </Text>
                                        </Container>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid md={6} xs={12}>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Grid.Container justify='space-between'>
                                    <Grid md={4} xs={12}>
                                        <Container>
                                            <Image src='/sit.jpeg' width={134} />
                                        </Container>
                                    </Grid>
                                    <Grid md={8} xs={12}>
                                        <Container>
                                            <Grid.Container justify='space-between'>
                                                <Grid>
                                                    <Text
                                                        h3
                                                        css={{
                                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                                        }}
                                                        weight="bold"
                                                    >
                                                     BEU
                                                    </Text>
                                                </Grid>
                                                <Grid>
                                                    <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Sitamarhi</Badge>
                                                </Grid>
                                            </Grid.Container>
                                            <Text css={{fontWeight:'$semibold'}}>
                                                (2021 - Present)
                                            </Text>
                                            <Spacer/>
                                            <Text b>
                                                I'm currently doing B.tech in Computer science engineering at Sitamarhi institute of technology 
                                            </Text>
                                        </Container>
                                    </Grid>
                                </Grid.Container>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>

            </Grid.Container>

            <spin id='services'></spin>

            <hr style={{border:'solid 1px', margin:'40px'}}/>
            
            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}}>
                Services
            </Text>

            
            <Grid.Container gap={2} justify="center">
                <Grid xs={12} md={6} lg={10}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', padding:'$5 $10'}}>
                            <Card.Body>
                                <Grid.Container justify='space-between'>
                                    <Grid> 
                                        <Text
                                            h3
                                            css={{
                                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                            }}
                                            weight="bold"
                                        >
                                            Full Stack Web Development
                                        </Text>
                                        <Spacer/>
                                    </Grid>
                                    <Grid>
                                        <Grid.Container justify='space-between' gap={1}>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>MERN</Badge>
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>React + Express</Badge>                                          
                                            </Grid>
                                        </Grid.Container>
                                        
                                    </Grid>
                                </Grid.Container>
                                
                                <Text b css={{textAlign:'justify'}}>
                                    Having good experience and best knowledge about Full Stack Web Developing using MERN stack<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                    Having experience to design atractive and user friendly UI and develop them using React<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                    Additionaly, Having besic knowledge about Backend Developing using Expess framework
                                        
                                </Text><Spacer y={0.5}/>
                                <DescriptionPopup title='Full Stack Web Development' description={webDebvelopment} isDark={isDark} />
                                
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                
                <Grid xs={12} md={6} lg={10}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', padding:'$5 $10'}}>
                            <Card.Body>
                            <Grid.Container justify='space-between'>
                                    <Grid>
                                        <Text
                                            h3
                                            css={{
                                            textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                            }}
                                            weight="bold"
                                        >
                                            UI/UX Designing & Developing
                                        </Text>
                                        <Spacer/>
                                    </Grid>
                                    <Grid>
                                        <Grid.Container justify='space-between' gap={1}>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>Figma</Badge>
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}>React</Badge>                                          
                                            </Grid>
                                            <Grid>
                                                <Badge variant='bordered' size="md" color='warning' css={{background:'linear-gradient(to right, #FFB938, #f33d4e)', color:'White', fontWeight:'$bold'}}> HTML+CSS </Badge>                                          
                                            </Grid>
                                        </Grid.Container>
                                        
                                    </Grid>
                                </Grid.Container>
                                
                                <Text b css={{textAlign:'justify'}}>
                                    
                                Having good experience to work in Figma (an online UI designing platform) <br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                Having best experience to develop UIs using React framework, HTML and CSS<br/>
                                </Text><Spacer y={0.5}/>
                                <Text  b css={{textAlign:'justify'}}>
                                Additionaly, I can develop proper UIs for mobile and windows
                                        
                                </Text><Spacer y={0.5}/>
                                <DescriptionPopup title='UI/UX Designing & Developing' description={UIUXDesign} isDark={isDark}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                
            </Grid.Container>
            <spin id='projects'></spin>

            <hr style={{border:'solid 1px', margin:'40px'}}/>

            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}} >
                Projects
            </Text>

            
            <Grid.Container  justify="center" css={{marginTop:'$8', marginBottom:'$8'}}>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/chessimage.jpg' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/CHESS2.png' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    CHESS GAME
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                Create a structure to represent the chessboard, usually using a two-dimensional array or a set of data structures to denote the positions of pieces.
                                Manage the overall game flow, including checking for check, checkmate, stalemate conditions, and determining the end of the game.
                                Develop a user interface to display the chessboard, pieces, and allow players to interact with the game. This could be a graphical interface using libraries like Pygame, Unity, or HTML/CSS/JavaScript for web-based games.

                                </Text>
                                <Spacer y={3.5}/>
                                <ProjectPopup title='CHESS GAME' description='1' githubLink='' linkedinLink='' logoPath={'/CHESS2.png'} isDark={isDark}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/weather.png' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/wether1..png' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    Weather Application
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                Utilize weather data APIs like OpenWeatherMap, WeatherAPI, or AccuWeather to fetch real-time weather information. You'll need to register for an API key and use it to access their services.
                                Display weather information such as current temperature, humidity, wind speed, precipitation, UV index, sunrise/sunset times, and forecasts for the upcoming days. Use icons, graphs, or other visual elements for better user comprehension
                                </Text>
                                <Spacer y={4.8}/>
                                <ProjectPopup title='Weather Application' description='2' githubLink='' linkedinLink='' logoPath={'/logo.png'} isDark={isDark}/>
                            </Card.Body>
                        </Card>
                        
                    </Container>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/BLOG2.png' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/BLOG3.png' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    Blog Application
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                I am interface for creating, editing, and deleting blog posts. Include options for formatting text, adding images, videos, and categorizing posts.
                                Create a responsive user interface that adapts to different screen sizes and devices, ensuring a seamless experience on desktops, tablets, and mobile phones.
                                Design a database schema to store user data, blog posts, comments, categories, tags, and any other necessary information. Popular databases for this include MySQL, PostgreSQL, or MongoDB.
                                Allow users to share blog posts on various social media platforms.

                                     </Text>
                                <Spacer/>
                                <ProjectPopup title='Blog Web' description='3' githubLink='' linkedinLink='' logoPath={'/BLOG3.png'} isDark={isDark}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                
            </Grid.Container>


            <Grid.Container gap={1} justify="center">
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/PLAN.png' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/VISIT.png' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                    VISIT PLAN
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                Understand the requirements and objectives of the VISIT system. Determine the target audience, the purpose of the system (tourism, education, cultural information), and the desired features.
                               select technologies for development. frameworks (e.g., React.js), web development tools (e.g., HTML5, CSS, JavaScript), content management systems , or specialized software for interactive tours.
                               This involves collecting historical data, images,ect.

                                </Text>
                                <Spacer/>
                                <ProjectPopup title='VISIT PLAN' description='4' githubLink='' linkedinLink='' logoPath={'/VISIT.png'} isDark={isDark}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8', paddingLeft:'$8', paddingRight:'$8'}}>
                            <Card.Body>
                                <Spacer/>
                                {isDark && <Image src='/FILTER.png' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                {!isDark && <Image src='/FILTER2.PNG' alt='Project Poster' height={200} css={{width:'100%'}}/>}
                                <Spacer/>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                    weight="bold"
                                >
                                FILTER WEB
                                </Text>
                                <Text css={{textAlign:'justify'}}>
                                Design the filtering mechanism based on the type of content to be filtered. For instance, if filtering web content, consider techniques like keyword matching, URL filtering, or machine learning algorithms for more complex content analysis.
                                Create an intuitive and user-friendly interface for users to interact with the web filter. This could include login screens, settings panels, and clear indicators of filtered content or actions.

                                     </Text>
                                <Spacer y={2.5}/>
                                <ProjectPopup title='FILTER WEB' description='5' githubLink='' linkedinLink='' logoPath={'/FILTER.png'} isDark={isDark}/>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>               
                
            </Grid.Container>
            <spin id='contact'></spin>

            <hr style={{border:'solid 1px', margin:'40px'}}/>



            

            <Text size={50} css={{textAlign:'center', fontWeight:'$extrabold', fontFamily:'arial'}}>
                Contact
            </Text>

            <Grid.Container gap={1} justify="center" css={{marginTop:'$8', marginBottom:'$8'}}>
                <Grid xs={12} sm={4}>
                    <Container>
                        <Card css={{marginTop:'$8', marginBottom:'$8',padding:'$4',paddingLeft:'$12'}}>
                            <Card.Body>
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                >
                                    Contact Details
                                </Text>
                                <table>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="fluent:mail-32-filled"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link 
                                                href={`mailto:${email}`} 
                                                onClick={() => {
                                                    window.location.href = `mailto:${email}`
                                                }}
                                            >
                                                abhishekcoder125@gmail.com
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="solar:phone-bold"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`tel:${phone}`}>
                                                8521265701
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="logos:whatsapp-icon"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://wa.me/${phone}`}>
                                                8521265701 
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                </table>

                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                >
                                    Professional Profiles
                                </Text>

                                <table>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="skill-icons:linkedin"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://www.linkedin.com/in/abhishek-kumar852126//`} target='_blank'>
                                                Abhishek kumar
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="akar-icons:github-fill"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`https://github.com/`} target='_blank'>
                                               Abhishek Raj 
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                </table>
                                
                                <Text
                                    h4
                                    css={{
                                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                        marginTop:'$5'
                                    }}
                                >
                                    Social Media
                                </Text>
                                
                                
                                <table>
                                  
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="skill-icons:instagram"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`/`} target='_blank'>
                                            Abhishek Raj
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{width:'40px'}}>
                                        <Text size={25}><iconify-icon icon="logos:facebook"></iconify-icon></Text>
                                        </td>
                                        <td >
                                        <Text>
                                            <Link href={`/`} target='_blank'>
                                                Abhishek Raj
                                            </Link>
                                        </Text>
                                        </td>
                                    </tr>
                                </table>
                            </Card.Body>
                        </Card>
                    </Container>
                </Grid>
                <MessageSend isDark={isDark}/>
            </Grid.Container>


            <hr style={{border:'solid 1px', margin:'40px', marginBottom:'10px'}}/>
            <Text css={{textAlign:'center', marginBottom:'20px'}}>
                © 2023. All rights reserved by Abhishek Kumar
            </Text>

        </div>
    )
}
