import React, { Component } from 'react';

class Listing extends Component {

    constructor(props) {
        super(props)   
        this.state = {
            records: [],
            
        }
    }

    componentDidMount() {
      this.listing("1");
    }

listing = (page) =>{
    fetch(`https://reqres.in/api/users?page=${page}&per_page=3`)
    .then(response => response.json())
    .then(records=>{
        this.setState({records:records.data})
    })
    
    .catch(error => console.log(error))

}
    renderListing() {
        let recordList = []
        this.state.records.map(record => {
            return recordList.push(
              <li key={record.id}>
              {record.email} 
              <img src={record.avatar}/> 
              </li>  
            )
        })
     return recordList;
    }

    selectPage=(e) =>{
        let value = e.target.value
        this.listing(value);
        console.log("page",e.target.value)

    }

    count=(e) =>{
        let value = e.target.value
        var vowels = "aeiouAEIOU";
        var count =0;
        for (var dist=0; dist < value.length; dist++){
            if(vowels.indexOf(value[dist])!== -1){ 
                alert(vowels.indexOf(value[dist])) 
                count+=1;  
            }
        }
        //return count;
        this.setState({count:count});

    }
    render() {
        
        return (
            <div>
   <select onChange={(e)=>{this.selectPage(e)}}>
  <option value="1" >1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
            <ol>
            {this.renderListing()}
            </ol>

            <input type="text" onChange={(e)=>{this.count(e)}}/> 
            <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Listing;