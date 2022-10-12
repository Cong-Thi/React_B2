import React, { Component } from 'react'
import data from './dataGlasses.json'
import GlassesDetail from './GlassesDetail';
import GlassesList from './GlassesList'

export default class Glasses extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectGlass: null,
        }
    }

    handleSelect = (glass) => {
        this.setState({selectGlass: glass})
    }

  render() {
    return (
      <div className='text-center text-white bg-dark py-5'>
        <h3>TRY GLASSES APP ONLINE</h3>
        <div className='row justify-content-center py-5'>
            <div className='col-6 col-lg-2'>
                <div className='card card1' style={{height: "320px"}}>
                    <GlassesDetail glass={this.state.selectGlass}/>
                </div> 
            </div>
            <div className='col-6 col-lg-2'>
                <div className='card card1' style={{height: "320px"}}>
                    {/* <img className='card-image' src="./glassesImage/model.jpg" alt="model"/> */}
                    
                </div> 
            </div>
        </div>
        <GlassesList glasses={data} onSelect={this.handleSelect}/>
      </div>
    )
  }
}
