import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn, Header } from "../../components/Form";

class Trails extends Component {
    state = {
        trails: [],
        title: "",
        author: "",
        isSearch: false
        };

    componentDidMount() {
        this.loadTrails();
    }
    
    loadTrails = () => {
        API.getTrails()
            .then(res => this.setState({ trails: res.data, title: this.state.title, author: this.state.author})
            )
            .catch(err => console.log(err));
    };
    deleteTrail = id => {
        API.deleteTrail(id)
            .then(res => this.loadTrails())
            .catch(err => console.log(err));
    };
    updateTrail = (id, item) => {
        API.updateTrail(id, item)
            .then(res => this.loadTrails())
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSearch = event => {
        event.preventDefault();
        if (this.state.title || this.state.author) {
            this.setState({
                isSearch: true
            })
            this.loadTrails()
        }
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveTrail({
                title: this.state.title,
                author: this.state.author
            })
                .then(res => this.loadTrails())
                .catch(err => console.log(err));
        }
    };
   


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>What Trails Should I Take?</h1>
                        </Jumbotron>
                        <form>
                            <Header><h1>Search</h1></Header>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <Input
                                value={this.state.author}
                                onChange={this.handleInputChange}
                                name="author"
                                placeholder="Author"
                            />
                            
                            <FormBtn
                                disabled={!(this.state.title)}
                                onClick={this.handleFormSearch}
                            >
                                Search Trail
                            </FormBtn>

                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 sm-12">
                        <Header><h1>Results</h1></Header>
                        {this.state.isSearch ? (
                            <List>
                                {this.state.trails.map(trail => {
                                    if (trail.title.includes(this.state.title) && trail.author.includes(this.state.author)){
                                        return(
                                            <ListItem key={trail._id}>
                                                <Link to={"/Trails/" + trail._id}>
                                                    <strong>
                                                        {trail.title}
                                                        <br />
                                                        {trail.author}
                                                    </strong>
                                                </Link>
                                                <DeleteBtn onClick={() => this.deleteTrail(Trail._id)} />
                                                <br/>
                                                <SaveBtn onClick={()=> this.updateTrail(Trail._id, {saved: true})} />
                                            </ListItem>
                                        )
                                    }
                                    
                                })}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12 sm-12" >
                    <Header><h1>Saved Trails</h1></Header>
                        {this.state.Trails.length ? (
                            <List>
                                {this.state.trails.map(trail => {
                                    if (Trail.saved) {
                                        return (
                                            <ListItem key={Trail._id}>
                                                <Link to={"/trails/" + Trail._id}>
                                                    <strong>
                                                        {trail.title}
                                                        <br />
                                                        {trail.author}
                                                    </strong>
                                                </Link>
                                                <DeleteBtn onClick={() => this.deleteTrail(trail._id)} />
                                            </ListItem>
                                        )
                                    }
                                }
                                )}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Trails;
