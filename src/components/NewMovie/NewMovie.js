import React, { Component} from 'react';
import allCategories from '../../services/allCategories';
import allRatings from '../../services/allRatings';
import addMovie from '../../services/addMovie';
import Firebase from '../../Firebase';
import FileUploader from 'react-firebase-file-uploader';

class NewMovie extends Component{

    state={
        name:'',
        plot:'',
        director:'',
        year:'',
        url:'',
        image:'',
        category:'',
        rating:'',
        allCategories: [],
        allRatings: [],
        formFull: false,
    }

    componentDidMount(){
        allCategories().then((resp)=>{
            this.setState({
                allCategories: resp.data.data.allCategories
            })
        })
        allRatings().then((resp)=>{
            this.setState({
                allRatings: resp.data.data.allRatings
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

        addMovie(this.state).then((resp)=>{
            console.log(resp.data.data);
            this.props.history.push('/movies');
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
        if(this.state.allCategories !== '' && this.state.allRatings !== ''){
            return(
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" value={this.state.name}
                            className='form-control' name='name'
                            onChange={this.onChangeInput}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="plot">Plot:</label>
                        <textarea value={this.state.plot}
                            className='form-control' name='plot' cols='30' rows='10'
                            onChange={this.onChangeInput}></textarea>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="url">URL:</label>
                        <input type="text" value={this.state.url}
                            className='form-control' name='url'
                            onChange={this.onChangeInput}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="director">Director:</label>
                        <input type="text" value={this.state.director}
                            className='form-control' name='director'
                            onChange={this.onChangeInput}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="year">Year:</label>
                        <input type="text" value={this.state.year}
                            className='form-control' name='year'
                            onChange={this.onChangeInput}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="image">Add Poster:</label>
                        <FileUploader
                            accept="image/*"
                            randomizeFilename
                            storageRef={Firebase.storage().ref('images')}
                            onUploadError={error => console.log(error)}
                            onUploadSuccess={this.handleUploadSuccess}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="category">Category:</label>
                        {this.createSelector(this.state.allCategories, 'category')}
                    </div>

                    <div className='form-group'>
                        <label htmlFor="rating">Rating:</label>
                        {this.createSelector(this.state.allRatings, 'rating')}
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

export default NewMovie;