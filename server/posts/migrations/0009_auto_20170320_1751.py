# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-20 22:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0008_auto_20170319_0137'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ('created_date',)},
        ),
    ]
