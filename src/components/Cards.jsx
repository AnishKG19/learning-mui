import React ,{ useState} from 'react'
import {Card, CardContent, CardMedia, Typography
    ,CardActions, 
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText , 
    DialogActions 

} from '@mui/material'
const Cards = () => {

    const [open , setOpen ] = useState(false)

  return (
    <div>
        <Card sx = {{ p :30,   maxWidth :300}} >

            <CardMedia component = {'img'} height  =  "140" 
                image = "https://media.post.rvohealth.io/wp-content/uploads/2020/09/health-benefits-of-apples-1200x628-facebook-1200x628.jpg" 
                alt = "test image" 

            />
            <CardContent>
                <Typography gutterBottom variant = "h5" component="div"  >
                    Web Design 

                </Typography>
                <Typography>
                    Lorem ipsum dolor sit.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size ="small" color = "primary">
                    Share
                </Button> 
                <Button onClick = {() => setOpen(true)}  size ="small" color = "primary">
                    Delete 
                </Button>
            </CardActions>
        </Card>

        <Dialog open = {open} onClick = {() => setOpen(false)}>
            <DialogTitle> Are you Sure ? 
                <DialogContent>
                    <DialogContentText>
                        These Product will be deleted 
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick = {() => setOpen(false)} >cancel</Button>
                        <Button> Delete </Button>
                    </DialogActions>

                </DialogContent>
            </DialogTitle>
        </Dialog>
      
    </div>
  )
}

export default Cards
