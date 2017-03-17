from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError


class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    description = models.TextField()
    main_img_url = models.URLField(max_length=1999, verbose_name='Image URL')
    splash_img_url = models.URLField(max_length=1999, verbose_name='Splash Image URL')
    iframe_url = models.URLField(max_length=1999, verbose_name="iFrame URL")
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
    #is_first_feature = models.BooleanField(verbose_name="Set As First Featured Post")

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title


class HomepageFeature(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    posts = models.ForeignKey(Post)
