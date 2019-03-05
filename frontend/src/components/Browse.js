import React, { Component } from 'react';
import AddCard from '../profile_match/AddCard';
import { Button } from 'react-bootstrap';
// import { MDBContainer, MDBRow, MDBRangeInput, MDBCard, MDBCol, MDBCardBody, MDBCardTitle, MDBCardImage, MDBIcon } from 'mdbreact';
import NavBar from './NavBar';
import classnames from 'classnames';
import './HomePageStyle.css';
import Slider from 'react-smooth-range-input';

class DisplaySearch extends Component {
    render() {
        const list = this.props.data.map((elem) => <div className="col1"><li className="cardList">
        <AddCard props={elem} /></li></div> );
        return (
    <div className="grid-container">
            <ul>
                <div className="row">
                    {list}
                    {list}
                    {list}
                    {list}
                    {list}
                    {list}
                    {list}
                    {list}
                </div>
            </ul>
        </div>
            )
    }
}

class Browse extends Component {
    constructor(props) {
    super(props);
    this.state = {
        ageMin: 2,
        ageMax: 3,
        eloMin: 1,
        eloMax: 3,
        local: 5,
        data: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}
    componentWillMount() {
        fetch('/Browse', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          })
    }


    //receptionne
    getInfo() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
        console.log('dans get info: ', this.state.data);
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/Browse');
        const body = await response.json();
        console.log('dans func de get', body);
        if (response.status !== 200) {
            throw Error(body.message)
        }
        // this.setState({ data: body });
        return body;
    };

    componentDidMount()
    {
        this.getInfo();
    }

    //envoie
    handleSubmit(e){
        e.preventDefault();
        fetch('/Browse', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        })
        this.getInfo();
    }

    handleChange = () => {
        this.setState({ ageMin: parseInt(this.ageMin.value)});
        this.setState({ ageMax: parseInt(this.ageMax.value)});
        this.setState({ eloMin: parseInt(this.eloMin.value)});
        this.setState({ eloMax: parseInt(this.eloMax.value)});    
    }
    
    render() {
        console.log(this.state);
        if (typeof this.state.data === "string") {
            var obj = JSON.parse(this.state.data);
            console.log('obj: ', obj);
            return (
                <div>

        <section className="section parallax parallax-4">
        {/* <div className="container"> */}
{/* <div className="grid-container"> */}

         <form className="leForm">
  <div className="row1">
  <div className="col">
  
    <h2>renseignez vos preference</h2>
    <label>Son age &ensp; </label>
    <select className="form-control" id="exampleFormControlSelect1"  
        ref={select => this.ageMin = select} 
        value={this.state.ageMin}
        onChange={this.handleChange}>
        <option>1</option><option>2</option><option>3</option>
        <option>4</option><option>5</option>
    </select>
  
    <label>&ensp;à&ensp;</label>
    <select className="form-control" id="exampleFormControlSelect2" 
        ref={select => this.ageMax = select} 
        value={this.state.ageMax}
        onChange={this.handleChange}>
        <option>1</option><option>2</option><option>3</option>
        <option>4</option><option>5</option>
    </select>
  
    <label>&ensp;&ensp;&ensp;Son elo&ensp;</label>
    <select className="form-control" id="exampleFormControlSelect3"  
        ref={select => this.eloMin = select} 
        value={this.state.eloMin}
        onChange={this.handleChange}>
        <option>1</option><option>2</option><option>3</option>
        <option>4</option><option>5</option>
    </select>
  
    <label>&ensp;à&ensp;</label>
    <select className="form-control" id="exampleFormControlSelect4" 
        ref={select => this.eloMax = select} 
        value={this.state.eloMax}
        onChange={this.handleChange}>
        <option>1</option><option>2</option><option>3</option>
        <option>4</option><option>5</option>
    </select>

    <br />
    <br />
        <label>La distance qui vous separes&ensp;</label>
    <Slider
        value={this.state.local} min={1} max={100} 
        onChange={local => this.setState({local: local})}
    />
    <label>{this.state.local} kilometre</label>
    <br />

    <Button onClick={this.handleSubmit} >appliquer les filtres</Button>
  </div>
  </div>
</form>
            {/* {console.log(obj)} */}


          <DisplaySearch search={this.state} data={obj}/>
            {/* </div> */}
            {/* </div> */}
            </section>
            </div>
            );
        }
        else
            return <h1>oups</h1>;
    }
}

export default Browse;

//met en suggestion seulement les sex set a 1, qui pourrai etre les meuf
//je dois aussi faire un array map pour tous les afficher

// const SliderPage = () => {
//     return (
//       <MDBContainer>
//         <MDBCol sm="4">
//           <MDBCard>
//             <MDBCardImage
//               top
//               src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
//               overlay="white-slight"
//               hover
//               waves
//               alt="Card image cap"
//             />
//             <MDBCardBody>
//               <MDBCardTitle>Choose your slider option</MDBCardTitle>
//               <hr />
//               <MDBRow className="my-4" center>
//                 <MDBIcon
//                   far
//                   className="font-weight-bold blue-text mr-2 mt-1"
//                   icon="thumbs-down"
//                 />
//                 <MDBRangeInput
//                   min={0}
//                   max={100}
//                   value={50}
//                   formClassName="w-75"
//                 />
//                 <MDBIcon
//                   far
//                   className="font-weight-bold blue-text ml-2 mt-1"
//                   icon="thumbs-up"
//                 />
//               </MDBRow>
//               <MDBRow className="my-4" center>
//                 <MDBIcon
//                   className="font-weight-bold indigo-text mr-2 mt-1"
//                   icon="dollar-sign"
//                 />
//                 <MDBRangeInput
//                   min={0}
//                   max={100}
//                   value={50}
//                   formClassName="w-75"
//                 />
//                 <MDBIcon
//                   className="font-weight-bold indigo-text ml-2 mt-1"
//                   icon="euro-sign"
//                 />
//               </MDBRow>
//               <MDBRow className="my-4" center>
//                 <MDBIcon
//                   className="font-weight-bold indigo-text mr-2 mt-1"
//                   icon="minus"
//                 />
//                 <MDBRangeInput
//                   min={0}
//                   max={100}
//                   value={50}
//                   formClassName="w-75"
//                 />
//                 <MDBIcon
//                   className="font-weight-bold indigo-text ml-2 mt-1"
//                   icon="plus"
//                 />
//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBContainer>
//     );
// }