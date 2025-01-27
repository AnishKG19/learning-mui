import React , {useState} from 'react'

import { TextField , Button , FormGroup ,
    FormControlLabel , FormControl 
    , InputLabel , MenuItem, 
    FormLabel,
    RadioGroup, 
    Radio 
 } from '@mui/material'


const Form = () => {

    const [inputs , setInputs] =useState({
        name : "anish" , 
        email : "" , 
        password : "" , 
        courses : '' 
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState , 
            [e.target.name]: [e.target.value]
        }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(inputs);
    }

    
  return (
    <div>

        <form onSubmit={handleSubmit} >

            <TextField
                name = "name" 
                value = {inputs.name}
                onChange = {handleChange}
                placeholder = "Enter name " 
                variant = "outlined" 
                sx = {{ margin : "20px"}}

            />
            <br />

            <TextField
                name = "email"
                type = "email" 
                onChange = {handleChange}
                value = {inputs.email}
                placeholder = "Enter email" 
                variant = "outlined" 
                sx = {{margin : "20px"}}
            />
            <TextField
                name = "password"
                type = "password" 

                onChange = {handleChange}
                value = {inputs.password}
                placeholder = "Enter password" 
                variant = "outlined" 
                sx = {{margin : "20px"}}
            />
            <br />

                <button type = "submit"  >Submit here</button>
        <FormControl fullWidth>
            <InputLabel id="menu"> Courses </InputLabel>
            <select name= "" id= "menu-list" label = "courses" value = {inputs.courses}   >
                    <MenuItem value = {"mongodb"}>MongoDB</MenuItem>
                    <MenuItem value = {"React"} >React</MenuItem>
                    <MenuItem value = {"ExpressJS"} >ExpressJS</MenuItem>
                    <MenuItem value = {"Node"} >Node</MenuItem>

            </select>

        </FormControl>
        
        <FormControl>
            <FormLabel>
                <RadioGroup name ="gender" defaultValue={'male'} onChange= {handleChange } >
                    <FormControlLabel>
                        value = {"female"} 
                        label = "Female" 
                        constrol = {<Radio/> } 
                    </FormControlLabel>

                </RadioGroup>

            </FormLabel>
        </FormControl>


        </form>


        <br />


      
    </div>
  )
}

export default Form
