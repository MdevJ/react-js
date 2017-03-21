/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import defaultPicture from './components/img/default.jpg'

const Materialize = window.Materialize

const APP_TITLE = 'Awesome App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import WeatherCard from './components/WeatherCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            weather: undefined,
            city: ''
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">

                        <form onSubmit={ this.fetchWeather }>

                            <div className="row" style={ { marginBottom: 0 } }>
                                <div className="input-field col s6 offset-s3">
                                    <input id="cityInput" type="text" value={ this.state.city } onChange={ this.handleChange } />
                                    <label htmlFor="cityInput">City</label>
                                </div>
                            </div>

                            <button type="submit" className="waves-effect waves-light btn">
                                Weather?
                            </button>

                        </form>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayWeatherInfo() }
                        </div>
                    </div>
                </div>

            </div>
        )
    }



    handleChange = ( event ) => {
        this.setState( {
            city: event.target.value
        } )
    }


    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchWeather = async ( event ) => {


        event.preventDefault()



        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let weather = await get( ENDPOINTS.WEATHER_API_URL, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE, see /utils/api.js file to grab the DOCUMENTATION file
                key: '07fb607594c34e5b9ca213416172302',
                q: this.state.city
            } )

            //checking that we received a well-formated weather object
            if ( weather.current ) {
                //weather data is now received from the server thanks to async-await
                let updatedWeatherWithImage = await this.fetchPicture( weather )

                /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */
                this.setState( {
                    weather: updatedWeatherWithImage
                } )
            }
            //handling error
            else {
                console.log( weather )
                //weather will contain an error object (see APIXU DOCUMENTATION)
                Materialize.toast( weather.error.message, 8000, 'error-toast' )
                //Using Materialize toast component to display error messages - see http://materializecss.com/dialogs.html
            }


        }
        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }

    //will fetch a picture with the name of the city fetched by the weather API
    //will return an updated weather object (same object + one image)
    fetchPicture = async ( weather ) => {
        try {
			
			
			

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(45.434046,12.340284),
    zoom:18,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(mapCanvas,mapOptions);
}


<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEUQaWCYmnLGlcFoRs30e8LDcvoPygWc8&callback=myMap"></script>

           

        return null
    }

}

export default App
