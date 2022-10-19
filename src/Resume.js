import { Grid, Box } from "@mui/material/";
import { Button } from "@mui/material/";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import { useState } from "react";
import resume from "../src/resume portfolio/Screenshot (4).png";

import { useNavigate } from "react-router-dom";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

export function Resume() {
  const [skill, setSkill] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="Resume">
      <Box className="MainDiv">
        <Button
          startIcon={
            skill ? (
              <KeyboardDoubleArrowUpIcon />
            ) : (
              <KeyboardDoubleArrowDownIcon />
            )
          }
          onClick={() => setSkill(!skill)}
          class="button-75"
          role="button"
        >
          <span class="text">Resume .....{skill ? null : "<Tap once>"}</span>
        </Button>

        {skill && <img src={resume}></img>}
        <Button
          onClick={() => navigate(-1)}
          startIcon={<ArrowCircleLeftIcon />}
          role="button"
          class="button-back"
        >
          <span class="text">Back</span>
        </Button>
      </Box>
      ;
    </div>
  );
}
