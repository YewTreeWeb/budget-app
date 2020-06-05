// todo: save budget data to firebase
// todo: get allItems data to save so they can be repopulated when loaded.
// todo: get the data from firebase when a date has been chosen from the select options and update the UI

class PastBudget {
  constructor() {
    this.budgets = db.collection('budgets')
  }

  async saveBudget(obj) {
    const now = new Date()
    const budget = {
      budget: obj.budget,
      totalInc: obj.totals.inc,
      totalExp: obj.totals.exp,
      totalSav: obj.totals.sav,
      percentExp: obj.percent.exp,
      percentSav: obj.percent.sav,
      allItems: {
        exp: [obj.allItems.exp],
        inc: [obj.allItems.inc],
        sav: [obj.allItems.sav],
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
