# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mudu', '0002_auto_20160515_1553'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='skills',
            field=models.TextField(default=''),
        ),
    ]
