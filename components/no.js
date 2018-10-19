import React from 'react'
import styled from 'styled-components'

const Canvas = styled.canvas`
`


export default class No extends React.Component {
  static emojis = [0x1F645, 0x26D4, 0x1F6AB].map(char => String.fromCodePoint(char))

  componentDidMount() {
    const context = this.canvas.getContext('2d')

    const { innerWidth: width, innerHeight: height } = window;

    this.canvas.width = width;
    this.canvas.height = height;
  
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
  
    context.scale(2, 2)

    const fontSize = 128;
    context.font = `${fontSize}px sans-serif`;
    context.fillText(No.emojis[0], ...this.center(width, height, fontSize))

    context.font = `${fontSize}px sans-serif`;
  }

  center(width, height, fontSize = 64) {
    return ([(width / 4) - (fontSize / 2), (height / 4) + (fontSize / 4)])
  }

  draw() {
    const context = this.canvas.getContext('2d')

    const { innerWidth: width, innerHeight: height } = window;

    const FONT_SIZE = 64
    const LARGE_FONT_SIZE = FONT_SIZE * 2

    context.font = `${FONT_SIZE}px sans-serif`;

    this.interval = setInterval(() => {
      requestAnimationFrame(() => context.fillText(...this.getEmoji(height, width)))
    }, 1);

    this.timeout = setTimeout(() => {
      clearInterval(this.interval);
      context.fillRect(0, 0, width, height)
      context.font = `${LARGE_FONT_SIZE * 2}px sans-serif`;
      context.fillStyle = 'white';
    
      const [x, y] = this.center(width, height, LARGE_FONT_SIZE * 2)
      context.fillText('NO', x - LARGE_FONT_SIZE / 2, y)
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  getEmoji(height, width) {
    const [x, y] = [width, height].map(value => Math.floor(Math.random() * value))

    const emoji = No.emojis[Math.floor(Math.random() * No.emojis.length)]

    return [emoji, x, y];
  }

  render() {
    return (
      <Canvas onClick={() => this.draw()} innerRef={ref => this.canvas = ref} />
    )
  }
}
