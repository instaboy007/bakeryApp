# Generated by Django 4.0.4 on 2023-11-07 05:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bakeryApp', '0004_remove_customuser_orders_order_owner'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='cart_items',
        ),
        migrations.AddField(
            model_name='cart',
            name='cart_items',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='bakeryApp.cartitem'),
        ),
    ]
