from __future__ import unicode_literals
from django.db import models
from django.utils import timezone
from django.core.exceptions import ValidationError


class Post(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    story_link = models.URLField(
        max_length=1999,
        verbose_name='Story Link'
    )
    main_img_url = models.URLField(
        max_length=1999,
        verbose_name='Image URL'
    )
    splash_img_url = models.URLField(
    	max_length=1999,
    	verbose_name='Splash Image URL',
    	blank=True
    )
    gif_url = models.URLField(
        max_length=1999,
        verbose_name='GIF URL',
        blank=True
    )
    iframe_url = models.URLField(
    	max_length=1999,
    	verbose_name="iFrame URL",
    	blank=True
    )
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(
    	blank=True,
    	null=True
    )

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('-created_date',)


class HomepageFeature(models.Model):
    author = models.ForeignKey('auth.User')
    title = models.CharField(max_length=200)
    slug = models.CharField(max_length=200)
    post = models.ForeignKey(Post)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('id',)
