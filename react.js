
function Car(props) {

  const classes = ['car']

  if(props.car.active) {
    classes.push('active')
  }
  
  return (
    <div className={classes.join(' ')} onClick={props.onActive}>
      <img className="car__img" src={props.car.img} />
      <span className="car__name">{props.car.name}</span>
      <span className="car__price">{props.car.price}</span>
    </div>
  )
}

class App extends React.Component {

  state = {
    cars: [
      { active: false, name: 'BMW', price: '2000', img: 'http://lorempixel.com/200/200/' },
      { active: false, name: 'Audi', price: '1500', img: 'http://lorempixel.com/201/200/' },
      { active: false, name: 'Mersedes', price: '2500', img: 'http://lorempixel.com/199/200/' },
      { active: false, name: 'Jaguar', price: '3000', img: 'http://lorempixel.com/200/201/ '}
    ],
    visible: true,
    titleApp: 'Title Application'
  }

  handleActive(name) {
    const cars = this.state.cars.concat()

    const car = cars.find(c => c.name === name)
    car.active = !car.active

    this.setState({ cars })
  }

  toggleHandler() {
    this.setState({ visible: !this.state.visible })
  }

  changeTitleHandler(value) {
    this.setState({
      titleApp: value
    })
  }

  renderCars() {

    if (!this.state.visible) {
      return null
    }
    
    return this.state.cars.map(car => {
      return (
        <Car 
          car={car} 
          key={car.name + Math.random()}
          onActive={this.handleActive.bind(this, car.name)}
        />
      )
    })
  }
  
  render() {
    return (
      <div className="app">
        <h1>{this.state.titleApp}</h1>
        <button style={{ marginRight: 15 }} onClick={() => this.toggleHandler()}>Toggle</button>
        <input
          type="text"
          placeholder="Change Title"
          onChange={(event) => this.changeTitleHandler(event.target.value)}
        />
        <hr />
        <div className="car-wrapper">
          { this.renderCars() }
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);