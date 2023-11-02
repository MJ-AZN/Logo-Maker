//Constructors for the components of the logo
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}


class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}" />
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>
`;
    }
}

module.exports = { Shape, Triangle, Circle, Square };

