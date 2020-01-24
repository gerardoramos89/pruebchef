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
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  papercardInfo: {
    paddingTop: '20px',
    textAlign: 'center'
  },
  image: {
    width: 328,
    height: 328,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '60%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid(props) {
  
  const classes = useStyles();
  //console.log(props)
  var likes;
  if(localStorage.getItem("likes") === null){
    likes = props.likes;
  }else{
    likes = JSON.parse(localStorage.getItem("likes"));
  }
  console.log(props)
  return (
    <div className={classes.root}>
          <Paper className={classes.papercard}>
                                <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={props.superheroes[props.checkHeroe].picture} />
                                    </ButtonBase>

                                </Grid>
                                <Grid item xs={12} sm container className={classes.papercardInfo}>
                                    <Grid item xs container direction="column" spacing={5}>
                                    <Grid item xs>
                                          <Typography variant="body2" gutterBottom>
                                            <h1><strong>{props.superheroes[props.checkHeroe].name}</strong></h1>
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1">
                                            <strong>{props.superheroes[props.checkHeroe].publisher}</strong>
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {props.superheroes[props.checkHeroe].info}
                                        </Typography>

                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" style={{ cursor: 'pointer', textAlign: 'rigth ' }}>
                                            <CardActions disableSpacing>
                                            <IconButton aria-label={props.colorIcon} onClick={() =>props.handleSubmitlike(props.checkHeroe)}>
                                            <ThumbUpIcon color={likes[props.checkHeroe] === 0?props.disabled:likes[props.checkHeroe] === 1?props.primary:props.disabled} />
                                            </IconButton>
                                            <IconButton aria-label={props.colorIcon} onClick={() =>props.handleSubmitNotlike(props.checkHeroe)}>
                                            <ThumbDownIcon color={likes[props.checkHeroe] === 0?props.disabled:likes[props.checkHeroe] === 2?props.secondary:props.disabled} />
                                            </IconButton>
                                            </CardActions>
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>
          </Paper>
    </div>
  );
}
