# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-19 06:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0007_auto_20170318_2324'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='homepagefeature',
            options={'ordering': ('id',)},
        ),
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ('id',)},
        ),
    ]