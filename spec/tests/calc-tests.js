'use-strict'

const caclutaor = require('../../calculator.js')

describe('calculator tests', () => {
  // loan amount 5k, 4.5 interest, startdate 2016-09-01, term:60mo
  it('returns expected 5 year result', () => {
    const loan = {
      loanAmount: '5000',
      interest: '4.5',
      startDate: '2016-09-01',
      termMonths: '60'
    }

    const amortizationSchedule = [
        { date: '01-10-2016', payment: '93.22', principal: '74.47', interest: '18.75', totalInterest: '18.75', balance: '4925.53' },
        { date: '01-11-2016', payment: '93.22', principal: '74.74', interest: '18.47', totalInterest: '37.22', balance: '4850.79'},
        { date: '01-12-2016', payment: '93.22', principal: '75.02', interest: '18.19', totalInterest: '55.41', balance: '4775.77'},
        { date: '01-01-2017', payment: '93.22', principal: '75.31', interest: '17.91', totalInterest: '73.32', balance: '4700.46'},
        { date: '01-02-2017', payment: '93.22', principal: '75.59', interest: '17.63', totalInterest: '90.95', balance: '4624.87'},
        { date: '01-03-2017', payment: '93.22', principal: '75.87', interest: '17.34', totalInterest: '108.29', balance: '4549.00'},
        { date: '01-04-2017', payment: '93.22', principal: '76.16', interest: '17.06', totalInterest: '125.35', balance: '4472.84'},
        { date: '01-05-2017', payment: '93.22', principal: '76.44', interest: '16.77', totalInterest: '142.12', balance: '4396.40'},
        { date: '01-06-2017', payment: '93.22', principal: '76.73', interest: '16.49', totalInterest: '158.61', balance: '4319.67'},
        { date: '01-07-2017', payment: '93.22', principal: '77.02', interest: '16.20', totalInterest: '174.81', balance: '4242.66'},
        { date: '01-08-2017', payment: '93.22', principal: '77.31', interest: '15.91', totalInterest: '190.72', balance: '4165.35'},
        { date: '01-09-2017', payment: '93.22', principal: '77.60', interest: '15.62', totalInterest: '206.34', balance: '4087.76'},
        { date: '01-10-2017', payment: '93.22', principal: '77.89', interest: '15.33', totalInterest: '221.67', balance: '4009.87'},
        { date: '01-11-2017', payment: '93.22', principal: '78.18', interest: '15.04', totalInterest: '236.70', balance: '3931.69'},
        { date: '01-12-2017', payment: '93.22', principal: '78.47', interest: '14.74', totalInterest: '251.45', balance: '3853.22'},
        { date: '01-01-2018', payment: '93.22', principal: '78.77', interest: '14.45', totalInterest: '265.90', balance: '3774.46'},
        { date: '01-02-2018', payment: '93.22', principal: '79.06', interest: '14.15', totalInterest: '280.05', balance: '3695.39'},
        { date: '01-03-2018', payment: '93.22', principal: '79.36', interest: '13.86', totalInterest: '293.91', balance: '3616.04'},
        { date: '01-04-2018', payment: '93.22', principal: '79.65', interest: '13.56', totalInterest: '307.47', balance: '3536.38'},
        { date: '01-05-2018', payment: '93.22', principal: '79.95', interest: '13.26', totalInterest: '320.73', balance: '3456.43'},
        { date: '01-06-2018', payment: '93.22', principal: '80.25', interest: '12.96', totalInterest: '333.69', balance: '3376.18'},
        { date: '01-07-2018', payment: '93.22', principal: '80.55', interest: '12.66', totalInterest: '346.35', balance: '3295.62'},
        { date: '01-08-2018', payment: '93.22', principal: '80.86', interest: '12.36', totalInterest: '358.71', balance: '3214.76'},
        { date: '01-09-2018', payment: '93.22', principal: '81.16', interest: '12.06', totalInterest: '370.77', balance: '3133.60'},
        { date: '01-10-2018', payment: '93.22', principal: '81.46', interest: '11.75', totalInterest: '382.52', balance: '3052.14'},
        { date: '01-11-2018', payment: '93.22', principal: '81.77', interest: '11.45', totalInterest: '393.96', balance: '2970.37'},
        { date: '01-12-2018', payment: '93.22', principal: '82.08', interest: '11.14', totalInterest: '405.10', balance: '2888.29'},
        { date: '01-01-2019', payment: '93.22', principal: '82.38', interest: '10.83', totalInterest: '415.93', balance: '2805.91'},
        { date: '01-02-2019', payment: '93.22', principal: '82.69', interest: '10.52', totalInterest: '426.46', balance: '2723.22'},
        { date: '01-03-2019', payment: '93.22', principal: '83.00', interest: '10.21', totalInterest: '436.67', balance: '2640.21'},
        { date: '01-04-2019', payment: '93.22', principal: '83.31', interest: '9.90', totalInterest: '446.57', balance: '2556.90'},
        { date: '01-05-2019', payment: '93.22', principal: '83.63', interest: '9.59', totalInterest: '456.16', balance: '2473.27'},
        { date: '01-06-2019', payment: '93.22', principal: '83.94', interest: '9.27', totalInterest: '465.43', balance: '2389.33'},
        { date: '01-07-2019', payment: '93.22', principal: '84.26', interest: '8.96', totalInterest: '474.39', balance: '2305.08'},
        { date: '01-08-2019', payment: '93.22', principal: '84.57', interest: '8.64', totalInterest: '483.04', balance: '2220.51'},
        { date: '01-09-2019', payment: '93.22', principal: '84.89', interest: '8.33', totalInterest: '491.36', balance: '2135.62'},
        { date: '01-10-2019', payment: '93.22', principal: '85.21', interest: '8.01', totalInterest: '499.37', balance: '2050.41'},
        { date: '01-11-2019', payment: '93.22', principal: '85.53', interest: '7.69', totalInterest: '507.06', balance: '1964.89'},
        { date: '01-12-2019', payment: '93.22', principal: '85.85', interest: '7.37', totalInterest: '514.43', balance: '1879.04'},
        { date: '01-01-2020', payment: '93.22', principal: '86.17', interest: '7.05', totalInterest: '521.47', balance: '1792.87'},
        { date: '01-02-2020', payment: '93.22', principal: '86.49', interest: '6.72', totalInterest: '528.20', balance: '1706.38'},
        { date: '01-03-2020', payment: '93.22', principal: '86.82', interest: '6.40', totalInterest: '534.60', balance: '1619.56'},
        { date: '01-04-2020', payment: '93.22', principal: '87.14', interest: '6.07', totalInterest: '540.67', balance: '1532.42'},
        { date: '01-05-2020', payment: '93.22', principal: '87.47', interest: '5.75', totalInterest: '546.42', balance: '1444.95'},
        { date: '01-06-2020', payment: '93.22', principal: '87.80', interest: '5.42', totalInterest: '551.84', balance: '1357.16'},
        { date: '01-07-2020', payment: '93.22', principal: '88.13', interest: '5.09', totalInterest: '556.92', balance: '1269.03'},
        { date: '01-08-2020', payment: '93.22', principal: '88.46', interest: '4.76', totalInterest: '561.68', balance: '1180.57'},
        { date: '01-09-2020', payment: '93.22', principal: '88.79', interest: '4.43', totalInterest: '566.11', balance: '1091.79'},
        { date: '01-10-2020', payment: '93.22', principal: '89.12', interest: '4.09', totalInterest: '570.21', balance: '1002.67'},
        { date: '01-11-2020', payment: '93.22', principal: '89.46', interest: '3.76', totalInterest: '573.97', balance: '913.21'},
        { date: '01-12-2020', payment: '93.22', principal: '89.79', interest: '3.42', totalInterest: '577.39', balance: '823.42'},
        { date: '01-01-2021', payment: '93.22', principal: '90.13', interest: '3.09', totalInterest: '580.48', balance: '733.29'},
        { date: '01-02-2021', payment: '93.22', principal: '90.47', interest: '2.75', totalInterest: '583.23', balance: '642.83'},
        { date: '01-03-2021', payment: '93.22', principal: '90.80', interest: '2.41', totalInterest: '585.64', balance: '552.02'},
        { date: '01-04-2021', payment: '93.22', principal: '91.15', interest: '2.07', totalInterest: '587.71', balance: '460.88'},
        { date: '01-05-2021', payment: '93.22', principal: '91.49', interest: '1.73', totalInterest: '589.44', balance: '369.39'},
        { date: '01-06-2021', payment: '93.22', principal: '91.83', interest: '1.39', totalInterest: '590.82', balance: '277.56'},
        { date: '01-07-2021', payment: '93.22', principal: '92.17', interest: '1.04', totalInterest: '591.86', balance: '185.39'},
        { date: '01-08-2021', payment: '93.22', principal: '92.52', interest: '0.70', totalInterest: '592.56', balance: '92.87'},
        { date: '01-09-2021', payment: '93.22', principal: '92.87', interest: '0.35', totalInterest: '592.91', balance: '0.00'}
    ]

    expect(caclutaor.amortizationSchedule(loan.loanAmount, loan.interest, '93.22', loan.termMonths, 12)).toEqual(amortizationSchedule)
  })
})
