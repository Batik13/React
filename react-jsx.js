const e = React.createElement


function Car(props) {
  return e('div', { className: 'car' }, [
    e('img', { className: 'car__img', src: props.car.img, key: 'img' }),
    e('span', { className: 'car__name', key: 'span1' }, props.car.name),
    e('span',{ className: 'car__price', key: 'span2' }, props.car.price)
  ])
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
        e(Car, {car: car, key: car.name + Math.random()})
      )
    })
  }
  
  render() {
    return e('div', {className: 'app'}, e(
      'div', {className: 'car-wrapper'}, this.renderCars()
    ))
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(App), domContainer);