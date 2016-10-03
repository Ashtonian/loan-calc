
module.exports = {
  amortizationSchedule: (loan) => {
    /*     const loan = {
          loanAmount: '5000',
          interest: '4.5',
          startDate: '2016-09-01',
          termMonths: '60'
        } */

        /*
        // calculate the number of payments
        // caclulate monthly interest
        // cacl payment schedule
        // implement payments without dates until you canz't

        // exoteric math to calc base M = P * ( J / (1 - (1 + J)-N)).

    }
    */

    const effectiveInterest = loan.interest / 12
    let monthly = loan.loanAmount * (effectiveInterest / (1 - (1 + effectiveInterest) - loan.termMonths))

    return monthly
  },
  payment: (loan) => {
    return 'return min payment'
  },
  totalInterest: (loan) =>
  {
    return 'returns total interest paid'
  },
  totalAmountPaid: (loan) =>
  {
    return 'returns total amount paid'
  },
  payoffDate: (loan) =>
  {
    return 'return payoff date'
  }
}

function addMonths (dateObj, num) {
  const currentMonth = dateObj.getMonth()
  dateObj.setMonth(dateObj.getMonth() + num)

  // handle roll over in dates and leap year to account for +1 month rolling over 2 months.
  if (dateObj.getMonth() !== ((currentMonth + num) % 12)) {
    dateObj.setDate(0)
  }
  return dateObj
}
