function validTriangles(triangles) {
  if (triangles.length === 0) {
    return 0;
  }
  let total = 0;
  triangles.forEach((array) => {
    const [a, b, c] = array;

    if (a + b > c && b + c > a && a + c > b) {
        total++;
        console.log(total)
    } else {
      total + 0;
    }
  });

  return total;
}

module.exports = validTriangles;
