from flask import Flask, request, render_template, redirect, flash
from forex_python.converter import CurrencyRates, CurrencyCodes

app = Flask(__name__)

app.config['SECRET_KEY'] = "helloworld"

@app.route('/')
def convert():
    return render_template('form.html')
    


@app.route('/result', methods=['POST'])
def result():
    convertfr = request.form.get('convertfr')
    convertto = request.form.get('convertto')
    amount = request.form.get('amount')

    c = CurrencyRates()
    cc = CurrencyCodes()
    
    usdtoeur = c.get_rate('USD', 'EUR')
    eurtousd = c.get_rate('EUR', 'USD')
    eurosign = cc.get_symbol('EUR')
    usdsign = cc.get_symbol('USD')

    currencies = ['USD', 'EUR',]
    

    if convertfr not in currencies:
        flash('Not a valid code')

    if convertto not in currencies:
        flash('Not a valid code')

    is_number = isinstance(amount, int)

    if is_number:
        flash('Not a valid amount')

    
    if convertfr == currencies[0] and convertto == currencies[1]:
        result = eurosign + str(float(amount) * usdtoeur)
    
    if convertfr == currencies[1] and convertto == currencies[0]:
        result = usdsign + str(float(amount) * eurtousd)

    


    return render_template('result.html', result=result)