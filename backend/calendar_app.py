from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def login():
    return render_template("welcome.html")
@app.route("/homepage/<name>")
def homepage(name):
    return render_template("homepage.html",name=name)

@app.route ("/homepage/newevent")
def newevent():
    return render_template("newevent.html")

@app.route ("/homepage/myinvitations")
def myinvitations():
    return render_template ("myinvitations.html")

if __name__ == "__main__":
    #app.run(host='192.168.31.67')
    app.run()

