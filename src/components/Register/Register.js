import React,{useState,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {Zoom,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {auth} from '../../firebase/config';
import {Avatar,Button,TextField,Grid,Typography,makeStyles,Container} from '../../config/materialConfig';
import {AuthContext} from '../../globalContext/AuthContext'


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    border: '1px solid black'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: '20px 20px 20px 20px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  links: {
      textDecoration: 'none'
  }
}));

export default function Register() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const classes = useStyles();
    const history = useHistory();
    const {setUser} = useContext(AuthContext)


    const signUp =(e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
          setUser(authUser)
          toast.success(`✅ Successfully created.Now you are logged in.`,{
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition:Zoom
        })
            history.push('/')
        })
        .catch((error)=>{
          toast.error(`❌ ${error.message}`,{
            position: "bottom-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition:Zoom
        })
        })
        
    }

  return (
    <Container className="login_container" component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}/>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="rePassword"
            label="Cofirm password"
            type="password"
            id="rePassword"
            value={rePassword}
            onChange={(e)=>setRePassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signUp}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link className={classes.links} to="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Container>
  );
}
