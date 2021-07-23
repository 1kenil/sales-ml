from flask import Flask, render_template, request
import pickle
import numpy as np



arr = np.array([[-1.45588388, -1.44154763, -1.44154763, -0.45606062]])

model = pickle.load(open('advertising.pkl', 'rb'))
predt = model.predict(arr)
print(predt) 


app = Flask(__name__)


@app.route('/')
def man():
    return render_template('index.html')
    

@app.route('/home')
def ma():
    return render_template('home.html')


@app.route('/ml', methods=['POST'])
def home():
    d1 = request.form['tv']
    d2 = request.form['mobile']
    d3 = request.form['radio']
    d4 = request.form['news']

    arr = np.array([[d1, d2, d3, d4]])
    outt = model.predict(arr)
    print(outt)
    return render_template('output.html', data=outt)


if __name__== "__main__":
    app.run(debug=True)

