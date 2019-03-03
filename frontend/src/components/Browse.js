import React, { Component } from 'react';
import AddCard from '../profile_match/AddCard';
import { Button } from 'react-bootstrap';
// import { MDBContainer, MDBRow, MDBRangeInput, MDBCard, MDBCol, MDBCardBody, MDBCardTitle, MDBCardImage, MDBIcon } from 'mdbreact';
import NavBar from './NavBar';
import classnames from 'classnames';
import './HomePageStyle.css';
import Slider from 'react-smooth-range-input';

class SearchBar extends Component {
   constructor(props) {
       super(props);
       this.state = {
        ageMin: 2,
        ageMax: 3,
        eloMin: 1,
        eloMax: 3,
        local: 5,
       }
   }

   handleChange = () => {
       this.setState({ ageMin: parseInt(this.ageMin.value)});
       this.setState({ ageMax: parseInt(this.ageMax.value)});
       this.setState({ eloMin: parseInt(this.eloMin.value)});
       this.setState({ eloMax: parseInt(this.eloMax.value)});    
   }

    render() {
    return (
        <form>
            <h2>renseignez vos preference</h2>
  <div class="row">
  <div class="col">
    <label for="exampleFormControlSelect1">son age</label>
    <select class="form-control" id="exampleFormControlSelect1" ref={select => this.ageMin = select} onChange={this.handleChange}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <label for="exampleFormControlSelect1">à</label>
    <select class="form-control" id="exampleFormControlSelect2" ref={select => this.ageMax = select} onChange={this.handleChange}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    <p>Distance:</p>
    <Slider id="zob" 
        value={this.state.local} min={1} max={100} 
        onChange={local => this.setState({local: local})}
    />
    <p>{} kilometre</p>
    <label for="exampleFormControlSelect1">son elo</label>
    <select class="form-control" id="exampleFormControlSelect1" ref={select => this.eloMin = select} onChange={this.handleChange}>
      <option>1 unité de elo</option>
      <option>2 unité de elo</option>
      <option>3 unité de elo</option>
      <option>4 unité de elo</option>
      <option>5 unité de elo</option>
    </select>
    <label for="exampleFormControlSelect1">à</label>
    <select class="form-control" id="exampleFormControlSelect1" ref={select => this.eloMax = select} onChange={this.handleChange}>
      <option>1 unité de elo</option>
      <option>2 unité de elo</option>
      <option>3 unité de elo</option>
      <option>4 unité de elo</option>
      <option>5 unité de elo</option>
    </select>
    {/* {console.log(document.getElementById('zob').value)} */}
    {/* <Button onClick={() => {console.log(this.petType.value)}}>clicko</Button> */}
    <Button onClick={() => {this.props.handleSearch(this.state)}} >appliquer les filtres</Button>
  </div>
  </div>
</form>
    )
   }
}

class DisplaySearch extends Component {
    render() {
        const list = this.props.data.map((elem) => <div className="col">
        <AddCard props={elem} /></div> );
        return (
    <div class="grid-container">
            <div className="row">
            <ul>{list}</ul>
            </div>
            </div>
            // <div class="grid-container">
            // <div className="row">
            //     <div className="col">
            //         <AddCard props={this.props.data[0]} /></div>
                
            //     <div className="col">
            //         <AddCard props={this.props.data[1]} /></div>
            
                /* <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div>
                <div className="col">
                    <AddCard props={this.props.data[1]} /></div> */
                // </div>
                // </div>
            )
    }
}

class Browse extends Component {
    state = {
        ageMin: 20,
        ageMax: 30,
        eloMin: 10,
        eloMax: 30,
        local: 5,
        data: null
    };
    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/Browse');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        this.setState({ data: body });
        // console.log(this.state.data);
        return body;
    };
    handleSearch(data){
        this.setState({ ageMin: data.ageMin})
        this.setState({ ageMax: data.ageMax})
        this.setState({ eloMin: data.eloMin})
        this.setState({ eloMax: data.eloMax})
        this.setState({ local: data.local})
    }
    
    render() {
        // console.log(this.state);
        if (typeof this.state.data === "string") {
            var obj = JSON.parse(this.state.data);
            return (
                <div>
                <SearchBar 
                handleSearch={this.handleSearch.bind(this)}
                />
                <DisplaySearch search={this.state} data={obj}/>
                <br/>

                    </div>
            );
        }
        else
            return null;
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