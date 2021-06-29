import { Component } from 'react';
import './App.css';
import TimeDisplay from './components/TimeDisplay';
import TypeSelect from './components/TypeSelect';
import Controls from './components/Controls'
import Task from './components/Task'
import 'bootstrap/dist/css/bootstrap.min.css'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#66cc99"
    },
    secondary: {
      main: "#cc6666"
    },
    background: {
      default: "#66cccc"
    },
    text: {
      primary: "#eff9f9",
      secondary: "#cecbcb"
    },
  }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedType: props.types[0],
      time: props.types[0].time,
      interval: null,
      running: false,
    }
  }

  static defaultProps = {
    types: [
      { name: 'WORK', time: 1500 },
      { name: 'SHORT REST', time: 300 },
      { name: 'LONG REST', time: 900 }
    ]
  };


  stopInterval = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null })
  }

  startTimer = () => {
    const interval = setInterval(this.tick, 1000)
    this.setState(state => ({
      running: true,
      interval,
      time: state.time > 0 ? state.time : state.selectedType.time
    }));
  }

  resetTimer = () => {
    this.stopInterval();
    this.setState(state => ({
      time: state.selectedType.time,
      running: false,
    }))
  }

  pauseTimer = () => {
    this.state.interval ? this.stopInterval() : this.startTimer();
  }

  getStatus = () => {
    const { time, running, interval } = this.state;
    if (time === 0) return 'DONE';
    if (running && !interval) return 'PAUSED';
    if (running) return 'ONGOING';
  }

  changeType = type => {
    this.resetTimer();
    this.setState({ selectedType: type, time: type.time, running: false });
  };

  tick = () => {
    if (this.state.time <= 1) {
      this.stopInterval();
      this.setState({ running: false });
    }
    this.setState(state => ({ time: state.time - 1 }))
  };



  // tick (running the clock), stopInterval (clearing interval)
  // startTimer, pauseTimer, resetTimer
  // getStatus (finished, running, paused), changeType (toggle bet. work and rests)

  render() {

    const { time, selectedType } = this.state
    const { types } = this.props

    return (

      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app-container">
          <Container maxWidth="lg">

            <Box paddingTop={10}>

              <Grid container justify="space-evenly" alignItems="stretch" direction="row" >

                <Grid container item xs={6} sm={3} direction="column" spacing={2} alignItems="center" alignContent="center">
                  <Grid item>
                    <h1>TASKLIST</h1>
                  </Grid>
                  <Grid item>
                    <Task />
                  </Grid>
                </Grid>


                <Grid container item xs={8} sm={5} direction="column" spacing={4} alignItems="center" alignContent="center">
                  <Grid item >
                    <h1>TIMER</h1>
                  </Grid>
                  <Grid item>

                    <TypeSelect
                      types={types}
                      changeType={this.changeType}
                      selected={selectedType}
                    />
                  </Grid>
                  <Grid item>

                    <TimeDisplay
                      time={time}
                      status={this.getStatus()}
                      selected={selectedType}
                    />

                  </Grid>
                  <Grid item>
                    <Controls
                      start={this.startTimer}
                      reset={this.resetTimer}
                      pause={this.pauseTimer}
                      status={this.getStatus()}
                    />
                  </Grid>

                </Grid>

              </Grid>
            </Box>
          </Container>

        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
