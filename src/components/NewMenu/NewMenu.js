import React, { Component} from 'react';
import {addMenu} from '../../services/menu';
import Firebase from '../../Firebase';
// import FileUploader from 'react-firebase-file-uploader';
//import allCompanies from '../../services/allCompanies'

class NewMenu extends Component{

    state={
        description:'',
        date:'',
        allCompanies: [],
        formFull: false,
    }
/* 
    componentDidMount(){
        allCompanies().then((resp)=>{
            this.setState({
                allCompanies: resp.data.data.allCompanies
            })
        })
    } */

    createSelector = (data,name) =>{
        let options = data.map((option)=>{
            return(
                <option key={option._id} value={option._id}>{option.name}</option>
            )
        })
        return(
            <select name={name} id={name} value={this.state[name]}
                onChange={this.onChangeInput} className='form-control'
            >
            <option value='' selected>-----</option>
            {options}
            </select>
        )
    }

    onChangeInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        this.setState({
            [name]:value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        addMenu(this.state).then((resp)=>{
            console.log(resp.data.data);
            this.props.history.push('/menus');
        })
    } 

    handleUploadSuccess = (filename) => {
        Firebase.storage().ref('images').child(filename)
            .getDownloadURL().then((url)=>{
                this.setState({image:url})
                console.log(url)
            })
    }

    loadForm = () => {
        if(this.state.allCompanies !== '' && this.state.allRatings !== ''){
            return(
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="name">Fecha:</label>
                        <input type="text" value={this.state.name}
                            className='form-control' name='name'
                            onChange={this.onChangeInput}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="plot">Comida:</label>
                        <textarea value={this.state.plot}
                            className='form-control' name='plot' cols='30' rows='10'
                            onChange={this.onChangeInput}></textarea>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="company">Company:</label>
                        {this.createSelector(this.state.allCompanies, 'company')}
                    </div>
                    <button type='submit' className='btn btn-info'>Save</button>
                </form>
            )
        }
    }

    render(){
        return(
            <div>
                {this.loadForm()}
            </div>
        )
    }
}

export default NewMenu;