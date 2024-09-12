import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Card.css'
import { useNavigate } from 'react-router-dom';
export default function MediaCard({image,title,description,id}) {
  const navigate = useNavigate();
  const goToSingleProduct = () => {
    navigate(`singleproduct/${id}`)
  }
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 160 }}
        image= {image}
        title="green iguana"
      />
      <CardContent>
        <Typography sx={{
          height: '64px'
        }} gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography className='line-clamp-3' variant="body2" sx={{ color: 'text.secondary', }}>
        {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={goToSingleProduct} size="small">View More</Button>
      </CardActions>
    </Card>
  );
}