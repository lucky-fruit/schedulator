import { Component } from 'react';
import './App.css';
import TimeDisplay from './components/TimeDisplay';
import TypeSelect from './components/TypeSelect';
import Controls from './components/Controls'
import Task from './components/Task'

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
      { name: 'Work Time', time: 1500 },
      { name: 'Short Rest', time: 300 },
      { name: 'Long Rest', time: 900 }
    ]
  };


  stopInterval = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null })
  }

  tick = () => {
    if (this.state.time <= 1) {
      this.stopInterval();
      this.setState({ running: false });
    }
    // console.log(this.state.time)
    this.setState(state => ({ time: state.time - 1 }))
  };

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
    if (time === 0) return 'Finished';
    if (running && !interval) return 'Paused';
    if (running) return 'Running';
  }

  getProgress = () => {
    const current = this.state.time;
    const total = this.state.selectedType.time;
    return ((total - current) / total * 100);
  }

  changeType = type => {
    this.resetTimer();
    this.setState({ selectedType: type, time: type.time, running: false });
  };


  // tick (running the clock), stopInterval (clearing interval)
  // startTimer, pauseTimer, resetTimer
  // getStatus (finished, running, paused), getProgress (time elapsed/total time)
  // changeType (toggle bet. work and rests)
  render() {

    const { time, selectedType } = this.state
    const { types } = this.props

    return (
      <div className="App">
        <TimeDisplay
          time={time}
          status={this.getStatus()}
          progress={this.getProgress()}
        />

        <Controls
          start={this.startTimer}
          reset={this.resetTimer}
          pause={this.pauseTimer}
          status={this.getStatus()}
        />
        <TypeSelect
          types={types}
          changeType={this.changeType}
          selected={selectedType}
        />
        <Task />
      </div>
    );
  }
}

export default App;
