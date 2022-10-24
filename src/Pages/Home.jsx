import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import backgroundImage from "../assets/background2.jpg"
import { keyframes } from 'styled-components'
import {AiOutlineArrowDown} from 'react-icons/ai'
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <MainContainer >
        <BackgroundImage ></BackgroundImage>
        <LandingPage>
            <Header
                animate={{y:0}}
                initial={{y:-100}}
                transition={{duration: 2, ease: "easeIn",}}
            >
                <NavLink href="/">Tours</NavLink>
                <NavLink href="/">About</NavLink>
                <NavLink href="/">Blog</NavLink>
            </Header>
            <TitleContainer>
                <Title
                    animate={{opacity:1}}
                    initial={{opacity:0}}
                    transition={{duration: 2, delay: 0.5}}
                >Adventure Awaits</Title>
                <Title2
                    animate={{y:0 , opacity: 1}}
                    initial={{y:40, opacity: 0}}
                    transition={{duration: 2, delay: 1.5}}
                >Find a beautiful place, and get lost.</Title2>

            </TitleContainer>
            <div></div>
        </LandingPage>
        <Navigation>
            <OutlineArrowDown
                animate={{opacity: 1}}
                initial={{opacity: 0}}
                transition={{duration: 2, delay: 2.5}}
            >
                <AiOutlineArrowDown  size={40}/>
            </OutlineArrowDown>
        </Navigation>

    </MainContainer>
  )
}

export default Home

const MainContainer = styled.div`
    width: 100vw;
    height:100vh;
    position: relative;

`
const BackgroundImage = styled.div`
    width:100%;
    height: 100vh;
    position:absolute;
    overflow-y: hidden;
    top: 0;
    left: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: -145341;
    filter: brightness(60%);
`

const LandingPage = styled.div`
    color: #fffccc;
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`




const Header = styled(motion.div)`
    margin-top: 40px;
    z-index: 111;
    a{
        margin: 0 20px;
        font-size: 14px;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: 700;
        color: #fffccc;
        cursor: pointer;
        transition:0.2s all ;

        &:hover{
            margin: 0 30px;
            transition:0.2s all ;
        }
    }
`
const TitleContainer = styled.h1`
    text-align: center;
    width:80%;
    margin: 0 auto;
    margin-bottom:100px;


`
const Title = styled(motion.h1)`
    font-size: 65px;
    padding: 0;
`
const Title2 = styled(motion.h1)`
    padding: 0;
    font-size:20px;
        font-weight: 400;
`
const ArrowKeyAnimation = keyframes`
    0%{
        margin-bottom: 10px;
    }
    50%{
        margin-bottom: 0px;
    }
    100%{
        margin-bottom: -10px;
    }
    50%{
        margin-bottom: 0px;
    }
    0%{
        margin-bottom: -10px;
    }
`

const Navigation = styled.div`
    position:absolute;
    width: 100%;
    max-height: 100%;
    height: calc(100% - 20px);
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 20px;

`
const OutlineArrowDown = styled(motion.div)`
    color: white;
    animation-name: ${ArrowKeyAnimation};
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    /* margin-bottom: 100px; */
    cursor: pointer;
`