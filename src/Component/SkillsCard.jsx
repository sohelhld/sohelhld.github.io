import { Heading } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

const SkillsCard = ({ imgLink, title }) => {
  return (
    <DIV>
      <img src={imgLink} alt={title} />
      <Heading as="h2" size="xl">
        {title}
      </Heading>
    </DIV>
  );
};

export default SkillsCard;

const DIV = styled.div`
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 300px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  img {
    width: 150px;
    margin: auto;
    height : 170px;
  }
  Heading {
    font-size: 10px;
    margin: auto;
  }
`;
