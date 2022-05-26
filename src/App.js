import React from 'react'
import {Button} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            page: null ,
            per_page : null,
            total : null,
            total_pages:null,
            data:null,
            support:null,
            isSearched : false,
            page_no:1,
            flag:true
        }
    }

    handleClick = () => {
        if(this.state.flag===true){
            this.setState({
            flag :false,
            page_no : 2
            })
        }
        else{
            this.setState({
            flag :true,
            page_no : 1
            })
        }
    };

    render(){
        fetch(`https://reqres.in/api/users/?page=${this.state.page_no}`)
                .then(res=>res.json())
                .then(res=>{
                    this.setState({
                        page: res.page ,
                        per_page : res.per_page,
                        total : res.total,
                        total_pages:res.total_pages,
                        data: res.data,
                        support: res.support,
                        isSearched : true,
                    })
                })

        return(
            <div>
               <button  className="button button2" onClick={this.handleClick}>Next</button>{
                    this.state.isSearched?<span>
                    {this.state.data.map((e)=>(
                        <div className="card1" >
                        <center>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={e.avatar} />
                            <Card.Body>
                            <Card.Title>{e.first_name} {e.last_name}</Card.Title>
                            <Card.Text>
                                {e.email}
                            </Card.Text>        
                            <Button variant="primary" className="button button2" href={`mailto:${e.email}`} target="_blank">Mail</Button>
                            </Card.Body>
                        </Card>
                        </center>
            </div>
        ))}
    </span>:
    <div>
        <p style={{color:"red"}}>Something Went Wrong</p>
    </div>
    }
    </div>

        )
    }
}
export default App;