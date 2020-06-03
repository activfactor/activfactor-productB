import React, {useMemo} from 'react';
import { Skeleton } from '@material-ui/lab';
import { Grid, useTheme, useMediaQuery, Paper } from '@material-ui/core';
import { animation } from '../Skeleton.constants';

const TickerMonitorSkeleton = () => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
    const styles = useMemo(() => {
        return {
            left: {
                width: match ? '100%' : '95%', 
                marginLeft: '0px',
                marginRight: match ? '0px' : 'auto'
            },
            right: {
                width: match ? '100%' : '95%', 
                marginRight: '0px',
                marginLeft: match ? '0px' : 'auto'
            }
        }
    }, [match]); 
    return (
      <Grid container item xs={12}>
        <Grid container xs={12} style={{ marginBottom: "15px" }}>
          <Skeleton variant="text" animation={animation} width="25%" />
        </Grid>
        <Grid container item xs={12}>
          <Grid item md={8} xs={12} style={{ marginBottom: "20px" }}>
            <Paper
              elevation={0}
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                height: "250px",
                ...styles.left,
              }}
            >
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
            </Paper>
          </Grid>
          <Grid item md={4} xs={12} style={{ marginBottom: "20px" }}>
            <Paper
                elevation={0}
                style={{
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: 'center',
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                    height: "250px",
                }}
            >
                <Skeleton variant="rect" animation={animation} width="200px" height={50} style={{marginBottom: '10px'}}/>
                <Skeleton variant="rect" animation={animation} width="200px" height={50} />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          container
          xs={12}
          style={{ marginBottom: "20px" }}
        >
            <Paper elevation={0} style={{padding: '20px', backgroundColor: "rgba(0, 0, 0, 0.04)", height: "320px", width: '100%'}}>
                <Skeleton animation={animation} variant="rect" width="100%" height="100%"/>
            </Paper>
        </Grid>
        <Grid item md={6} xs={12} style={{ marginBottom: "20px" }}>
            <Paper
              elevation={0}
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                height: "250px",
                ...styles.left,
              }}
            >
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
            </Paper>
        </Grid>
        <Grid item md={6} xs={12} style={{ marginBottom: "20px" }}>
            <Paper
              elevation={0}
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "column",
                backgroundColor: "rgba(0, 0, 0, 0.04)",
                height: "250px",
                ...styles.right,
              }}
            >
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
              <Skeleton variant="text" animation={animation} width="100%" />
            </Paper>
        </Grid>
      </Grid>
    );
};

export default TickerMonitorSkeleton;