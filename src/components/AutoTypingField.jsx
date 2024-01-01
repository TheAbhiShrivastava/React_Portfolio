import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import {Grid, Text} from '@nextui-org/react'

export default function AutoTypingField() {

    const strings = ['Full Stack Web Developer.', 'UI/UX Designer.', 'Software Developer.'];

    
  return (
    <div>
      <Grid md={12} sm={12} xs={0}>
        <Text h1 size={35}>
          a&nbsp;
          <Typewriter
              words={strings}
              loop
              cursor
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
          /> 
        </Text>
      </Grid>
      <Grid md={0} sm={0} xs={12}>
        <Text h1 size={25}>
          a&nbsp;
          <Typewriter
              words={strings}
              loop
              cursor
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
          /> 
        </Text>
      </Grid>
        
    </div>
  )
}
