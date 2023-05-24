import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react'
import githubicon from '../icons/GitHub-Mark.png';
import linkdinLogo from '../icons/download.png'
import { motion } from 'framer-motion';
import myphoto from '../icons/mypic.jpg'



const Home = () => {
    console.log('ratna');
    return (
        <div style={{
            margin: '20px',
            padding: '30px',
            height : '100vh'
        }}>
            <Box>
                <FlexContainer>
                    <Box className='firstChild'>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Heading as="h2" size="lg" color="blackAlpha.1000">
                                    Hey, my name is
                                </Heading>
                            </motion.div>
                            <br />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Heading as="h2" size="2xl">
                                  Sohel Rana Halder
                                </Heading>
                            </motion.div>
                        </div>
                        <br />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Heading class="web-developer-heading">{`A Full Stack Developer who loves building projects.`}</Heading>
                            <Heading class="web-developer-heading">{`I am equipped with a variety of technologies and tools to help me build the best possible product.`}</Heading>
                        </motion.div>

                        <br />
                        <a target='_blank' rel='noopener noreferrer' href="https://drive.google.com/file/d/1iMmF2cTLxYIrFkM0cWrdro_cFFdsC4aj/view?usp=share_link"><Button colorScheme='teal' size='lg'>Resume</Button></a>
                        <br />
                        <Flex gap={0} justifyContent={'space-around'}>
                            <a href='https://github.com/sohelhld' target='_blank' rel='noopener noreferrer'><img src={githubicon} alt="Github-Link" /></a>
                            <a href='https://www.linkedin.com/in/sohel-rana-halder-603a16244/' target='_blank' rel='noopener noreferrer'><img src={linkdinLogo} alt="LinkedIn-Link" /></a>
                        </Flex>
                    </Box>
                    <Box className='secondChild'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 5, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img src={myphoto} alt="myphoto" />
                        </motion.div>

                    </Box>
                </FlexContainer>
                <br />

            </Box>
        </div>
    )
}

export default Home

const FlexContainer = styled.div`
    //padding: 200px;
    width: 100%;
    //height: 300px;
    display: flex;
    justify-content: space-around;
    .firstChild{
        align-items: center;
    }
    .firstChild img{
        width: 100px;
    }
    .firstChild BUtton:hover{
        background-color: green;
    }
    .firstChild img:hover {
    width: 120px;
   // border: 1px solid red;
}
#headingNmae:hover{
color: #a01db8;
}
.web-developer-heading::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('your-icon-url-here');
  background-size: cover;
  margin-right: 8px;
  font-size: large;
}
.web-developer-heading:hover{
    color: blue;
}
    .secondChild img{
        border-radius: 50%;
        height : 250px;
    }
    @media only screen and (max-width: 900px){
       // margin: 100px;
        //padding: 100px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        .firstChild .secondChild{
            align-items: center;
            margin: auto;
            justify-content: center;
        }
        .secondChild img{
            margin: auto;
        }
    }
    @media only screen and (max-width: 300px){
        display: flex;
        flex-direction: column;
        padding: 30px;
        .secondChild img{
            margin: auto;
        }
    }
`;

