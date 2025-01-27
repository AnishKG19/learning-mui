import React , {useState} from 'react'

import {Modal , Button , Box , Typography } from "@mui/material"
const Models = () => {
  const [open , setOpen ] =useState(false)
  return (
    <div>
      <Button variant = "contained" onClick = {() =>setOpen(true)}  > Open Modal </Button>
      <Modal open= {open} onClose = {() => setOpen(false)}  > 
          <Box position = "absolute" top = "50%" left = "50%" >
            <Typography color ="primary" >This is Modal </Typography>
            <Button variant = "contained" onClick = {() => setOpen(false)}  > Cancel </Button>
          </Box>

      </Modal>
    </div>
  )
}

export default Models
