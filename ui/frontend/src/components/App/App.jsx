import React, {Component} from 'react';
import Service from '../Service/Service';
//import data from '../../status.json';
import Card, {CardBlock, CardTitle} from 'mineral-ui/Card';
import IconHelp from 'mineral-ui-icons/IconHelp';
import IconDoneAll from 'mineral-ui-icons/IconDoneAll';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {}

        }
    }

    // fetchData() {
    //     fetch(process.env.REACT_APP_BACKEND_URL)
    //         .then(response => response.json())
    //         .then(res =>

    //             this.setState({ data: res })
    //         )
    // }

    componentDidMount() {
        setInterval(
            () => (
                fetch(process.env.REACT_APP_BACKEND_URL)

                .then(response => response.json())
                .then(res =>
                    this.setState(() => ({ data: res }))
                ),
                console.log(this.state.data)
                /*.catch(
                    error => {
                        //TODO There are two cases of connection, one is to backend the other is to discovery service. It's not handlet at the moment and there is just one type
                        console.error("Error in fetch, cannot talk to backend");
                        this.setState(() => ({ data: {} }));
                    }
                )*/
            )
            , 2000);
    }

    handleErrors(response) {
        if (!response.ok) {
            console.error("Error in fetch, cannot talk to backend");
            this.setState(() => ({ data: {} }));
        }
        return response;
    }

    renderList(list) {
        console.log(list);
        if (list == null) {
            return null;
        }

        let output_inner
        for (var i = 0; i < list.length; i++) {
            output_inner+= <Service serviceTitle={list[i]}/>
        }

        let output = <div class="Collumn">{output_inner}</div>;
        if (list.lenth === 0) {
            output = null;
        }

        return (
            <>
                {output}
            </>
        )
    };

    renderTitle() {
        var output;
        if (this.state.data.apimlStatus === "CONNECTED") {
            output = <div><IconDoneAll size="2em" color="green"></IconDoneAll> Connected to Discovery Service</div>;
        } else {
            output = <div><IconHelp size="2em" color="red"></IconHelp> Connecting to Discovery Service . . .</div>;
        }

        output = (<Card class="StatusTitle">
            <CardTitle>Zowe Status and Diagnostic service</CardTitle>
            <CardBlock>
                {output}
            </CardBlock>
        </Card>);

        return output;
    }

    render() {
        return (
            <div>

                {this.renderTitle()}

                <div class="Application">

                    <div class="MainWrapper">
                        {this.renderList(this.state.data.eureka1Apps)}
                        {this.renderList(this.state.data.eureka2Apps)}
                        {this.renderList(this.state.data.eureka3Apps)}
                    </div>
                </div>
            </div>
        )

    }
}

export default App
