# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mudu', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='about',
            options={'verbose_name_plural': 'About', 'verbose_name': 'About'},
        ),
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name_plural': 'Contact', 'verbose_name': 'Contact'},
        ),
        migrations.AlterField(
            model_name='about',
            name='phone',
            field=models.CharField(max_length=100),
        ),
    ]
