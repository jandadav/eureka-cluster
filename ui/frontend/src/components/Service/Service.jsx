import React, {Component} from 'react';
import Card, {CardBlock, CardStatus, CardTitle} from 'mineral-ui/Card';
import Fade from 'react-reveal/Fade';

class Service extends Component {

  constructor(props) {
    super(props)

    this.state = {
      status: "Down",
      statusCode: "danger"
    }

  }

  componentDidMount() {
    //this.computeStatus();
  }

  // computeStatus() {
  //   if (this.props.status === "UP") {
  //     this.setState({
  //       status: "Up",
  //       statusCode: "success"
  //     })
  //   } else {
  //     this.setState({
  //       status: "Down",
  //       statusCode: "danger"
  //     })
  //   }
  // }

  componentWillUnmount(){
    console.log("destroy");
  }

  componentDidUpdate(prevProps) {
    if (this.props.serviceTitle !== prevProps.serviceTitle) {
      //this.computeStatus();
    }
    
  }

  render() {
    console.log(this.props);
    return (

      // <div class="Service">
        <Fade>
          <Card>
            {/* <CardTitle>{this.props.serviceTitle}</CardTitle>
            <CardBlock>{this.props.serviceDesc}</CardBlock>
            <CardStatus variant={this.state.statusCode}>{this.state.status}</CardStatus> */}
            <CardTitle>{this.props.serviceTitle}</CardTitle>
          </Card>
        </Fade>
      // </div>
    )
  }
}

export default Service
