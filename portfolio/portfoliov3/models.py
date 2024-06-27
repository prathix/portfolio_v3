from django.db import models

class Projects(models.Model):
    title = models.CharField(max_length = 32)
    short_description = models.CharField(max_length = 250)
    long_description = models.CharField(max_length = 1024)
    image = models.ImageField(upload_to='portfoliov3/images/')