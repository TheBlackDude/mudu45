# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.IntegerField()),
                ('info', models.TextField(default='')),
            ],
            options={
                'verbose_name': 'About',
            },
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('company', models.CharField(blank=True, max_length=200)),
                ('message', models.TextField(default='')),
            ],
            options={
                'verbose_name': 'Contact',
            },
        ),
    ]
