// happy, sad, angry, afraid
export function happy(index) {
  return {
    type: 'INCREMENT_HAPPY',
    index
  }
}

export function sad(index) {
  return {
    type: 'INCREMENT_SAD',
    index
  }
}

export function angry(index) {
  return {
    type: 'INCREMENT_ANGRY',
    index
  }
}

export function afraid(index) {
  return {
    type: 'INCREMENT_AFRAID',
    index
  }
}
