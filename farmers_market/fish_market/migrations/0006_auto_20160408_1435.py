# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-04-08 09:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fish_market', '0005_cartitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fishcurrent',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
