from django.db import models

# Create your models here.
class Donation(models.Model):
    food_item = models.CharField(max_length=100)
    quantity = models.IntegerField()
    donated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.food_item