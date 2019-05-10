
function Car(props) {
  return (
    <div className="car">
      <img className="car__img" src={props.car.img} />
      <span className="car__name">{props.car.name}</span>
      <span className="car__price">{props.car.price}</span>
    </div>
  )
}

class App extends React.Component {

  state = {
    cars: [
      { name: 'BMW', price: '2000', img: 'http://lorempixel.com/200/200/' },
      { name: 'Audi', price: '1500', img: 'http://lorempixel.com/201/200/' },
      { name: 'Mersedes', price: '2500', img: 'http://lorempixel.com/199/200/' },
      { name: 'Jaguar', price: '3000', img: 'http://lorempixel.com/200/201/ '}
    ]
  }

  renderCars() {
    return this.state.cars.map(car => {
      return (
        <Car car={car} key={car.name + Math.random()}/>
      )
    })
  }
  
  render() {
    return (
      <div className="app">
        <div className="car-wrapper">
          { this.renderCars() }
        </div>
      </div>
    )
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);