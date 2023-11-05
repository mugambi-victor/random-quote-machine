import React from "react";
import Button from "./Components/Button";
import Textwrapper from "./Components/Textwrapper";
import Author from "./Components/Author";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from "@mui/system";
import Card from '@mui/material/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
const styles={
  container:{
    display:'flex',
    height:'100vh',
    alignItems:'center',
    transition:'1s'
  },x:{
    margin:'2rem',
    padding:'2rem',
    display:'flex',
    flexDirection:'column',
    maxWidth: '400px',
    width: '100%',
    minWidth: '600px',
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      index: null,
      backgroundColor: 'gray',
      textColor:''
    };

    // Binding the event handler
    this.nextQuoteHandler = this.nextQuoteHandler.bind(this);
  }

  nextQuoteHandler() {
    const { quotes } = this.state;
    const newIndex = Math.floor(Math.random() * quotes.length);
    const newColor = this.generateRandomColor();
   
    this.setState({
      index: newIndex,
      backgroundColor: newColor,
      textColor:newColor,
    });
  }
  generateRandomColor() {
    // You can implement a function to generate a random color here
    // For simplicity, let's use a light background color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
      .then(data => data.json())
      .then(quotes => {
        this.setState({ quotes }, () => {
          // Callback to ensure state is updated before calling nextQuoteHandler
          this.nextQuoteHandler();
        });
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }

  render() {
    const { quotes, index , backgroundColor, textColor} = this.state;
    //const currentQuote = index !== null ? quotes[index] : null;
    const currentQuote = index !== null && quotes[index] ? quotes[index] : null;
    return (
      <Typography>
          <Grid  sx={{ ...styles.container, backgroundColor }} justifyContent="center" id="quote-box" container>
        <Grid item>
<Card sx={styles.x}>
       <Grid item>
       <Textwrapper
  sx={{ padding: '2rem' }}
  color={textColor}
  text={
    currentQuote ? (
      <>
      <p>  
        <FontAwesomeIcon size="2x" style={{ color: textColor , marginRight:'.3rem'}} icon={faQuoteLeft} />
              { currentQuote.quote}
        </p>
      </>
    ) : (
      ''
    )
  }
/>

  <Author  color={textColor} author={currentQuote ? currentQuote.author : ''} />
       </Grid>
        <Grid item>
        <>
          <a sx={{textDecoration:'none'}}
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              currentQuote ? currentQuote.quote + ' - ' + currentQuote.author : ''
            )}`}
            id="tweet-quote"
          >
        <FontAwesomeIcon size="2x" style={{ color: textColor }} icon={faTwitter} />
       
          </a>
          <Button backgroundColor={textColor} id="new-quote" clickHandler={this.nextQuoteHandler}>New Quote</Button>
        </>
        </Grid>
</Card>
<Grid justifyContent="center" item sx={{ textAlign: 'center' , color:'white'}}>
  <p>by gambinoh</p>
</Grid>

        
        </Grid>
        
      </Grid>
      </Typography>
    
    );
  }
}



export default (App);
