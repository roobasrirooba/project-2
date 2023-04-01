import { Container} from "@mui/system";
import {Grid} from '@mui/material';
import { Typography } from '@mui/material';
import { Rating } from '@mui/material';
function Product()
{
    return(
        <div>
    <Container sx={{marginY :15}}>
        <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_e5poNHoPqzqvqDi2HCnIC4gGIHHMD7ANQ&usqp=CAU"></img>
                <Typography component="legend">Review</Typography>
                <Typography component="legend">5 stars</Typography>
                <Rating name="customized-5" defaultValue={2} max={10} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_e5poNHoPqzqvqDi2HCnIC4gGIHHMD7ANQ&usqp=CAU"></img>
                <Typography component="legend">Review</Typography>
                <Typography component="legend">10 stars</Typography>
                <Rating name="customized-10" defaultValue={2} max={10} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_e5poNHoPqzqvqDi2HCnIC4gGIHHMD7ANQ&usqp=CAU"></img>
                <Typography component="legend">Review</Typography>
                <Typography component="legend">10 stars</Typography>
                <Rating name="customized-10" defaultValue={2} max={10} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_e5poNHoPqzqvqDi2HCnIC4gGIHHMD7ANQ&usqp=CAU"></img>
                <Typography component="legend">Review</Typography>
                <Typography component="legend">10 stars</Typography>
                <Rating name="customized-10" defaultValue={2} max={10} />
            </Grid>
        </Grid>
    </Container>
    </div> 
    );
}
export default Product;