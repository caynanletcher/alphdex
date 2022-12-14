# Generated by Django 4.1 on 2022-09-07 22:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sets', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Card',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('number', models.PositiveSmallIntegerField()),
                ('set', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cards', to='sets.set')),
            ],
        ),
    ]
