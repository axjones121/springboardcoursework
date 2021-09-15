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

            self.assertIn('<h1>The result is €84.41668073611345</h1>', html)

    def test_result100eurotousd(self):
        with app.test_client() as client:
            res = client.post('/result', data={'amount': 'US$118.6'})
            html = res.get_data(as_text=True)

            self.assertIn('<h1>The result is US$118.6</h1>', html)

    def test_flash_message1(self):
        with app.test_client() as client:
            res = client.post(
                '/result', data={'convertfr': 'Not a valid code'})
            html = res.get_data(as_text=True)

            self.assertIn('<div>Not a valid code</div>', html)

    def test_flash_message2(self):
        with app.test_client() as client:
            res = client.post(
                '/result', data={'convertto': 'Not a valid code'})
            html = res.get_data(as_text=True)

            self.assertIn('<div>Not a valid code</div>', html)

    def test_flash_message3(self):
        with app.test_client() as client:
            res = client.post('/result', data={'amount': 'Not a valid amount'})
            html = res.get_data(as_text=True)

            self.assertIn('<div>Not a valid amount</div>', html)
