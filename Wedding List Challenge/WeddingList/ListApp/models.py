from django.db import models

# Create your models here.
class GiftItemModel(models.Model):

    item_id = models.IntegerField()
    name = models.CharField(max_length = 254)
    brand = models.CharField(max_length = 254)
    price = models.FloatField()
    stock = models.IntegerField()

    def __str__(self):

        return self.name

class ItemCount(models.Model):

    item_id = models.IntegerField()
    count = models.IntegerField()

    def __str__(self):

        return "Item Id: {}".format(str(self.item_id))
