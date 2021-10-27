from flask import Flask, render_template, url_for, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import form
from forms import RegistrationForm, LoginForm

app = Flask(__name__, template_folder='templates', static_folder='static')
app.config['SECRET_KEY'] = '9b7cde8d2003dace03f5a362603f812b'

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
    app.run(debug=True)