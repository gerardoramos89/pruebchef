import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },

    papercard: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      width: 440,
      height: 'auto',
      minHeight: '250px'
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));


export default function SpacingGrid(props) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  console.log(props)
  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };
  var rawpage = 9 * (props.page - 1);
  var rawpagefin = 9 * props.page;
  var totalheroes = props.superheroes.slice(rawpage,rawpagefin);
  var likes;
  if(localStorage.getItem("likes") === null){
    likes = props.likes;
  }else{
    likes = JSON.parse(localStorage.getItem("likes"));
  }
  console.log(props.page)
  console.log(rawpage)
  console.log(rawpagefin)
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
        
          {totalheroes.map((value, index) => (
                    <Grid key={index} item>
                        <Paper className={classes.papercard}>
                                <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image} onClick={() =>props.handleSubmitCheck(index*props.page)}>
                                    <img className={classes.img} alt="complex" src={value.picture} />
                                    </ButtonBase>
                                    <Typography gutterBottom variant="subtitle1">
                                            <strong>{value.name}</strong>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            <strong>{value.publisher}</strong>
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {value.info}
                                        </Typography>

                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" style={{ cursor: 'pointer', textAlign: 'rigth ' }}>
                                            <CardActions disableSpacing>
                                            <IconButton aria-label={props.colorIcon} onClick={() =>props.handleSubmitlike(index*props.page)}>
                                                <ThumbUpIcon color={likes[index*props.page] === 0?props.disabled:likes[index*props.page] === 1?props.primary:props.disabled} />
                                            </IconButton>
                                            <IconButton aria-label={props.colorIcon} onClick={() =>props.handleSubmitNotlike(index*props.page)}>
                                            <ThumbDownIcon color={likes[index*props.page] === 0?props.disabled:likes[index*props.page] === 2?props.secondary:props.disabled} />
                                            </IconButton>
                                            </CardActions>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
                            </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
