import React, { Component } from 'react';
import axios from 'axios';


class SubmissionForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      authors:'',
      source:'',
      pubdate:'',
      doi:'',
      claim: '',
      evidence: '',
      status: 'Submitted'
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      authors: this.state.authors,
      source: this.state.source,
      pubdate: this.state.pubdate,
      doi: this.state.doi,
      claim: this.state.claim,
      evidence: this.state.evidence,
      status: this.state.status
    };

    axios
      .post('https://speed-cise.herokuapp.com/api/submitted', data)
      .then(res => {
        this.setState({
          title: '',
          authors:'',
          source:'',
          pubdate:'',
          doi:'',
          claim: '',
          evidence: ''
        })
        this.props.history.push('/');
        console.log("submitted succesfully!!")
      })
      .catch(err => {
        console.log("Error in SubmissionForm!");
      })
  };

  render() {
    return (
     <form noValidate onSubmit={this.onSubmit}>
         <div className='form-group'>
           <input
              type='text'
              placeholder='Title of the Article'
              name='title'
              className='form-control'
              value={this.state.title}
              onChange={this.onChange}
              />
          </div>
          <br />

          <div className='form-group'>
           <input
              type='text'
              placeholder='Authors'
              name='authors'
              className='form-control'
              value={this.state.authors}
              onChange={this.onChange}
            />
          </div>

          <div className='form-group'>
           <input
              type='text'
              placeholder='Sources for this article'
              name='source'
              className='form-control'
              value={this.state.source}
              onChange={this.onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='date'
              placeholder='pubdate'
              name='pubdate'
              className='form-control'
              value={this.state.pubdate}
              onChange={this.onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='DOI of this Article'
              name='doi'
              className='form-control'
              value={this.state.doi}
  v           onChange={this.onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Claim of this Article'
              name='claim'
              className='form-control'
              value={this.state.claim}
  v           onChange={this.onChange}
            />
          </div>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Evidence for this Article'
              name='evidence'
              className='form-control'
              value={this.state.evidence}
  v           onChange={this.onChange}
            />
          </div>
          <input
             type="submit"
              className="btn btn-outline-warning btn-block mt-4"
          />
      </form>
    )}
}

export default SubmissionForm;

