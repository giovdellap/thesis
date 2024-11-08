from flask import Flask
from flask_cors import CORS
import os
from config import ApplicationConfig
from routes.assistant_bp import assistant_bp
from routes.thread_bp import thread_bp
from routes.internal_bp import internal_bp


app = Flask(__name__)
CORS(app)

app.config['basedir'] = os.path.abspath(os.path.dirname(__file__))
app.config.from_object(ApplicationConfig)

app.register_blueprint(assistant_bp, url_prefix='/assistant')
app.register_blueprint(thread_bp, url_prefix='/thread')
app.register_blueprint(internal_bp, url_prefix='/interrogation')


if __name__ == "__main__":
     app.run(host='0.0.0.0',port=10001 ,debug=True)
