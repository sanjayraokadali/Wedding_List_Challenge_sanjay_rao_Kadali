# Generated by Django 3.0.3 on 2020-08-05 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ListApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='itemcount',
            name='item_id',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]