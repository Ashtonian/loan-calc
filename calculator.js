
module.exports = {
  amortizationSchedule: (loanAmount, interest, payment, numberOfPayments, numberOfPaymentsAnually = 12) => {
    /*     const loan = {
          loanAmount: '5000',
          interest: '4.5',
          startDate: '2016-09-01',
          termMonths: '60'
        } */
        loanAmount *= 100
        interest *= 100
        payment *= 100 
        

    const schedule = []
    let remainingBalance = loanAmount
    let totalInterest = 0

    for (let i = 0; i < numberOfPayments; i++) {
      let interestAmount = remainingBalance * (interest / 100 / numberOfPaymentsAnually)
      interestAmount = Math.round(interestAmount)
      totalInterest += interestAmount
      totalInterest = Math.round(totalInterest*100)/100
      let principle = payment - interestAmount
      principle = Math.round(principle*100)/100


      remainingBalance -= principle
      remainingBalance = Math.round(remainingBalance*100)/100

      const appliedPayment = {
        paymentNumber: i,
        payment: payment,
        principal: principle,
        interest: interestAmount,
        totalInterest: totalInterest,
        balance: remainingBalance
      }

      schedule.push(appliedPayment)
    }
    console.log(schedule)
    return schedule
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
