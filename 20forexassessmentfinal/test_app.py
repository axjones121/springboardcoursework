from app import app
from unittest import TestCase


class AddTest(TestCase):
    def test_convert(self):
        with app.test_client() as client:
            res = client.get('/')  # goes to form.html
            html = res.get_data(as_text=True)

            self.assertIn('<h1>Convert your currency</h1>', html)

    def test_result100usdtoeuro(self):
        with app.test_client() as client:
            res = client.post('/result', data={'amount': '€84.41668073611345'})
            html = res.get_data(as_text=True)

            self.assertIn('<h1>The result is €84.41668073611345</h1>')
