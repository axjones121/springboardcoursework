from flask import Flask, request
from operations import add, sub, mult, div


app = Flask(__name__) #name is value of file name

@app.route()