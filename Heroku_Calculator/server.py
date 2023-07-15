from flask import Flask, request, jsonify,render_template

app = Flask(__name__)

@app.route('/',methods=['GET'])
def home():
    return render_template('index.html')
    

@app.route('/addition', methods=['POST'])
def addition():
    data = request.get_json()
    num1 = data['num1']
    num2 = data['num2']
    result = num1 + num2
    return jsonify({'sum': result})

if __name__ == '__main__':
    app.run(debug=True)
