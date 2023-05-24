import { Box, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { motion } from 'framer-motion'
const About = () => {
    return (
        <div style={{
            margin: '20px',
            padding: '30px'
        }}>
            <div>
                <Heading m={'auto'} as={'h4'} size={'lg'} color={'green'} padding={'0px'}>
                    About Me
                </Heading>
                <br />
                <br />
                <AboutMeBox>
                    <br />
                    <Box className='child1'>
                        <motion.ul
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <Heading as={'h5'} size={'md'} >
                                Hello! My name is Sohel Rana Halder and I enjoy creating things that live on the internet.
                            </Heading>
                            <br />
                            <Heading as={'h5'} size={'md'} >
                                {`I'm a passionate Developer, with strong administrative and communication skills, good attention to detail
                                  and the ability to write efficient code using MERN Stack.`}
                            </Heading>
                            <br />
                            <Heading as={'h5'} size={'md'} >
                                My interest in web development started back last year when I was trying to edit things on the web, that
                                taught me a lot about HTML & CSS.
                            </Heading>
                            <br />
                            <Heading as={'h5'} size={'md'} >
                                As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for
                                discovering new things every day.
                            </Heading>
                            <br />
                            <Heading as={'h5'} size={'md'} >
                                Fast Forwarding to today, I built a number of web applications and 4 major projects. Learned a great deal
                                about teamwork, leadership, and communication. After months of rigorous training, here I am looking for an
                                opportunity as a full stack web developer.
                            </Heading>
                        </motion.ul>
                    </Box>
                    <Box>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            <img src='https://thumbs.dreamstime.com/b/man-developer-thinking-software-program-code-cartoon-vector-character-isolated-flat-illustration-220801519.jpg' alt='' />
                        </motion.div>

                    </Box>
                </AboutMeBox>
            </div>
        </div>
    );
};

export default About;

const AboutMeBox = styled.div`
  display: inline-flex;
  gap: 40px;
  width: 70%;
  margin: auto;
  .child1 {
    width: 50%;
    font-size: 16px;
    align-items: last baseline;
    justify-content: last baseline;
    margin-left: 0px;
  }

  @media (max-width: 768px) {
    display:  flex;
    flex-direction: column;

    .child1 {
      width: 100%;
    }
  }
`;
