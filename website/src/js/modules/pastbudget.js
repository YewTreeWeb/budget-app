class PastBudget {
  constructor() {
    this.budgets = db.collection('budgets')
  }

  async saveBudget(obj, exp, inc, sav) {
    const now = new Date()
    const budget = {
      budget: obj.budget,
      totalInc: obj.totals.inc,
      totalExp: obj.totals.exp,
      totalSav: obj.totals.sav,
      percentExp: obj.percent.exp,
      percentSav: obj.percent.sav,
      allItems: {
        exp: [exp],
        inc: [inc],
        sav: [sav],
      },
      created_at: firebase.firestore.Timestamp.fromDate(now),
    }
    const response = await this.budgets.add(budget)
    return response
  }

  getBudget(cb) {
    this.budgets.orderBy('created_at').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          cb(change.doc.data(), change.doc.id)
        }
      })
    })
  }
}

export default PastBudget
