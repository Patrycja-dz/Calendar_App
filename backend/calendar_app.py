from flask import Flask, render_template, jsonify, request
import json

app = Flask(__name__)


@app.route("/")
def login():
    return render_template("welcome.html")


@app.route("/homepage/<name>")
def homepage(name):
    return render_template("homepage.html", name=name)


@app.route("/homepage/newevent")
def new_event():
    return render_template("newevent.html")


@app.route("/homepage/myinvitations")
def my_invitations():
    return render_template("myinvitations.html")


@app.route('/returnjson', methods=['GET'])
def return_json():
    if request.method == 'GET':
        with open("file.json", "r") as file:
            data = json.load(file)
            my_events_ids = []
            users = data["users"]
            for user in users["user"]:
                if user["name"] == "Agata":
                    my_events_ids = user["events"]
            events = data["events"]
            my_events = []
            for event in events["event"]:
                for event_id in my_events_ids:
                    if event_id == event["id"]:
                        my_events.append(event)
            return jsonify(my_events)


if __name__ == "__main__":
    # app.run(host='192.168.31.67')
    app.run(debug=True)
