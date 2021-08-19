from flask import Flask, render_template, request 
from stories import story

app = Flask(__name__)


@app.route("/")
def ask_question():
    
    prompts = story.prompts

    return render_template("questions.html", promptstemp=prompts)


@app.route("/story")
def show_story():
    text = story.generate(request.args)

    return render_template("story.html", texttemp=text)