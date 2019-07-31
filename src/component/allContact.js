import React, { Component } from 'react';
const axios = require('axios');
let linkV="https://cors-anywhere.herokuapp.com/https://books.zoho.com/api/v3/organizations?organization_id=649249007&authtoken=db36e02a50b57e081efe533a8a0f834b";
export default class AllContact extends Component{
    state={
        tableVal:null,
        tableHeader:null,
    }
    componentDidMount(){
        this.apiCall()
    }
    apiCall(){
        axios.get(linkV)
        .then(({data})=>{
          this.setState({
            tableVal:data.organizations,
            tableHeader:Object.keys(data.organizations[0])
          })
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
            })
      
    }
    renderTable=(headVal)=>{
        return (<tr><th key={headVal}>{headVal}</th>
            {this.state.tableVal.map((val)=>{
                return <td >{val[headVal] ? val[headVal]:(val[headVal]===false?"false":"true") }</td>
            })
            }
        </tr>)
    }
    
    render(){
        return(
        <table>
            {this.state.tableVal?Object.keys(this.state.tableVal[0]).map((headVal)=>{
                return this.renderTable(headVal)
            }):null}
        </table>)
    }
}