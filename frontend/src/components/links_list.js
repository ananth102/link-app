import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Link from "./link";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));
  
  const SimplePaper = ({linkArr,onClick}) => {
    const classes = useStyles();
    let links = [];
    for(let i =0;i<linkArr.length;i++){
        links.push(<Link onClick={onClick} linkid={i} linktext={linkArr[i]}/>)
        //console.log("woof");
    }
    return (
      <div className={classes.root}>
        <Paper elevation={20}>{links}</Paper>
      </div>
    );
  }
  export default SimplePaper;