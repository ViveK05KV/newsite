# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-03-24 16:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fish_market', '0003_auto_20160321_2231'),
    ]

    operations = [
        migrations.AddField(
            model_name='fishmain',
            name='ccimg',
            field=models.URLField(default=' '),
        ),
        migrations.AddField(
            model_name='fishmain',
            name='climg',
            field=models.URLField(default=' '),
        ),
        migrations.AddField(
            model_name='fishmain',
            name='wimg',
            field=models.URLField(default=' '),
        ),
    ]