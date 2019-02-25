import React, { Component } from 'react';
import AddCard from '../profile_match/AddCard';
// import { MDBContainer, MDBRow, MDBRangeInput, MDBCard, MDBCol, MDBCardBody, MDBCardTitle, MDBCardImage, MDBIcon } from 'mdbreact';


class Browse extends Component {
    state = {
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
    render() {
        if (typeof this.state.data === "string") {
            var obj = JSON.parse(this.state.data);
            return (
                <div>
                    dede
                 {/* <h2>Profile</h2> */}
                    <AddCard props={obj[0]} />
                    <AddCard props={obj[1]} />
                    {/* <SliderPage /> */}
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