import React, { useState } from 'react'
import ModalDialog from "@mui/joy/ModalDialog";
import { Box,  Typography } from '@mui/joy';
import { Button } from '@mui/material';

export default function ModalAdd({setOpen}) {

 

  return (
    <ModalDialog
    aria-labelledby="nested-modal-title"
    aria-describedby="nested-modal-description"
    sx={(theme) => ({
      [theme.breakpoints.only("xs")]: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "8px", 
        maxWidth: "80%",  
      },
    })}
  >
    <Typography id="nested-modal-title" variant="h6">
      Your product is going to be added to CART
    </Typography>
    <Box
      sx={{
        mt: 1,
        display: "flex",
        gap: 1,
        justifyContent:{xs:'center',sm:'none'}
        // flexDirection: { xs: "column", sm: "row-reverse" },
      }}
    >
      <Button
        variant="contained"
        color="warning"
        onClick={() => setOpen(false)}
      >
        Ok
      </Button>
      <Button
        variant="solid"
        color="danger"
        onClick={() => setOpen(false)}
      >
        Cancel
      </Button>
    </Box>
  </ModalDialog>
  )
}
