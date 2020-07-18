/* eslint-disable prefer-object-spread */
// todo: save budget data to firebase
// todo: get allItems data to save so they can be repopulated when loaded.
// todo: get the data from firebase when a date has been chosen from the select options and update the UI

import { arrayReassign } from './helpers'

class PastBudget {
  constructor() {
    this.budgets = db.collection('budgets')
  }

  async saveBudget(obj) {
    const now = new Date()
    const { allItems, budget, percent, totals } = obj
    const budgetData = {
      budget,
      totalInc: totals.inc,
      totalExp: totals.exp,
      totalSav: totals.sav,
      percentExp: percent.exp,
      percentSav: percent.sav,
      allItems: {
        inc: arrayReassign(allItems.inc),
        exp: arrayReassign(allItems.exp),
        sav: arrayReassign(allItems.sav),
      },
      created_at: firebase.firestore.Timestamp.fromDate(now),
    }
    const response = await this.budgets.add(budgetData)
    return response
  }

  async updateBudget(obj, id) {
    const { allItems, budget, percent, totals } = obj
    const budgetData = {
      budget,
      totalInc: totals.inc,
      totalExp: totals.exp,
      totalSav: totals.sav,
      percentExp: percent.exp,
      percentSav: percent.sav,
      allItems: {
        inc: arrayReassign(allItems.inc),
        exp: arrayReassign(allItems.exp),
        sav: arrayReassign(allItems.sav),
      },
    }
    const response = await this.budgets.doc(id).update(budgetData)
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
