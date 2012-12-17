import os
import sys

sys.path.append(os.path.dirname(__file__))
os.environ['DJANGO_SETTINGS_MODULE'] = 'appstore.settings'
os.environ['LOCAL_DEV'] = 'True'

import django.core.handlers.wsgi
application = django.core.handlers.wsgi.WSGIHandler()
