import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({Info}){
    const Back_Img="https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return(
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Back_Img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.City}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature:{Info.Temperature}&deg;</p>
          <p>Humidity:{Info.Humidity}</p>
          <p>Feelslike:{Info.Feelslike}</p>
          <p>pressure:{Info.pressure}</p>
          <p>wind_speed:{Info.wind_speed}</p>
          <p>The weather can be describe as:{Info.weather}</p>
        </Typography>
      </CardContent>
    
    </Card>
        </div>
    )
}