import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {events: [], 
                  text: '' , 
                  users: "",
                  facebook: "",
                  image: "",
                  id: "",
                  upcoming_event_count: 0,
                  search_name: "",
                  name:""
                  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <center>
          {/* Search option */}
        <h3>Artist Search</h3>        
        <form onSubmit={this.handleSubmit} className="search">
          <input 
            className='input'
            id="search"
            placeholder="Artist name"
            data-testid="search-input"
            onChange={this.handleChange}
            value={this.state.search_name}
          />
          <button className='submit'>
            Search
          </button>
        </form>
        {this.state.id?
        <div>
          {/* Details of the atrist searched are shown here */}
          <div className='artist'>
              <img className="image" data-testid="image" alt="Artist" src={this.state.image}/>  <br/>
              <div className="atrist-details">
                <h2 data-testid="name">{this.state.name}</h2> <br/>
                <a data-testid="facebook" href={this.state.facebook}> <img width='100px' alt="facebook" src="data:image/png;base64,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"></img></a> <br/> <br/> 
              </div>
          </div>
          <div className='upcoming-events'>
            <b>{this.state.upcoming_event_count} Upcoming events </b> <br/>  <br/>
          </div>
        </div>
        :""}
        {/* Events of  the artist searched */}
        <EventsList events={this.state.events} />
        </center>
      </div>
    );
    
  }

  // Called whebn a change occurs
  handleChange(e) {
    this.setState({ search_name: e.target.value });
  }

  // Fetch details of artist and the events
  handleSubmit(e) {
    e.preventDefault();
    fetch(`https://rest.bandsintown.com/artists/`+this.state.search_name+`?app_id=asd`)
        .then(res => res.json())
        .then(result => {
          this.setState({facebook: result.facebook_page_url,
            id: result.id,
            image: result.image_url,
            upcoming_event_count: result.upcoming_event_count,
            name: result.name
            })
        }
    )
    fetch(`https://rest.bandsintown.com/artists/`+this.state.search_name+`/events?app_id=asd`)
    .then(res => res.json())
    .then(result => {
      this.setState({events:result})
      }
    )
  }
}

// Events class
class EventsList extends React.Component {
  render() {
    if (this.props.events.errorMessage){
      return(
        <div>
          <h2 data-testid="does-not-exist">
            {this.props.events.errorMessage}
          </h2>
        </div>
      )
    }
    else{
      return (
        <div className="clear events">
          <center>
          {this.props.events.map(event => (
            <div key={event.id}>
              <div className='event'>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Country</b>
                      </td>
                      <td></td>
                      <td>
                        <b>City</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {event.venue.country}
                      </td>
                      <td></td>
                      <td>
                      {event.venue.city}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <br/>
                      </td>
                      <td>
                        <br/>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Venue</b>
                      </td>
                      <td></td>
                      <td>
                        <b>Date</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      {event.venue.location}
                      </td>
                      <td></td>
                      <td>
                      {new Date(event.datetime).toDateString()} 
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
          </center>
        </div>
      );
    }
  }
}

export default App;
