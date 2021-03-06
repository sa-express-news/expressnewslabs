# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-17 17:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_auto_20170316_2058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='iframe_url',
            field=models.URLField(blank=True, max_length=1999, verbose_name='iFrame URL'),
        ),
        migrations.AlterField(
            model_name='post',
            name='splash_img_url',
            field=models.URLField(blank=True, max_length=1999, verbose_name='Splash Image URL'),
        ),
    ]
