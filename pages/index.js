import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function Home() {
  return (
    <div className="container">
    <Head>
    <title>Danny Hannah - CTO</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main>
    <Paper elevation={24}>

    <Card sx={{ maxWidth: 500 }}>
    <CardMedia
    component="img"
    alt="Danny Hannah"
    height="150"
    image="https://pbs.twimg.com/profile_banners/1149010087408742407/1569307384/1500x500"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
    Danny Hannah
    </Typography>
    <Typography variant="body2" color="text.secondary">
    Experienced CTO and Technical Leader.
    </Typography>
    </CardContent>
    <CardActions>
    <Button size="small">Share</Button>
    <Button size="small">Learn More</Button>
    </CardActions>
    </Card>
    </Paper>
    </main>
    <Footer />
    </div>
    )
  }
  