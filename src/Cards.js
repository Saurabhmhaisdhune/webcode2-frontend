import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

export default function Cards() {
  return (
    <>
   
    <div id='cards'>
        <div>
    <Card sx={{ maxWidth: 390 }}>
      <CardMedia
        component="img"
        height="450"
        image= "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg"
        alt="bahubali"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Baahubali
        </Typography>
        <Typography variant="body2" color="text.secondary">
        In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div>
    <Card sx={{ maxWidth: 390 }}>
      <CardMedia
        component="img"
        height="450"
        image="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        RRR
        </Typography>
        <Typography variant="body2" color="text.secondary">
        RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div>
    <Card sx={{ maxWidth: 390 }}>
      <CardMedia
        component="img"
        height="450"
        image= "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc="
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ratatouille
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div>
    <Card sx={{ maxWidth: 390 }}>
      <CardMedia
        component="img"
        height="450"
        image="https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Jai Bhim
        </Typography>
        <Typography variant="body2" color="text.secondary">
        A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div>
    <Card sx={{ maxWidth: 390 }}>
      <CardMedia
        component="img"
        height="450"
        image="https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        The Avengers
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.
        </Typography>
      </CardContent>
    </Card>
    </div>
    <div>
    <Card sx={{ maxWidth: 390 }}>
      <CardMedia
        component="img"
        height="450"
        image= "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Iron man 2
        </Typography>
        <Typography variant="body2" color="text.secondary">
        With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
  );
}
