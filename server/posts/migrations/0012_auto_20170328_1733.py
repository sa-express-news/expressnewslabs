# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-28 22:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0011_homepagefeature_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='gif_url',
            field=models.URLField(blank=True, max_length=1999, verbose_name='GIF URL'),
        ),
        migrations.AddField(
            model_name='post',
            name='story_link',
            field=models.URLField(default='http://labs.expressnews.com/adrift-part-1/', max_length=1999, verbose_name='Story Link'),
            preserve_default=False,
        ),
    ]
