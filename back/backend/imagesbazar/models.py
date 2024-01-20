from django.db import models

from users.models import *

# Create your models here.


class ImageHistory(models.Model):
    imageId = models.CharField(max_length=200, null=True)
    imageUrl = models.CharField(max_length=1000, null=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)


class Favorites(models.Model):
    imageId = models.CharField(max_length=200, null=True)
    imageUrl = models.CharField(max_length=1000, null=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
