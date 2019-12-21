import React  from "react"
import { Steps } from 'antd';

const { Step } = Steps;

const stepStyle = {
  marginBottom: 60,
  boxShadow: '0px -1px 0 0 #e8e8e8 inset',
};

export default class StepComp extends React.Component {
  state = {
    current: 0,
  };
  onChange = current => {
    const {push} = this.props.history
    console.log('onChange:', current);
    switch(current){
      case(0):
      push('/home/stepone')
      break;
      case(1):
      push('/home/steptwo')
      break;
      case(2):
      push('/home/stepthree')
      break;
      default:
        break;
    }
    this.setState({ current });
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps
          type="navigation"
          size="small"
          current={current}
          onChange={this.onChange}
          style={stepStyle}
        >
          <Step
            title="第一步"
            status="finish"
          />
          <Step
            title="第二步"
            status="process"
          />
          <Step
            title="第三步"
            status="wait"
          />
        </Steps>
       
      </div>
    );
  }
}
