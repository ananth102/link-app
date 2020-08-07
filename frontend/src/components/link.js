import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const link = ({linkid,linktext,onClick}) => {
return <Button href={linktext} variant="contained" color="primary">{linktext}</Button>;
};

export default link;