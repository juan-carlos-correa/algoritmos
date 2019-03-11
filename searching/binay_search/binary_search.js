module.exports = function binarySearch (list, value) {
  let start = 0
  let finish = list.length - 1
  let midd = Math.floor((start + finish) / 2)

  while (start < finish && list[midd] !== value) {
    if (value < list[midd]) {
      finish = midd - 1
    } else {
      start = midd + 1
    }

    midd = Math.floor((start + finish) / 2)
  }

  return list[midd] === value ? midd : false
}
