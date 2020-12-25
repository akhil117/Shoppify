import React from 'react';
import './item.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import SubmitButton from "../../../Button/Submit"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

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
  }
}));

const Items = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {date,price,description,title} = props;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (

      <Card variant="outlined" className="card__event">
        <header className="card__header">
          <h1> {title} </h1>
        </header>
        <p>
          {description}
        </p>
        <div className="card__price__more">
          <p><span>$</span>{price}</p>
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
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            Created Date: {new Date(date).toLocaleDateString()}
          </CardContent>
          <div className="card__actions">
            <SubmitButton backgroundColor="#f50057" font="10px" width='18%' padding='8px' submitHandler={handleExpandClick} Title="Cancel" />
            <SubmitButton backgroundColor="#0A66C2" font="10px" width='18%' padding='8px' submitHandler={null} Title="Book" />
          </div>
        </Collapse>
      </Card>

  );
};
export default Items;