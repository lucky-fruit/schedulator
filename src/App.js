import { Component } from 'react';
import './App.css';
import TimeDisplay from './components/TimeDisplay';
import TypeSelect from './components/TypeSelect';
import Controls from './components/Controls'
import Task from './components/Task'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Container from '@material-ui/core/Container'


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
      <Container maxWidth='lg'>
        <div className="app-container" >

          <h1>TIMER</h1>


          <TypeSelect
            types={types}
            changeType={this.changeType}
            selected={selectedType}
          />


          <TimeDisplay
            time={time}
            status={this.getStatus()}
            selected={selectedType}
          />


          <Controls
            start={this.startTimer}
            reset={this.resetTimer}
            pause={this.pauseTimer}
            status={this.getStatus()}
          />

          <h1>TASKLIST</h1>
          <Task />
        </div>
      </Container>
    );
  }
}

export default App;
