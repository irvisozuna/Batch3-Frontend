import React, { Component} from 'react';
import {addMenu} from '../../services/menu';
import Firebase from '../../Firebase';
// import FileUploader from 'react-firebase-file-uploader';
import {AllCompanies} from '../../services/company';

class NewMenu extends Component{

    state={
        description:'',
        date:'',
        allCompanies: [],
        formFull: false,
    }

    componentDidMount(){
        AllCompanies().then((resp)=>{
            this.setState({
                allCompanies: resp.data.data.allCompanies
            })
        })
    }

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
            this.props.history.push('/home');
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
                        <label htmlFor="date">Fecha:</label>
                        <input type="date" value={this.state.date}
                            className='form-control' name='date'
                            onChange={this.onChangeInput}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="description">Comida:</label>
                        <textarea value={this.state.description}
                            className='form-control' name='description' cols='30' rows='10'
                            onChange={this.onChangeInput}></textarea>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="price">Precio:</label>
                        <input type="number" value={this.state.price}
                            className='form-control' name='price'
                            onChange={this.onChangeInput}/>
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