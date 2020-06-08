import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Infobox() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h2 style={{textAlign: "center"}}>Info Titulo</h2>
      <p style={{fontWeight: "bolder", fontSize: "70px", textAlign: "center", margin: "auto"}}>
        38
      </p>
      <div>
        <div  style={{display: "flex"}}>
            <p color="textSecondary" className={classes.depositContext}>
                info 1
            </p>
            <p>
                info 2
            </p>
        </div>
      </div>
    </React.Fragment>
  );
}