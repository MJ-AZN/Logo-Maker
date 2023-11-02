const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape class', () => {
  it('should initialize with correct properties', () => {
    const shape = new Shape('SVG', 'black', 'red');
    expect(shape.text).toEqual('SVG');
    expect(shape.textColor).toEqual('black');
    expect(shape.shapeColor).toEqual('red');
  });
});

describe('Triangle class', () => {
  it('should render a triangle with the requested color and text', () => {
    const triangle = new Triangle('SVG', 'blue', 'green');
    const svg = triangle.render();
    expect(svg).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="green"/>
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="blue">SVG</text>
            </svg>
`);
  });
});

describe('Circle class', () => {
  it('should render a circle with the requested color and text', () => {
    const circle = new Circle('SVG', 'purple', 'yellow');
    const svg = circle.render();
    expect(svg).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="yellow" />
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="purple">SVG</text>
            </svg>
`);
  });
});

describe('Square class', () => {
  it('should render a square with the requested color and text', () => {
    const square = new Square('SVG', 'orange', 'pink');
    const svg = square.render();
    expect(svg).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="pink" />
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="orange">SVG</text>
            </svg>
`);
  });
});