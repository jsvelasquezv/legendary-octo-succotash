class Utils {

  static generatePageRange(currentPage, pageCount) {
    const delta = 2

    let range = []
    for (let i = Math.max(2, currentPage - delta); i <= Math.min(pageCount - 1, currentPage + delta); i++) {
      range.push(i)
    }

    return range
  }
}

export default Utils;
