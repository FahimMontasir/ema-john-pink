import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({ pd, handleCart }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const features = pd.features;
  return (
    <Card style={{ margin: "5px" }} className={classes.root} >
      <CardMedia
        style={{ width: "200px", margin: '0 auto' }}
        className={classes.media}
        image={pd.img}
        title="product"
      />
      <CardContent>
        <Typography style={{ height: '80px' }} variant="body2" color="textSecondary" component="p">
          {pd.name}
          <span style={{ color: 'pink' }}> Price ${pd.price}</span>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color="secondary" onClick={() => handleCart(pd)} aria-label="add to favorites">
          <AddShoppingCartIcon /> Add
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Features:</Typography>
          <Typography paragraph variant="body2">
            <ol>
              {
                features.map(feature => <li>{feature.description}~~~~~~~{feature.value}</li>)
              }
            </ol>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}