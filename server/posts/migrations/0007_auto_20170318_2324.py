# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-19 04:24
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0006_auto_20170318_1904'),
    ]

    operations = [
        migrations.RenameField(
            model_name='homepagefeature',
            old_name='posts',
            new_name='post',
        ),
        migrations.RemoveField(
            model_name='post',
            name='isFirstFeature',
        ),
        migrations.RemoveField(
            model_name='post',
            name='isSecondFeature',
        ),
        migrations.RemoveField(
            model_name='post',
            name='isThirdFeature',
        ),
    ]
