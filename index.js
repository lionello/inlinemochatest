function sort(array) {
  if (array.length <= 1) {
    return array
  }
  const [pivot, ...rest] = array
  const left = rest.filter(v => v < pivot)
  const right = rest.filter(v => v >= pivot)
  return [...sort(left), pivot, ...sort(right)]
}

global.describe && describe('array', function() {
  const Assert = require('assert')
  it('#sort()', function() {
    Assert.deepEqual(sort([3,2,1]), [1,2,3])
  })
})
