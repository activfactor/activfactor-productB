import React from 'react';
import { Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import {animation} from '../../Skeleton.constants';

const ContentCard = ({styles, repeat=4}) => {
    return (
      <Paper
        elevation={0}
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          backgroundColor: "rgba(0, 0, 0, 0.04)",
          height: "250px",
          ...styles
        }}
      >
          {Array.from(Array(repeat), (e,i) => (
            <Skeleton key={i} variant="text" animation={animation} width="100%" />
          ))}
      </Paper>
    );
};

export default ContentCard;