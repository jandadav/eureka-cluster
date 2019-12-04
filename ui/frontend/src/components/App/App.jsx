import React, { Component } from 'react';
import Service from '../Service/Service';
//import data from '../../status.json';
import Card, { CardBlock, CardTitle } from 'mineral-ui/Card';
import IconHelp from 'mineral-ui-icons/IconHelp';
import IconDoneAll from 'mineral-ui-icons/IconDoneAll';
import Text from 'mineral-ui/Text';
import Grid, { GridItem } from 'mineral-ui/Grid';


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

    renderList(list, title) {
        console.log("list:");
        console.log(list);

        let output_inner = []

        if (list!= null && list.length != 0) {
            for (var i = 0; i < list.length; i++) {
                output_inner.push(<Service serviceTitle={list[i]} />)
            }
        }
        let output = <div class="Collumn"><Text as="h4">{title}</Text>{output_inner}</div>;

        return (
            <>
                {output}
            </>
        )
    };

    renderTitle() {
        var output;
        // if (this.state.data.apimlStatus === "CONNECTED") {
        //     output = <div><IconDoneAll size="2em" color="green"></IconDoneAll> Connected to Discovery Service</div>;
        // } else {
        //     output = <div><IconHelp size="2em" color="red"></IconHelp> Connecting to Discovery Service . . .</div>;
        // }

        output = (<Card class="StatusTitle">
            <CardTitle>Eureka cluster test system</CardTitle>

        </Card>);

        return output;
    }

    render() {
        return (
            <div>

                {this.renderTitle()}

                {/* <div class="Application"> */}

                {/* <div class="MainWrapper"> */}
                <Grid>
                    <GridItem>{this.renderList(this.state.data.eureka1Apps, "Discovery1")}</GridItem>
                    <GridItem>{this.renderList(this.state.data.eureka2Apps, "Discovery2")}</GridItem>
                    <GridItem>{this.renderList(this.state.data.eureka3Apps, "Discovery3")}</GridItem>

                    <GridItem>{this.renderList(this.state.data.service1Cache, "Service1 cache")}</GridItem>
                    <GridItem>{this.renderList(this.state.data.service2Cache, "Service2 cache")}</GridItem>
                    <GridItem>{this.renderList(this.state.data.service3Cache, "Service3 cache")}</GridItem>
                    <GridItem>{this.renderList(this.state.data.service4Cache, "Service4 cache")}</GridItem>
                    <GridItem>{this.renderList(this.state.data.service5Cache, "Service5 cache")}</GridItem>

                </Grid>
                {/* </div> */}
                {/* </div> */}
            </div>
        )

    }
}

export default App
