import React, { Children, Component, cloneElement } from 'react'
import Swipeable from 'react-swipeable'

class Screens extends Component {
  constructor(props, context) {
    super(props, context)

    this.prevWheelEvent = new Date().getTime()
    this.scrollings = []

    this.state = {
      move: false,
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.move !== prevState.move && this.state.move) {
      setTimeout(() => {
        this.setState({ move: false })
      }, 700)
    }
  }

  onPrev() {
    const { active, onPrev } = this.props

    if (active > 0 && onPrev) {
      this.setState({ move: true }, () => onPrev())
    }
  }

  onNext() {
    const { active, children, onNext } = this.props

    if (active < (Children.count(children) - 1) && onNext) {
      this.setState({ move: true }, () => onNext())
    }
  }

  onSwipingDown = () => {
    const { move } = this.state

    if (!move) {
      this.onPrev()
    }
  }

  onSwipingUp = () => {
    const { move } = this.state

    if (!move) {
      this.onNext()
    }
  }

  onWheel = ({ deltaY }) => {
    const { move } = this.state

    if(this.scrollings.length > 149){
      this.scrollings.shift()
    }

    this.scrollings.push(Math.abs(deltaY))

    const currentWheelEvent = new Date().getTime()
    const wheelEventDiff = currentWheelEvent - this.prevWheelEvent
    this.prevWheelEvent = currentWheelEvent

    if (wheelEventDiff > 200) {
      this.scrollings = []
    }

    if (move) {
      return
    }

    const averageEnd = this.getAverage(this.scrollings, 10);
    const averageMiddle = this.getAverage(this.scrollings, 70)

    if (averageEnd >= averageMiddle) {
      if (deltaY > 0)  {
        this.onNext()
      } else if (deltaY < 0) {
        this.onPrev()
      }
    }
  }

  getAverage(elements, number) {
    const sum = elements.slice(Math.max(elements.length - number, 1))
                        .reduce((result, element) => result + element, 0)

    return Math.ceil(sum / number)
  }

  renderChildren() {
    const { children, active } = this.props

    return Children.map(children, (child, index) => cloneElement(child, { active: active === index }))
  }

  render() {
    const { height, active } = this.props

    return (
      <Swipeable
        onSwipingUp={this.onSwipingUp}
        onSwipingDown={this.onSwipingDown}
      >
        <div
          style={{ transform: `translate3d(0px, -${active * height}px, 0px)`, transition: 'all 700ms ease' }}
          onWheel={this.onWheel}
        >
          {this.renderChildren()}
        </div>
      </Swipeable>
    )
  }
}

export default Screens
