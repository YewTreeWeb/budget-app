const budgetController = (() => {
  class Budget {
    constructor(id, description, value) {
      this.id = id
      this.desc = description
      this.val = value
    }
  }

  const data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  }

  return {
    addItem: (type, desc, val) => {
      // Create new ID
      const ID =
        data.allItems[type].length > 0
          ? data.allItems[type][data.allItems[type].length - 1].id + 1
          : 0

      // Set new item to use object
      const newItem = new Budget(ID, desc, val)

      // Push it into data structure
      data.allItems[type].push(newItem)

      // create new item
      return newItem
    },
  }
})()

export default budgetController
