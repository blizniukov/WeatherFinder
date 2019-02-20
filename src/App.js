import React from 'react';
import Titles from './components/Titles';
import FormWeather from './components/FormWeather';
import Weather from './components/Weather';

const API_KEY = "9f177376c541180f69024d162fbd1a51";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    };
    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch('https://api.openweathermap.org/' +
            "data/2.5/weather?q=" + city + "," + country + "&appid=" + API_KEY + "&units=metric");
        const data = await api_call.json();
        if (city && country) {
            this.setState({
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0],
                error: ""
            });
        } else {
            this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please, enter correct value"
            });
        }
    };

    render() {
        return (
            <div>
                <Titles/>
                <FormWeather getWeather={this.getWeather}/>
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    descripion={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;
