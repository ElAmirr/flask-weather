from flask import Flask, render_template, url_for, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import form
from wtforms.fields.simple import PasswordField
from forms import RegistrationForm, LoginForm

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['SECRET_KEY'] = '9b7cde8d2003dace03f5a362603f812b'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
9

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"



@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/register", methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        flash(f'Account created for {form.username.data}!', 'success')
        return redirect(url_for('home'))
    return render_template('register.html',title='Register', form=form)

@app.route("/login", methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        return redirect(url_for('home'))
    return render_template('login.html',title='Login', form=form)

@app.route("/favorite")
def favorite():
    return render_template('favorite.html', title='favorite')

@app.route("/hourlydetail")
def hourlydetail():
    return render_template('hourlydetail.html', title='hourlydetail')

@app.route("/dailydetail")
def dailydetail():
    return render_template('dailydetail.html', title='dailydetail')

if __name__ == '__main__':
    app.run(host='192.168.42.29', port=5000, debug=True)
    