import React,{Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 20,
    },
  });
  


class PaperBG extends Component {
         render(){
           console.log(this.props)
            const { children,classes } = this.props
            return (
                <div>
                  <Paper className={classes.root} elevation={5}>
                    {children}    
                  </Paper>
                </div>
              );
         }
    }

  PaperBG.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperBG);