import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class NewTrip extends Component {
  constructor(props){
    super(props);
     this.state = {
      email: "",
      password: "",
      props: props,
      auth: '',
      token: '',
      message: '',
     };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleEmail = this.handleEmail.bind(this);
     this.handlePass = this.handlePass.bind(this);
  }
  async handleSubmit(event){
    event.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    let response = await axios({
      method: 'post',
      url: '/login',
      data: data,
    });
    if(!response.data.auth){
      this.setState({
        auth: false,
        message: " (Invalid Credentials)"
      });
    }
    else{
      this.setState({
        auth: response.data.auth,
        token: response.data.token,
    });
    }
  }
   handleEmail(event){
    this.setState({
      email: event.target.value,
    });
  }
   handlePass(event){
    this.setState({
      password: event.target.value,
    });
  }
  render(){
      const { classes } = this.state.props;
      var message = this.state.message;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Request New Trip {message}
        </Typography>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input onChange={this.handleEmail} value={this.state.email}  id="email" name="email" autoComplete="email" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input onChange={this.handlePass} value={this.state.password} name="password" type="password" id="password" autoComplete="current-password" />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}

NewTrip.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewTrip);