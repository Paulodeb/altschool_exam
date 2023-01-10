import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalStyles } from './styles';

const BasicModal = ({open, onClose, title, subTitle, content, validate}) => {
 
  
  return (
    <Modal open= {open} onClose={onClose}>
       <Box sx={modalStyles.wrapper}>
          <Typography 
            variant="h6" 
            component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {subTitle}
          </Typography>
            {content}
        </Box>
    </Modal>
  )
}

export default BasicModal