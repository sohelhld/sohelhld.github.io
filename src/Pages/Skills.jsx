import React from "react";
import { Heading } from "@chakra-ui/react";
import htmlLogo from "../icons/html.png";
import cssLogo from "../icons/css.png";
import jsLogo from "../icons/js.png";
import reactLogo from "../icons/react.png";
import reduxLogo from "../icons/redux.png";
import chakraLogo from "../icons/chakra.png";
import jestLogo from "../icons/jest.png";
import typescriptLogo from "../icons/typescripte.png";
import SkillsCard from "../Component/SkillsCard";
import styled from "styled-components";
import sqlLogo from "../icons/sql.png";
import nodeLog from "../icons/nodepic.png";
import mongoLogo from '../icons/mongo.png'
import { motion } from "framer-motion";

const frontEndLink = [
  { id: 1, imgLink: htmlLogo, title: "HTML" },
  { id: 2, imgLink: cssLogo, title: "CSS" },
  { id: 3, imgLink: jsLogo, title: "JAVASCRIPT" },
  { id: 4, imgLink: nodeLog, title: "NODE JS" },
  { id: 5, imgLink: reactLogo, title: "REACT" },
  { id: 6, imgLink: mongoLogo, title: "MONGODB" },
  { id: 7, imgLink: sqlLogo, title: "SQL" },
  { id: 7, imgLink: typescriptLogo, title: "TYPESCRIPT" },
];

const Skills = () => {
  return (
    <div>
      <Heading color="green">Skills</Heading>
      <br />
      <br />
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FrondtEndSkills>
          {frontEndLink.map((el) => (
            <SkillsCard key={el.id} {...el} />
          ))}
        </FrondtEndSkills>
      </motion.div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Skills;

const FrondtEndSkills = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 10px;
`;
