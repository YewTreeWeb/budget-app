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
    budget: 0,
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
    calculateBudget: (type) => {
      // 1. Calculate the budget
      let sum = 0
      data.allItems[type].forEach((cur) => {
        sum += cur.val
      })
      data.totals[type] = sum

      // 2. Calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp

      // 3. Calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percent = Math.round((data.totals.exp / data.totals.inc) * 100)
      } else {
        data.percent = -1
      }

      // 3. Return the budget
      if (process.env.NODE_ENV !== 'production') {
        console.log(data.totals.exp, data.totals.inc)
        console.log(data.budget, data.percent)
      }
      return data
    },
    removeItem: (type, id) => {
      const ids = data.allItems[type].map((current) => {
        return current.id
      })
      const index = ids.indexOf(id)

      if (index !== -1) {
        data.allItems[type].splice(index, 1)
      }
    },
  }
})()

export default budgetController
