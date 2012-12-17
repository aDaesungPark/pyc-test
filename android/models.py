from django.db import models
from django.contrib.admin.models import User
import datetime

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length = 100, default = '')
    
    def __unicode__(self):
        return self.name

class App(models.Model):
    app_name = models.CharField(max_length = 100, default = '')
    package_name = models.CharField(max_length = 100, default = '')
    author = models.ForeignKey(User)
    category = models.ForeignKey(Category)
    icon_name = models.CharField(max_length = 100, default = '')
    pimage_name = models.CharField(max_length = 100, default = '')  # promotion image name
    description = models.CharField(max_length = 1000, default = '')
    price = models.IntegerField(default = 0)
    tag = models.CharField(max_length = 100, default = '')
    count = models.IntegerField(default = 0)
    recent_apk_id = models.IntegerField(default = 0)
    
    def __unicode__(self):
        return self.app_name
    
    def is_registered(self):
        if self.recent_apk_id is 0:
            return False
        else:
            return True
    
class Apk(models.Model):
    app = models.ForeignKey(App)
    apk_name = models.CharField(max_length = 100, default = '')
    version_name = models.CharField(max_length = 100, default = '')
    version_code = models.IntegerField(default = 0)
    update_date_time = models.DateTimeField(default=datetime.datetime.now)
    recent_change = models.CharField(max_length = 1000, default = '')
    passwd = models.CharField(max_length = 100, blank = True, default = '')
    is_verified = models.BooleanField(default = False)
    
    def __unicode__(self):
        return self.apk_name
    
class Dl_record(models.Model):
    apk = models.ForeignKey(Apk)
    model = models.CharField(max_length = 1000, default = '')
    version_release = models.CharField(max_length = 1000, default = '')
    app = models.ForeignKey(App)
    date_time = models.DateTimeField(default=datetime.datetime.now)
    imei = models.CharField(max_length = 1000, default = '')
    market_version_code = models.IntegerField(default = 1)
    download_date_time = models.DateTimeField(default=datetime.datetime.now)
    user = models.ForeignKey(User)

class Comment(models.Model):
    app = models.ForeignKey(App)
    version_code = models.IntegerField(default = 0)
    version_name = models.CharField(max_length = 100, default = '')
    imei = models.CharField(max_length = 100, default = '')
    model = models.CharField(max_length = 100, default = '')
    version_release = models.CharField(max_length = 100, default = '')
    title = models.CharField(max_length = 100, default = '')
    comment = models.CharField(max_length = 1000, default = '')
    date_time = models.DateTimeField(default=datetime.datetime.now)
    rating = models.IntegerField(default = 0)
    user = models.ForeignKey(User)

class Captured_image(models.Model):
    app = models.ForeignKey(App)
    cimage_name = models.CharField(max_length = 100, default = '')     # captured image name
