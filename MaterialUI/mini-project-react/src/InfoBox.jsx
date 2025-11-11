import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function InfoBox({info}){
    const Back_Img="https://plus.unsplash.com/premium_photo-1729600377083-bbe558d8b7a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    return(
        <div className="InfoBox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Back_Img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature_c: {info.temp_c}&deg;</p>
          <p>Temperature_F:{info.temp_f}&deg;</p>
          <p>Humidity:{info.humidity}</p>
          <p>Feelslike:{info.feelslike_c}&deg;</p>
          <p>Wind_dir:{info.wind_dir}</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}