class Point {
    static quantity = 0

    constructor(x, y) {
        this.x = x
        this.y = y
        Point.quantity += 1
    }

    static displayName = "Point"
    static distance (a, b) {
        const dx = a.x - b.x
        const dy = a.y - b.y

        return Math.hypot(dx, dy)
    }

    resta () {
        return this.x - this.y
    }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10)

//Variable de instancia
console.log(p1.x);

console.log(p1.resta())

console.log(Point.distance(p1, p2));

//Variable de clase
console.log(Point.quantity);


/* p1.displayName // undefined
p1.distance // undefined
p2.displayName // undefined
p2.distance // undefined

console.log(Point.displayName) // "Point"
console.log(Point.quantity);

console.log(Point.distance(p1, p2)) // 7.0710678118654755 */
