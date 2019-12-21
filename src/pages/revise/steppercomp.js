import React ,{Component}from 'react';

class StepperComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
  }
  onChange1 = (val1) => {
    // console.log(val);
    this.setState({ val1 });
  }
  render() {
    return (
    <div>
      <div style={{
      width:"40%",
      height:"20%",
      border:"1px solid ",
      borderRadius:"10px"
    }}>

      </div>
    </div>
    )
  }
}
export default StepperComp