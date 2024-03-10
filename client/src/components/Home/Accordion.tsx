import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { FC, useState } from 'react'

const AccordionComponent:FC<any> = ({title, text}) => {

 
    
  return (
    <div >
    <Accordion className='mb-10 hover:shadow-xl transition-shadow'>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        
      >
        <div className="text-amber-400 text-4xl "> {title}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="text-center text-2xl"> {text}</div>
      
      </AccordionDetails>
    </Accordion>
  </div>
  )
}

export default AccordionComponent