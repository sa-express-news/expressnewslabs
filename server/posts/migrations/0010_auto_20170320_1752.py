# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-20 22:52
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0009_auto_20170320_1751'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ('-created_date',)},
        ),
    ]
