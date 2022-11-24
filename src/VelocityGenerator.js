import React from 'react';
import Input from './Input';
import Header from './Header';
class VelocityGenerator extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      sprint1: 10,
      sprint2: 10,
      sprint3: 10,
      numberOfDevs: 10,
      numberOfProductiveDays: 10,
      numberOfDaysOff: 25,
      pointsCarriedAcross: 0,
      previousSprintAverage: 0,
      developersCapacity: 100
    };

    this.handleSprint1Change = this.handleSprint1Change.bind(this);
    this.handleSprint2Change = this.handleSprint2Change.bind(this);
    this.handleSprint3Change = this.handleSprint3Change.bind(this);
    this.handleNumberOfDevsChange = this.handleNumberOfDevsChange.bind(this);
    this.handleNumberOfProductiveDaysChange = this.handleNumberOfProductiveDaysChange.bind(this);
    this.handleNumberOfDaysOffChange = this.handleNumberOfDaysOffChange.bind(this);
    this.handleNumberOfPointsCarriedAccrossChange = this.handleNumberOfPointsCarriedAccrossChange.bind(this);
    this.handleDevelopersCapacityChange = this.handleDevelopersCapacityChange.bind(this);
  }

  handleSprint1Change(e) {
    this.setState({ sprint1 : e.target.value});
  }

  handleSprint2Change(e) {
    this.setState({ sprint2 : e.target.value});
  }

  handleSprint3Change(e) {
    this.setState({ sprint3 : e.target.value});
  }

  handleNumberOfDevsChange(e) {
    this.setState({ numberOfDevs : e.target.value});
  }

  handleNumberOfProductiveDaysChange(e) {
    this.setState({ numberOfProductiveDays : e.target.value});
  }

  handleNumberOfDaysOffChange(e) {
    this.setState({ numberOfDaysOff : e.target.value});
  }

  handleNumberOfPointsCarriedAccrossChange(e) {
    this.setState({ pointsCarriedAcross : e.target.value});
  }

  handleDevelopersCapacityChange(e) {
    this.setState({ developersCapacity : e.target.value});
  }

  previousSprintAverage()
  {
    var previousSprintAverage = (parseInt(this.state.sprint1) + parseInt(this.state.sprint2) + parseInt(this.state.sprint3)) / 3;
    return this.toTwoDecimal(previousSprintAverage);
  }

  reduction()
  {
      var percentage = this.state.numberOfDaysOff / this.max();
      var reductionValue = this.previousSprintAverage() * percentage;
      return reductionValue;
  }
  
  max()
  {
      // Max productive time
      return this.state.numberOfDevs * this.state.numberOfProductiveDays;
  }

  devReductionPercentage()
  {
      var percentageDev = this.state.developersCapacity / 100;
      return percentageDev;
  }

  totalStoryPoints()
  {
    var totalStoryPoints = (this.previousSprintAverage() - this.reduction()) * this.devReductionPercentage();
    return this.toTwoDecimal(totalStoryPoints);
  }

  newStoryPoints()
  {
    var newStoryPoints = this.totalStoryPoints() - this.state.pointsCarriedAcross;
    return this.toTwoDecimal(newStoryPoints);
  }

  signature()
  {
    return `Andrew Hutchinson ${new Date().getFullYear()}`;
  }

  toTwoDecimal(num)
  {
    return Math.round(num * 100) / 100
  }

  render() {
    return <div style={{ width:500 }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Windows 98 Velocity Generator</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className="window-body">
        <Header title="Velocity Generator 🚀"></Header>
          <p>Previous Velocity (sprints)</p>
          <Input value={this.state.sprint1} handleChange={this.handleSprint1Change}/>
          <Input value={this.state.sprint2} handleChange={this.handleSprint2Change}/>
          <Input value={this.state.sprint3} handleChange={this.handleSprint3Change}/>
        <p>Previous Average 🕰</p>
        <span>{this.previousSprintAverage()}</span>
        <p>Number Of Devs 🤼</p>
        <Input name="numberOfDevs" value={this.state.numberOfDevs} handleChange={this.handleNumberOfDevsChange}/>
        <p>Number Of Productive Days 📆</p>
        <Input name="numberOfProductiveDays" value={this.state.numberOfProductiveDays} handleChange={this.handleNumberOfProductiveDaysChange}/>
        <p>Number Of Days off 🏖</p>
        <Input name="numberOfDaysOff" value={this.state.numberOfDaysOff} handleChange={this.handleNumberOfDaysOffChange}/>
        <p>Points Carried Across</p>
        <Input name="pointsCarriedAcross" value={this.state.pointsCarriedAcross} handleChange={this.handleNumberOfPointsCarriedAccrossChange}/>
        <p>Developers capacity in percent (100% by default)</p>
        <Input name="developersCapacity" value={this.state.developersCapacity} handleChange={this.handleDevelopersCapacityChange}/>
        <p>Calculation 👩‍🔬</p>
        {/*<p>Max = {this.max()}</p>
        <p>Dev percent reduction {this.devReductionPercentage()}</p>
        <p>Reduction = {this.reduction()}</p>*/}
        <h3>Total = {this.totalStoryPoints()} Story points 🎰</h3>
        <h3>{this.newStoryPoints()} New Story points 🎯</h3>
        <p>{this.signature()}</p>
      </div>
    </div>
  }
}
export default VelocityGenerator;